import {BaseClient, Client, ClientOptions, Message, MessageEmbed, TextChannel} from "discord.js";
import {Logger} from "./utility/Logger";
import {CommandDispatcher} from "./commands/CommandDispatcher";
import {TimerCategory, TimerStorage} from "./storages/TimerStorage";
import {BreadUser as UserEntity} from "./db/entity/BreadUser";
import {MarketUrl} from "./db/entity/MarketUrl";
import {huntRivensOnce} from "./fuctions/huntRivensOnce";
import {parseUrlQuery} from "./fuctions/parseUrlQuery";
import PQueue from "p-queue";
import {getRepository} from "typeorm/index";
import {decorate, inject, injectable} from "inversify";
import TYPES from "./types/types";
import {EventEmitter} from "events";
import {Prey} from "./db/entity/Prey";
import {stalkPrey} from "./fuctions/stalkPrey";

decorate(injectable(), Client)
decorate(injectable(), BaseClient)
decorate(injectable(), EventEmitter)

@injectable()
export class LaughingBreadEmoji extends Client {

    constructor(
        @inject(TYPES.Logger) private logger: Logger,
        @inject(TYPES.PQueue) private promiseQueue : PQueue,
        @inject(TYPES.CommandDispatcher) private commandDispatcher : CommandDispatcher,
        @inject(TYPES.TimerStorage) private timerStorage : TimerStorage,
        @inject(TYPES.clientConfig) options? : ClientOptions
    ) {
        super(options);
        this.initClient()
    }

    private initClient = () => {
        this.promiseQueue.on('active', () => {
            this.logger.debug(`Working on item.  Size: ${this.promiseQueue.size}  Pending: ${this.promiseQueue.pending}`);
        })

        this.on('ready', async () => {
            this.logger.info(`Logged in as ${this.user.tag}!`)
            const admins = process.env.ADMIN_ID.split(',')
            for (let adminId of admins) {
                const admin = await this.users.fetch(adminId)
                await admin.send(`Logged in as ${this.user.tag}!`)
            }

            const userRepository = getRepository(UserEntity)
            const urlRepository = getRepository(MarketUrl)
            const preyRepository = getRepository(Prey)
            const userEntities = await userRepository.find()


            for (let {isHunting, userId, updateFrequency} of userEntities) {
                const user = await this.users.fetch(userId)
                let preys = await preyRepository.find({userId: userId})
                for (const prey of preys) {
                    const timer = setInterval(async () => {
                        const channelId = prey.channelId
                        const guild = prey.guildId

                        const userInfo = await this.promiseQueue.add(async () => {
                            return await stalkPrey(prey.url)
                        })

                        if (userInfo.status !== prey.status) {
                            const channel = this.guilds.resolve(prey.guildId).channels.resolve(prey.channelId) as TextChannel
                            await channel
                                .send(`**${userInfo.nickname}** is now ${userInfo.status} on Warframe Market! <@${prey.userId}>`)
                            await preyRepository.update({id: prey.id}, {
                                status: userInfo.status,
                                lastLogin: Date.toString()
                            })
                        }
                    }, updateFrequency)
                    this.timerStorage.add(timer, userId, TimerCategory.user, prey.url)
                }

                if (isHunting) {

                    const urlEntities = await urlRepository.find({userId})

                    for (let {url, platinumLimit, updateFrequency} of urlEntities) {
                        const timer = setInterval(async () => {
                            try {
                                const embeds = await this.promiseQueue.add(async () => await huntRivensOnce(url, platinumLimit))
                                for (let embed of embeds) {
                                    await user.send(parseUrlQuery(url), {embed})
                                }
                            } catch (e) {
                                this.logger.error(e)
                                let embed = new MessageEmbed()
                                embed.addField("Error...", e.message)
                                await user.send(embed)
                            }
                        }, updateFrequency)

                        this.timerStorage.add(timer, userId, TimerCategory.riven)
                    }
                }
            }
        })

        this.on('message', async (msg: Message) => {
            await this.commandDispatcher.run(msg)
        })
    }
}
