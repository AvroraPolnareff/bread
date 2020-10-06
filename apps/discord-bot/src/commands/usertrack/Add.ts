import {Command} from "../Command";
import {Message, MessageEmbed, TextChannel} from "discord.js";
import Axios from "axios";


export class Add implements Command{
    args: string = "url";
    description: string = "This command will add the given link to the **User Tracker** list attached to the channel it was posted in.";
    name: string = "add";
    prefix: string = "usertrack";

    public constructor() {
    }

    async run(msg: Message, args?: string[]): Promise<void> {
        try {
            const url = args[0]
            const nickname = url.slice(url.lastIndexOf('/') + 1)
            await Axios.post("http://localhost:3000/api/v1/usertracker/", {
                userId: msg.author.id,
                channelId: msg.channel.id,
                guildId: msg.guild?.id ?? "",
                url: url,
                nickname: nickname,
            })
            await msg.reply(`**${msg.author.username}** has started tracking **${nickname}**. The online status updates will be posted below.`)
        } catch (e) {
            let embed = new MessageEmbed()
            embed.addField("Error...", e.message)
            await msg.reply(embed)
        }
    }
}
