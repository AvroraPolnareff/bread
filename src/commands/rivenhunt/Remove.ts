import {Command} from "../Command";
import {Message} from "discord.js";
import {getRepository} from "typeorm";
import {MarketUrl} from "../../db/entity/MarketUrl";


export const Remove : Command = {
    name: 'remove',
    aliases: ['delete', 'del', "d"],
    description: "This command will remove the chosen link from the **Riven Hunter** list assigned to this channel.",
    prefix: "rivenhunt",
    args: "index",

    async run(msg: Message, args?: string[]): Promise<void> {
        const index = parseInt(args[0]) - 1
        const repository = getRepository(MarketUrl)

        const urls = await repository.find({userId: msg.author.id})
        await repository.delete(urls[index].id)

        await msg.reply('URL successfully deleted')
    }
}
