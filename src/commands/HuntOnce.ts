import {BaseCommand} from "../BaseCommand";
import {Message, MessageEmbed} from "discord.js";
import {huntRivensOnce} from "../util/huntRivensOnce";
import {getRepository} from "typeorm";
import {MarketUrl} from "../db/entity/MarketUrl";
import {parseUrlQuery} from "../util/parseUrlQuery";
import PQueue from "p-queue";




export class HuntOnce implements BaseCommand  {
    public name = "huntonce"
    public aliases = ["test", "t"]
    private promiseQueue : PQueue

    constructor(promiseQueue: PQueue) {
        this.promiseQueue = promiseQueue
    }

    async run(msg: Message, args?: string[]): Promise<void> {
        try {
            const repository = getRepository(MarketUrl)
            const urlEntities = await repository.find({userId: msg.author.id})

            for (let {url, platinumLimit} of urlEntities) {
                const embeds =  await this.promiseQueue.add(async () => await huntRivensOnce(url, platinumLimit))
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


