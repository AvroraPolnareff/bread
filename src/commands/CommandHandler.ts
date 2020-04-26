import {BaseCommand} from "../BaseCommand";
import {Ping} from "./Ping";
import {Show} from "./Show";
import {Add} from "./Add";
import {Remove} from "./Remove";
import {Hunt} from "./Hunt";
import {HuntOnce} from "./HuntOnce";
import {TimerStorage, TimerStorageImpl} from "../storages/TimerStorage";
import {Stop} from "./Stop";
import {inject, injectable} from "inversify";
import {Message, User} from "discord.js";
import {BreadUser as UserEntity} from "../db/entity/BreadUser";
import {getRepository} from "typeorm";
import TYPES from "../types/types";
import {PromiseQueue} from "../utility/promiseQueue";
import PQueue from "p-queue";
import {Logger} from "../utility/Logger";

export interface CommandHandler {
    commands: BaseCommand[]
    run(msg: Message) : Promise<void>
}

@injectable()
export class CommandHandlerImpl implements CommandHandler {
    public commands: BaseCommand[];

    private promiseQueue : PQueue
    private logger: Logger

    constructor(
        @inject(TYPES.TimerStorage) timerStorage: TimerStorage,
        @inject(TYPES.PQueue) promiseQueue: PQueue,
        @inject(TYPES.Logger) logger: Logger
    ) {
        this.logger = logger
        this.promiseQueue = promiseQueue
        this.commands = [
            Ping,
            Add,
            Show,
            Remove,
            new Hunt(timerStorage, this.promiseQueue, logger),
            new HuntOnce(this.promiseQueue, logger),
            new Stop(timerStorage)
        ]
    }

    async run(msg: Message) {
        if (!msg.author.bot) {
            await this.addNewUser(msg.author)
            this.logger.info(`User ${msg.author.tag} send "${msg.content}".`)

            const messageCommand = msg.content.split(" ")[0] || msg.content
            const args = msg.content.split(" ").slice(1)

            const command = this.commands.find(command => {
                return command.name === messageCommand || command.aliases?.some(
                    alias => alias === messageCommand)
            })

            if (command) await command.run(msg, args)
        }
    }

    async addNewUser (user: User): Promise<UserEntity>  {
        const userId = user.id
        const repository = getRepository(UserEntity)
        const userEntity = await repository.findOne({userId: userId})
        if (!userEntity) {
            const newUser = new UserEntity()
            newUser.userId = userId
            newUser.isHunting = false
            this.logger.info(`New User. tag: ${user.tag}, username: ${user.username}, id: ${userId}, avatar: ${user.avatar}`)
            return await repository.save(newUser)
        } else {
            return userEntity
        }
    }
}

