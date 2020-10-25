import {Command} from "../Command";
import {Message, MessageEmbed} from "discord.js";
import Axios from "axios";
import url from "url";

export class List implements Command {
    description: string = "This command will display the list of active links used by the **User Tracker** in the channel it was posted in.";
    name: string = "list";
    prefix: string = "usertrack";

    constructor() {}

    async run(msg: Message, args?: string[]): Promise<void> {
        const params = new url.URLSearchParams({
            userId: msg.author.id,
            channelId: msg.channel.id,
            guildId: msg.guild?.id ?? "",
        })
        const res = await Axios.get(
          'http://localhost:3000/api/v1/usertracker/find?' + params.toString(),
          {headers: [{"bot-auth": process.env.BOT_SECRET}]}
          )
        const embed = new MessageEmbed()
        embed.setTitle('Users:')
        res.data.forEach((prey, index) => {
            embed.addField(`**${index + 1}**`, `*${prey.nickname}*`)
        })
        await msg.reply(embed)
    }

}
