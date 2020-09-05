import {Command} from "../Command";
import {Message} from "discord.js";
import {getRepository} from "typeorm/index";
import {Prey} from "../../db/entity/Prey";
import {TimerStorage} from "../../storages/TimerStorage";

export class Remove implements Command {
    args: string = "index";
    description: string = "This command will remove the chosen link from the **User Hunter** list assigned to this channel.";
    name: string = "remove";
    prefix: string = "usertrack";

    public constructor(
        private timerStorage: TimerStorage,
    ) {
    }

    async run(msg: Message, args?: string[]): Promise<void> {
        const preyRepository = getRepository(Prey)
        let preys = await preyRepository.find({userId: msg.author.id})
        const preyForDelete = preys[parseInt(args[1]) - 1]
        this.timerStorage.stopTimers({snowflake: preyForDelete.url})
        await msg.reply("Url " + preyForDelete.url + " has been successfully deleted from list!")
    }

}