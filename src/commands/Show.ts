import {BaseCommand} from "../BaseCommand";
import {Message, MessageEmbed} from "discord.js";
import {getRepository} from "typeorm";
import {MarketUrl} from "../db/entity/MarketUrl";


export const Show : BaseCommand = {
    name: 'show',
    aliases: ['urls'],

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
