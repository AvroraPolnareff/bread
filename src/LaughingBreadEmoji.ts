import {BaseClient, Client, ClientOptions, Message, MessageEmbed} from "discord.js";
import {Logger} from "./utility/Logger";
import {CommandDispatcher} from "./commands/CommandDispatcher";
import {TimerStorage} from "./storages/TimerStorage";
import {BreadUser as UserEntity} from "./db/entity/BreadUser";
import {MarketUrl} from "./db/entity/MarketUrl";
import {huntRivensOnce} from "./fuctions/huntRivensOnce";
import {parseUrlQuery} from "./fuctions/parseUrlQuery";
import PQueue from "p-queue";
import {getRepository} from "typeorm/index";
import {decorate, inject, injectable} from "inversify";
import TYPES from "./types/types";
import {EventEmitter} from "events";

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
            const userEntities = await userRepository.find()

            for (let {isHunting, userId} of userEntities) {
                if (isHunting) {
                    const user = await this.users.fetch(userId)
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

                        this.timerStorage.add(timer, userId)
                    }
                }
            }
        })

        this.on('message', async (msg: Message) => {
            await this.commandDispatcher.run(msg)
        })
    }
}
