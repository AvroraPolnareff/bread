import {Command} from "../Command";
import {Message, MessageEmbed} from "discord.js";
import url from "url"
import Axios from "axios";

export class List implements Command {
    public name = 'list'
    public aliases = ['urls']
    public description = "This command will display the list of active links used by the **Riven Hunter** in the channel it was posted in."
    public prefix = "rivenhunt"

    async run(msg: Message, args?: string[]): Promise<void> {
        const params = new url.URLSearchParams({
            userId: msg.author.id,
            channelId: msg.channel.id,
            guildId: msg.guild?.id ?? "",
        })
        const res = await Axios.get("http://localhost:3000/api/v1/rivenhunter/find?" + params.toString())
        const embed = new MessageEmbed()
        embed.setTitle('Riven Urls')
        res.data.forEach((url, index) => {
            embed.addField(`**${index + 1}:**`, `*${url.url}*`)
        })
        await msg.reply(embed)
    }
}
