import {Command} from "../Command";
import {Message, MessageEmbed} from "discord.js";
import {getRepository} from "typeorm";
import {MarketUrl} from "../../db/entity/MarketUrl";


export const List : Command = {
    name: 'list',
    aliases: ['urls'],
    description: "This command will display the list of active links used by the **Riven Hunter** in the channel it was posted in.",
    prefix: "rivenhunt",

    async run(msg: Message, args?: string[]): Promise<void> {
        const repository = getRepository(MarketUrl)
        const urls = await repository.find({userId: msg.author.id})
        const embed = new MessageEmbed()
        embed.setTitle('Riven Urls')
        urls.forEach((url, index) => {
            embed.addField(`**${index + 1}:**`, `*${url.url}*`)
        })
        await msg.reply(embed)
    }
}
