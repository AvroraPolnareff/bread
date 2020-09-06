import {Command} from "../Command";
import {Message, MessageEmbed} from "discord.js";
import {getRepository} from "typeorm";
import {MarketUrl} from "../../db/entity/MarketUrl";
import PQueue from "p-queue";
import {TimerStorage} from "../../storages/TimerStorage";
import {RivenHunter} from "../../features/RivenHunter";


export class List implements Command {
    public name = 'list'
    public aliases = ['urls']
    public description = "This command will display the list of active links used by the **Riven Hunter** in the channel it was posted in."
    public prefix = "rivenhunt"

    constructor(
        private promiseQueue: PQueue,
        private timerStorage: TimerStorage
    ) {}

    async run(msg: Message, args?: string[]): Promise<void> {
        const rivenHunter = new RivenHunter(msg.author.id, this.promiseQueue, this.timerStorage)
        let embed : MessageEmbed
        if (msg.guild) {
            embed = await rivenHunter.list(msg.channel.id, msg.guild.id)
        } else {
            embed = await rivenHunter.list(msg.channel.id)
        }
        await msg.reply(embed)
    }
}
