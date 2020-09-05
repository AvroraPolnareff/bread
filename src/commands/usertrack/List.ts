import {Command} from "../Command";
import {Message, MessageEmbed} from "discord.js";
import {getRepository} from "typeorm/index";
import {Prey} from "../../db/entity/Prey";


export class List implements Command {
    description: string = "This command will display the list of active links used by the **User Tracker** in the channel it was posted in.";
    name: string = "list";
    prefix: string = "usertrack";

    async run(msg: Message, args?: string[]): Promise<void> {
        const preyRepository = getRepository(Prey)
        let preys = await preyRepository.find({userId: msg.author.id})
        const embed = new MessageEmbed()
        embed.setTitle('User Tracking Profiles')
        preys.forEach((prey, index) => {
            embed.addField(`**${index + 1}:**`, `*${prey.url}*`)
        })
        await msg.reply(embed)
    }

}