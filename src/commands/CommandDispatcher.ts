import {Command} from "./Command";
import {Ping} from "./Ping";
import {Show} from "./rivenhunt/Show";
import {Add} from "./rivenhunt/Add";
import {Remove} from "./rivenhunt/Remove";
import {Hunt} from "./rivenhunt/Hunt";
import {HuntOnce} from "./rivenhunt/HuntOnce";
import {TimerStorage} from "../storages/TimerStorage";
import {Stop} from "./rivenhunt/Stop";
import {inject, injectable} from "inversify";
import {Message, MessageEmbed, User} from "discord.js";
import {BreadUser as UserEntity} from "../db/entity/BreadUser";
import {getRepository} from "typeorm";
import TYPES from "../types/types";
import PQueue from "p-queue";
import {Logger} from "../utility/Logger";
import {TrackUser} from "./TrackUser";

export interface CommandDispatcher {
    commands: Command[]

    run(msg: Message): Promise<void>
}

@injectable()
export class CommandDispatcherImpl implements CommandDispatcher {
    public commands: Command[];

    private promiseQueue: PQueue
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
            new Stop(timerStorage),
            new TrackUser(timerStorage, this.promiseQueue, logger)
        ]
    }

    async run(msg: Message) {
        if (msg.author.bot) return
        if (msg.member && msg.member.roles.cache.filter((value) => value.name === "The Bread Operator").size === 0) return
        if (msg.content.startsWith("help")) await msg.reply(this.generateHelp())
        await this.addNewUser(msg.author)
        this.logger.info(`User ${msg.author.tag} send "${msg.content}".`)


        const messageWords = msg.content.split(" ");
        const messageCommand = messageWords[0]
        const args = messageWords.slice(1)
        const commandsWithPrefixes = this.commands.filter((command) => !!command.prefix)
        let prefixes = new Set()
        for (const command of commandsWithPrefixes) {
            prefixes.add(command.prefix)
        }

        if (prefixes.has(messageWords[0])) {
            const command = commandsWithPrefixes.find(command => {
                return command.prefix === messageWords[0] && command.name === messageWords[1] || command.aliases?.some(
                    alias => alias === messageWords[1])
            })

            if (command) await command.run(msg, messageWords.slice(2))

        } else {
            const command = this.commands.find(command => {
                return command.name === messageCommand || command.aliases?.some(
                    alias => alias === messageCommand)
            })

            if (command) await command.run(msg, args)
        }
    }

    generateHelp() {
        const embed = new MessageEmbed()
        embed.title = "All Commands"
        for (const command of this.commands) {
            embed.addField(command.name + " [" + command.aliases?.toString() + "]", command.description)
        }
        console.log(embed)
        return embed
    }

    async addNewUser(user: User): Promise<UserEntity> {
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

