import {BaseCommand} from "../BaseCommand";
import {Message, MessageEmbed} from "discord.js";
import {huntRivensOnce} from "../util/huntRivensOnce";
import {getRepository} from "typeorm";
import {MarketUrl} from "../db/entity/MarketUrl";
import {parseUrlQuery} from "../util/parseUrlQuery";


export const HuntOnce: BaseCommand = {
    name: "huntonce",
    aliases: ["test", "t"],

    async run(msg: Message, args?: string[]): Promise<void> {
        try {
            const repository = getRepository(MarketUrl)
            const urlEntities = await repository.find({userId: msg.author.id})

            for (let {url, platinumLimit} of urlEntities) {
                const embeds = await huntRivensOnce(url, platinumLimit)
                for (let embed of embeds) {
                    await msg.reply(parseUrlQuery(url), {embed})
                }
            }
        } catch (e) {
            console.log(e)
            let embed = new MessageEmbed()
            embed.addField("Error...", e.message)
            await msg.reply(embed)
        }

    }
}


