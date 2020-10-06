import {Command} from "../Command";
import {Message} from "discord.js";
import Axios from "axios";
import {MarketUrlDto} from "@bread/shared";

export class Add implements Command {

  public name = 'add'
  public description = "This command will add the given link to the **Riven Hunter** list. Once there is a change, it will post a message containing an update."
  public prefix = "rivenhunt"
  public args = "url"

  async run(msg: Message, args: string[]): Promise<void> {
    const newUrl = args[0]
    let platinumLimit: number = -1
    while (platinumLimit > 1000000000 || platinumLimit < 0) {
      await msg.reply("Enter platinum limit")
      const platinumLimitRespond = await msg.channel.awaitMessages(m => !!parseInt(m.content), {max: 1})
      platinumLimit = parseInt(platinumLimitRespond.first().content.trim())
      if (platinumLimit > 1147483647 || platinumLimit < 0) await msg.reply("Enter valid limit!")
    }
    try {
      console.log("lol1")
      const response = await Axios.post("http://localhost:3000/api/v1/rivenhunter", {
        userId: msg.author.id,
        platinumLimit,
        channelId: msg.channel.id,
        guildId: msg.guild?.id ?? "",
        url: newUrl
      } as MarketUrlDto)
      console.log(response.statusText)
      await msg.reply("URL has been added. Start hunting...")
    } catch (e) {
      console.log(e)
    }
  }
}
