import {Command} from "../Command";
import {MarketUrl} from "../../db/entity/MarketUrl";
import {RivenHunter} from "../../features/RivenHunter";
import PQueue from "p-queue";
import {TimerStorage} from "../../storages/TimerStorage";
import { Message } from "discord.js";
import {makeEmbed} from "../../fuctions/embed";


export class Add implements Command {

    constructor(
        private promiseQueue: PQueue,
        private timerStorage: TimerStorage
    ) {}

    public name = 'add'
    public description = "This command will add the given link to the **Riven Hunter** list. Once there is a change, it will post a message containing an update."
    public prefix = "rivenhunt"
    public args = "url"

    async run(msg: Message, args: string[]): Promise<void> {
        const rivenHunter = new RivenHunter(msg.author.id, this.promiseQueue, this.timerStorage)
        const newUrl = args[0]
        await msg.reply("Enter platinum limit")
        const platinumLimitRespond = await msg.channel.awaitMessages(m => !!parseInt(m.content) && parseInt(m.content) > 0, {max: 1})
        const platinumLimit = parseInt(platinumLimitRespond.first().content)
        let urlEntity : MarketUrl
        if (msg.guild) {
            urlEntity = await rivenHunter.add(newUrl, platinumLimit, msg.channel.id, msg.guild.id)
        }  else {
            urlEntity = await rivenHunter.add(newUrl, platinumLimit, msg.channel.id)
        }

        await msg.reply("URL has been added. Start hunting...")

        await rivenHunter.startHunting(urlEntity, async (rivenMods) => {
            const embeds = rivenMods.map(mod => makeEmbed(mod))
            for (const embed of embeds) {
                await msg.reply(embed)
            }
        })

    }
}
