import {Command} from "../Command";
import {Message} from "discord.js";
import PQueue from "p-queue";
import {UserTracker} from "../../features/UserTracker";

export class Remove implements Command {
    args: string = "index";
    description: string = "This command will remove the chosen link from the **User Tracker** list assigned to this channel.";
    name: string = "remove";
    prefix: string = "usertrack";

    public constructor(
        private promiseQueue: PQueue,
    ) {
    }

    async run(msg: Message, args?: string[]): Promise<void> {
        const userTracker = new UserTracker(msg.author.id, this.promiseQueue, msg.client)
        await userTracker.remove(parseInt(args[0]) - 1, msg.channel.id, msg.guild?.id ?? "")
        await msg.reply("User has been successfully deleted from list!")
    }

}