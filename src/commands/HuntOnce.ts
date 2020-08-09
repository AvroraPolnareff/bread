import {Command} from "./Command";
import {Message, MessageEmbed} from "discord.js";
import {huntRivensOnce} from "../fuctions/huntRivensOnce";
import {getRepository} from "typeorm";
import {MarketUrl} from "../db/entity/MarketUrl";
import {parseUrlQuery} from "../fuctions/parseUrlQuery";
import PQueue from "p-queue";
import {Logger} from "../utility/Logger";




export class HuntOnce implements Command  {
    public name = "huntonce"
    public aliases = ["test", "t"]

    private promiseQueue : PQueue
    private logger : Logger

    constructor(promiseQueue: PQueue, logger: Logger) {
        this.promiseQueue = promiseQueue
        this.logger = logger
    }

    async run(msg: Message, args?: string[]): Promise<void> {
        try {
            const repository = getRepository(MarketUrl)
            const urlEntities = await repository.find({userId: msg.author.id})

            for (let {url, platinumLimit} of urlEntities) {
                this.logger.debug(`Get ${url} for user ${msg.author.tag} ${msg.author.id}`)
                const embeds =  await this.promiseQueue.add(async () => await huntRivensOnce(url, platinumLimit))
                for (let embed of embeds) {
                    await msg.reply(parseUrlQuery(url), {embed})
                }
                this.logger.debug(`Got ${url} for user ${msg.author.tag} ${msg.author.id}`)
            }
        } catch (e) {
            this.logger.error(e)
            let embed = new MessageEmbed()
            embed.addField("Error...", e.message)
            await msg.reply(embed)
        }

    }
}


