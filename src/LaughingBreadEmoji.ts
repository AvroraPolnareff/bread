import {BaseClient, Client, ClientOptions, Message, MessageEmbed, TextChannel} from "discord.js";
import {Logger} from "./utility/Logger";
import {CommandDispatcher} from "./commands/CommandDispatcher";
import {TimerCategory, TimerStorage} from "./storages/TimerStorage";
import {BreadUser as UserEntity} from "./db/entity/BreadUser";
import {MarketUrl} from "./db/entity/MarketUrl";
import {huntRivenModsOnce} from "./fuctions/huntRivenModsOnce";
import {parseUrlQuery} from "./fuctions/parseUrlQuery";
import PQueue from "p-queue";
import {getRepository} from "typeorm/index";
import {decorate, inject, injectable} from "inversify";
import TYPES from "./types/types";
import {EventEmitter} from "events";
import {Prey, Status} from "./db/entity/Prey";
import {stalkPrey} from "./fuctions/stalkPrey";
import {RivenHunter} from "./features/RivenHunter";
import {makeEmbed} from "./fuctions/embed";

decorate(injectable(), Client)
decorate(injectable(), BaseClient)
decorate(injectable(), EventEmitter)

@injectable()
export class LaughingBreadEmoji extends Client {

    constructor(
        @inject(TYPES.Logger) private logger: Logger,
        @inject(TYPES.PQueue) private promiseQueue: PQueue,
        @inject(TYPES.CommandDispatcher) private commandDispatcher: CommandDispatcher,
        @inject(TYPES.TimerStorage) private timerStorage: TimerStorage,
        @inject(TYPES.clientConfig) options?: ClientOptions
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


            for (let {userId, userUpdateFrequency} of userEntities) {
                const user = await this.users.fetch(userId)
                let preys = await preyRepository.find({userId: userId})

                for (const prey of preys) {
                    const timer = setInterval(async () => {
                        const userInfo = await this.promiseQueue.add(async () => {
                            return await stalkPrey(prey.url)
                        })

                        const newPrey = await preyRepository.findOne({id: prey.id})
                        if (userInfo.status !== newPrey.status) {
                            const onlineMessage = `<@${prey.userId}>, ${userInfo.nickname} is currently ${userInfo.status} on Warframe Market!`
                            const offlineMessage = `<@${prey.userId}>, ${userInfo.nickname} just went offline on Warframe Market.`
                            const message = prey.status === Status.Offline ? offlineMessage : onlineMessage

                            if (prey.guildId && prey.channelId) {
                                const channel = this.guilds.resolve(prey.guildId).channels.resolve(prey.channelId) as TextChannel
                                await channel
                                    .send(message)

                            } else {
                                await user.send(message)
                            }
                            await preyRepository.update({id: prey.id}, {
                                status: userInfo.status,
                                lastLogin: Date.now().toString()
                            })
                        }
                    }, userUpdateFrequency)
                    this.timerStorage.add(timer, userId, TimerCategory.user, prey.url)
                }


                const urlEntities = await urlRepository.find({userId})

                for (let urlEntity of urlEntities) {
                    const rivenHunter = new RivenHunter(user.id, this.promiseQueue, this.timerStorage)
                    await rivenHunter.startHunting(urlEntity, async (rivenMods) => {
                        const embeds = rivenMods.map(mod => makeEmbed(mod))
                        for (const embed of embeds) {
                            if (urlEntity.guildId && urlEntity.channelId) {
                                const channel = this.guilds.resolve(urlEntity.guildId).channels.resolve(urlEntity.channelId) as TextChannel
                                await channel
                                    .send(`<@${userId}>`, embed)

                            } else {
                                await user.send(`<@${userId}>`, embed)
                            }
                        }
                    })
                }
            }
        })

        this.on('message', async (msg: Message) => {
            await this.commandDispatcher.run(msg)
        })
    }
}




