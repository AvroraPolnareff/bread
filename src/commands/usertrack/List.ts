import {Command} from "../Command";
import {Message} from "discord.js";
import {UserTracker} from "../../features/UserTracker";
import PQueue from "p-queue";

export class List implements Command {
    description: string = "This command will display the list of active links used by the **User Tracker** in the channel it was posted in.";
    name: string = "list";
    prefix: string = "usertrack";

    constructor(
      private promiseQueue: PQueue
    ) {}

    async run(msg: Message, args?: string[]): Promise<void> {
        const userTracker = new UserTracker(msg.author.id, this.promiseQueue, msg.client);
        const embed = await userTracker.list(msg.channel.id, msg.guild?.id ?? "")
        await msg.reply(embed)
    }

}