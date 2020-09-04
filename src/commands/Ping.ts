import {MessageEmbed} from "discord.js";
import {Command} from "./Command";


export const Ping: Command = {
    name: 'ping',
    aliases: ['ping!'],
    description: "Checks is bot can send messages",
    run: async (msg, args) => {
        const embed = new MessageEmbed()
        embed.addField("HAHA", "PONG!!!")
        await msg.reply(embed)
        const filter = m => m.content.includes("ping")
        const channel = msg.channel
        try{
            const awaitedMessage =  await channel.awaitMessages(filter, {max: 1, })
            if (awaitedMessage.first().content === "ping") {
                await msg.reply('POOOOOONG!!!')
            } else {
                await msg.reply("I won!!!")
            }
        } catch (e) {
            await msg.reply("I won!!!")
        }

    }
}
