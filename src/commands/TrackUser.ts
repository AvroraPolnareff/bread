import {Command} from "./Command";
import {TimerCategory, TimerStorage} from "../storages/TimerStorage";
import {Message, MessageEmbed, TextChannel} from "discord.js";
import {BreadUser} from "../db/entity/BreadUser";
import {getRepository} from "typeorm/index";
import {Prey} from "../db/entity/Prey";
import {stalkPrey} from "../fuctions/stalkPrey";
import PQueue from "p-queue";
import {Logger} from "../utility/Logger";
import {MarketUrl} from "../db/entity/MarketUrl";

export class TrackUser implements Command {
    public aliases: string[]
    public name: string = 'trackuser'
    public description = "Commands for user tracking: add, remove, list."


    public constructor(
        private timerStorage: TimerStorage,
        private promiseQueue: PQueue,
        private logger: Logger
    ) {
    }

    async run(msg: Message, args?: string[]): Promise<void> {
        const userRepository = getRepository(BreadUser)
        const preyRepository = getRepository(Prey)
        const userEntity = await userRepository.findOne({userId: msg.author.id})
        let preys = await preyRepository.find({userId: msg.author.id})
        if (args[0] === "list") {
            const embed = new MessageEmbed()
            embed.setTitle('User Tracking Profiles')
            preys.forEach((prey, index) => {
                embed.addField(`**${index + 1}:**`, `*${prey.url}*`)
            })
            await msg.reply(embed)

        } else if (args[0] === "remove") {
            const preyForDelete = preys[parseInt(args[1]) - 1]
            this.timerStorage.stopTimers( {snowflake: preyForDelete.url})
            const deletedPrey = await preyRepository.delete(preyForDelete)
            await msg.reply("Url " + preyForDelete.url + " has been successfully deleted from list!")
        } else if (args[0]) {
            let initPrey
            try {
                initPrey = await this.promiseQueue.add(async () => {
                    return await stalkPrey(args[0])
                })
                const preyEntity = preyRepository.create({
                    nickname: initPrey.nickname,
                    status: initPrey.status,
                    lastLogin: Date().toString(),
                    url: args[0],
                    channelId: msg.channel.id,
                    guildId: msg.guild.id,
                    userId: msg.author.id
                })
                preys.push(await preyRepository.save(preyEntity))
                await msg.reply(`Start tracking for user ${initPrey.nickname} at ${Date().toString()}`)
            } catch (e) {
                this.logger.error(e)
                let embed = new MessageEmbed()
                embed.addField("Error...", e.message)
                await msg.reply(embed)
            }

            for (const prey of preys) {
                const timer = setInterval(async () => {
                    const channelId = prey.channelId
                    const guild = prey.guildId

                    const userInfo = await this.promiseQueue.add(async () => {
                        return await stalkPrey(prey.url)
                    })

                    if (userInfo.status !== prey.status) {
                        const channel = msg.client
                            .guilds.resolve(guild)
                            .channels.resolve(channelId) as TextChannel
                        await channel
                            .send(`**${userInfo.nickname}** is now ${userInfo.status} on Warframe Market! <@${prey.userId}>`)
                        await preyRepository.update({id: prey.id}, {
                            status: userInfo.status,
                            lastLogin: Date.toString()
                        })
                    }
                }, userEntity.updateFrequency)
                this.timerStorage.add(timer, msg.author.id, TimerCategory.user, prey.url)
            }

        }
    }

}
