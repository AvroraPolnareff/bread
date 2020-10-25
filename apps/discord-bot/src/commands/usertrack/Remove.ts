import {Command} from "../Command";
import {Message} from "discord.js";
import url from "url";
import Axios from "axios";

export class Remove implements Command {
    args: string = "index";
    description: string = "This command will remove the chosen link from the **User Tracker** list assigned to this channel.";
    name: string = "remove";
    prefix: string = "usertrack";

    async run(msg: Message, args?: string[]): Promise<void> {
        const index = parseInt(args[0]) - 1
        const params = new url.URLSearchParams({
            userId: msg.author.id,
            channelId: msg.channel.id,
            guildId: msg.guild?.id ?? "",
        })
        const res = await Axios.get(
          "http://localhost:3000/api/v1/usertracker/find?" + params.toString(),
          {headers: [{"bot-auth": process.env.BOT_SECRET}]}
        )
        if (index >= 0 && index < res.data.length) {
            const id = res.data[index].id
            await Axios.delete(
              `http://localhost:3000/api/v1/usertracker/${id}`,
              {headers: [{"bot-auth": process.env.BOT_SECRET}]}
            )
            await msg.reply('URL successfully deleted')
        } else {
            await msg.reply('You entered a wrong index')
        }


    }

}
