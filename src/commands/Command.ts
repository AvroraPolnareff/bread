import {Message} from "discord.js";

export interface Command {

    name: string,
    aliases?: string[]

    run (msg : Message, args?: string[]) : Promise<void>
}

