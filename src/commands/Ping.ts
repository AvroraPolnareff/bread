import {MessageEmbed} from "discord.js";
import {BaseCommand} from "../BaseCommand";


export const Ping: BaseCommand = {
    name: 'ping',
    aliases: ['ping!'],
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
