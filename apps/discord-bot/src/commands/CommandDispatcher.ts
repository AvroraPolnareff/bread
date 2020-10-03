import {Command} from "./Command";
import {Ping} from "./Ping";
import {List} from "./rivenhunt/List";
import {Add} from "./rivenhunt/Add";
import {Remove} from "./rivenhunt/Remove";
import {inject, injectable} from "inversify";
import {Message, MessageEmbed, User} from "discord.js";
import {BreadUser as UserEntity} from "../db/entity/BreadUser";
import {getRepository} from "typeorm";
import TYPES from "../types/types";
import PQueue from "p-queue";
import {Logger} from "../utility/Logger";
import {Add as UserTrackAdd} from "./usertrack/Add"
import {List as UserTrackList} from "./usertrack/List"
import {Remove as UserTrackRemove} from "./usertrack/Remove"


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
        @inject(TYPES.PQueue) promiseQueue: PQueue,
        @inject(TYPES.Logger) logger: Logger
    ) {
        this.logger = logger
        this.promiseQueue = promiseQueue
        this.commands = [
            Ping,
            new Add(this.promiseQueue),
            new List(this.promiseQueue),
            new Remove(this.promiseQueue),
            new UserTrackAdd(this.promiseQueue, this.logger),
            new UserTrackList(this.promiseQueue),
            new UserTrackRemove(this.promiseQueue)

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
        const commandsWithoutPrefixes = this.commands.filter((command) => !command.prefix)
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
            const command = commandsWithoutPrefixes.find(command => {
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
            const name = `${command.prefix ?? ""} ${command.name}`
            const aliases = command.aliases ? `\n Aliases: ${command.aliases.reduce((prev, curr) => prev + ", " + curr)}.` : ""
            const args = command.args ? ` [${command.args}]` : ""
            embed.addField(name + args , command.description + aliases)
        }
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
            newUser.userUpdateFrequency = 120000
            newUser.rivenUpdateFrequency = 300000
            this.logger.info(`New User. tag: ${user.tag}, username: ${user.username}, id: ${userId}, avatar: ${user.avatar}`)
            return await repository.save(newUser)
        } else {
            return userEntity
        }
    }
}

