import {Command} from "../Command";
import {MarketUrl} from "../../db/entity/MarketUrl";
import {RivenHunter} from "../../features/RivenHunter";
import PQueue from "p-queue";
import {Message} from "discord.js";
import {makeEmbed} from "../../functions/embed";


export class Add implements Command {

  constructor(
    private promiseQueue: PQueue,
  ) {}

  public name = 'add'
  public description = "This command will add the given link to the **Riven Hunter** list. Once there is a change, it will post a message containing an update."
  public prefix = "rivenhunt"
  public args = "url"

  async run(msg: Message, args: string[]): Promise<void> {
    const rivenHunter = new RivenHunter(msg.author.id, this.promiseQueue)
    const newUrl = args[0]
    let platinumLimit : number = -1
    while (platinumLimit > 1147483647 || platinumLimit < 0 ) {
      await msg.reply("Enter platinum limit")
      const platinumLimitRespond = await msg.channel.awaitMessages(m => !!parseInt(m.content), {max: 1})
      platinumLimit = parseInt(platinumLimitRespond.first().content.trim())
      if (platinumLimit > 1147483647 || platinumLimit < 0 ) await msg.reply("Enter valid limit!")
    }
    let urlEntity: MarketUrl
    if (msg.guild) {
      urlEntity = await rivenHunter.add(newUrl, platinumLimit, msg.channel.id, msg.guild.id)
    } else {
      urlEntity = await rivenHunter.add(newUrl, platinumLimit, msg.channel.id)
    }

    await msg.reply("URL has been added. Start hunting...")

    await rivenHunter.startHunting(urlEntity, msg.client,async (rivenMods, channel) => {
        const embeds = rivenMods.map(mod => makeEmbed(mod.auction, mod.bids))
        for (const embed of embeds) {
          await channel.send(embed)
        }
    })
  }
}
