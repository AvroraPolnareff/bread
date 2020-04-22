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
import {Message} from "discord.js";
import {BreadUser as UserEntity} from "../db/entity/BreadUser";
import {getRepository} from "typeorm";
import TYPES from "../types/types";
import {PromiseQueue} from "../promiseQueue/promiseQueue";
import PQueue from "p-queue";

export interface CommandLoader {
    commands: BaseCommand[]
    run(msg: Message) : Promise<void>
}

@injectable()
export class CommandLoaderImpl implements CommandLoader {
    public commands: BaseCommand[];

    private promiseQueue : PQueue

    constructor(
        @inject(TYPES.TimerStorage) timerStorage: TimerStorage,
        @inject(TYPES.PQueue) promiseQueue: PQueue
    ) {
        this.promiseQueue = promiseQueue
        this.commands = [
            Ping,
            Add,
            Show,
            Remove,
            new Hunt(timerStorage, this.promiseQueue),
            new HuntOnce(this.promiseQueue),
            new Stop(timerStorage)
        ]
    }

    async run(msg: Message) {
        if (!msg.author.bot) {
            await this.addNewUser(msg.author.id)

            const messageCommand = msg.content.split(" ")[0] || msg.content
            const args = msg.content.split(" ").slice(1)

            const command = this.commands.find(command => {
                return command.name === messageCommand || command.aliases?.some(
                    alias => alias === messageCommand)
            })

            if (command) await command.run(msg, args)
        }
    }

    async addNewUser (userId: string): Promise<UserEntity>  {
        const repository = getRepository(UserEntity)
        const userEntity = await repository.findOne({userId: userId})
        if (!userEntity) {
            const newUser = new UserEntity()
            newUser.userId = userId
            newUser.isHunting = false
            return await repository.save(newUser)
        } else {
            return userEntity
        }
    }
}

