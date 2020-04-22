import {BaseCommand} from "../BaseCommand";
import {Message} from "discord.js";
import {TimerStorage} from "../storages/TimerStorage";
import {getRepository} from "typeorm";
import {BreadUser} from "../db/entity/BreadUser";

export class Stop implements BaseCommand {
    public aliases: string[]
    public name: string = 'stop'

    private timerStorage: TimerStorage

    public constructor(timerStorage: TimerStorage) {
        this.timerStorage = timerStorage
    }

    async run(msg: Message, args?: string[]): Promise<void> {
        const userRepository = getRepository(BreadUser)
        const userEntity = await userRepository.findOne({userId: msg.author.id})
        userEntity.isHunting = false
        await userRepository.update(userEntity.id, userEntity)

        this.timerStorage.stopAllUserTimers(msg.author.id)
        await msg.reply("The Laughing Bread has stopped")
    }

}
