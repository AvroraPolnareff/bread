import {Command} from "../Command";
import {Message, MessageEmbed, TextChannel} from "discord.js";
import {TimerCategory, TimerStorage} from "../../storages/TimerStorage";
import PQueue from "p-queue";
import {Logger} from "../../utility/Logger";
import {getRepository} from "typeorm/index";
import {BreadUser} from "../../db/entity/BreadUser";
import {Prey, Status} from "../../db/entity/Prey";
import {stalkPrey} from "../../fuctions/stalkPrey";


export class Add implements Command{
    args: string = "url";
    description: string = "This command will add the given link to the **User Tracker** list attached to the channel it was posted in.";
    name: string = "add";
    prefix: string = "usertrack";

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
        try {
            const initPrey = await this.promiseQueue.add(async () => {
                return await stalkPrey(args[0])
            })
            const preyEntity = preyRepository.create({
                nickname: initPrey.nickname,
                status: initPrey.status,
                lastLogin: Date().toString(),
                url: args[0],
                channelId: msg.channel?.id ?? "",
                guildId: msg.guild?.id ?? "",
                userId: msg.author.id
            })
            const savedPrey = await preyRepository.save(preyEntity)

            const timer = setInterval(async () => {
                const prey = await preyRepository.findOne({id: savedPrey.id})
                const channelId = prey.channelId
                const guild = prey.guildId

                const userInfo = await this.promiseQueue.add(async () => {
                    return await stalkPrey(prey.url)
                })

                if (userInfo.status !== prey.status) {
                    const onlineMessage = `<@${prey.userId}>, ${userInfo.nickname} is currently ${userInfo.status} on Warframe Market!`
                    const offlineMessage = `<@${prey.userId}>, ${userInfo.nickname} just went offline on Warframe Market.`
                    const message = prey.status === Status.Offline ? offlineMessage : onlineMessage
                    if (channelId && guild) {
                        const channel = msg.client
                            .guilds.resolve(guild)
                            .channels.resolve(channelId) as TextChannel
                        await channel
                            .send(message)

                    } else {

                        await msg.author.send(message)
                    }
                    const updated = await preyRepository.update({id: prey.id}, {
                        status: userInfo.status,
                        lastLogin: Date.now().toString()
                    })

                }
            }, userEntity.userUpdateFrequency)
            this.timerStorage.add(timer, msg.author.id, TimerCategory.user, savedPrey.channelId + savedPrey.guildId)

            await msg.reply(`${msg.author.username} has started tracking ${initPrey.nickname} The online status updates will be posted below.`)

        } catch (e) {
            this.logger.error(e)
            let embed = new MessageEmbed()
            embed.addField("Error...", e.message)
            await msg.reply(embed)
        }
    }

}