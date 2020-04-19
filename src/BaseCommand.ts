import {Message} from "discord.js";

export interface BaseCommand {

    name: string,
    aliases?: string[]

    run (msg : Message, args?: string[]) : Promise<void>
}

