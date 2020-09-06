import {Command} from "../Command";
import {Message, MessageEmbed} from "discord.js";
import {getRepository} from "typeorm";
import {MarketUrl} from "../../db/entity/MarketUrl";
import {RivenHunter} from "../../features/RivenHunter";
import PQueue from "p-queue";
import {TimerStorage} from "../../storages/TimerStorage";


export class Remove implements Command {
    public name = 'remove'
    public aliases = ['delete', 'del', "d"]
    public description = "This command will remove the chosen link from the **Riven Hunter** list assigned to this channel."
    public prefix = "rivenhunt"
    public args = "index"

    constructor(
        private promiseQueue: PQueue,
        private timerStorage: TimerStorage
    ) {}


    async run(msg: Message, args?: string[]): Promise<void> {
        const index = parseInt(args[0]) - 1
        const rivenHunter = new RivenHunter(msg.author.id, this.promiseQueue, this.timerStorage)
        if (msg.guild) {
            await rivenHunter.remove(index, msg.channel.id, msg.guild.id)
        } else {
            await rivenHunter.remove(index, msg.channel.id)
        }

        await msg.reply('URL successfully deleted')
    }
}
