import {Command} from "./Command";
import {getRepository} from "typeorm";
import {MarketUrl} from "../db/entity/MarketUrl";


export const Add: Command = {
    name: 'add',
    description: "Adds given url to hunting list.",
    async run(msg, args): Promise<void> {
        const newUrl = args[0]
        const repository = getRepository(MarketUrl)
        const urls = await repository.find({userId: msg.author.id})

        if (!urls.some(entry => entry.url === newUrl)) {
            const entity = new MarketUrl()
            entity.userId = msg.author.id
            entity.url = newUrl

            await msg.reply('Enter interval between updates (minutes)')
            const updateFrequencyRespond = await msg.channel.awaitMessages(m => !!parseInt(m.content) && parseInt(m.content) > 0, {max: 1})
            entity.updateFrequency = parseInt(updateFrequencyRespond.first().content) * 1000 * 60

            await msg.reply("Enter platinum limit")
            const platinumLimitRespond = await msg.channel.awaitMessages(m => !!parseInt(m.content) && parseInt(m.content) > 0, {max: 1})
            entity.platinumLimit = parseInt(platinumLimitRespond.first().content)

            await repository.save(entity)
            await msg.reply("URL has been added.")

        } else {
            await msg.reply('Error: this URL has already been added.')
        }
    }
}
