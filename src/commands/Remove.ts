import {Command} from "./Command";
import {Message} from "discord.js";
import {getRepository} from "typeorm";
import {MarketUrl} from "../db/entity/MarketUrl";


export const Remove : Command = {
    name: 'remove',
    aliases: ['delete', 'del', "d"],
    description: "Removes url from list",

    async run(msg: Message, args?: string[]): Promise<void> {
        const index = parseInt(args[0]) - 1
        const repository = getRepository(MarketUrl)

        const urls = await repository.find({userId: msg.author.id})
        await repository.delete(urls[index].id)

        await msg.reply('URL successfully deleted')
    }
}
