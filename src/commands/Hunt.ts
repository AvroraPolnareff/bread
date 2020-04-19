import {BaseCommand} from "../BaseCommand";
import {Message, MessageEmbed} from "discord.js";
import {getRepository} from "typeorm";
import {TimerStorage} from "../storages/TimerStorage";
import {MarketUrl} from "../db/entity/MarketUrl";
import {User} from "../db/entity/User";
import {huntRivensOnce} from "../util/huntRivensOnce";
import {parseUrlQuery} from "../util/parseUrlQuery";


export class Hunt implements BaseCommand {
    public name = 'hunt'
    public aliases = ['start', 'watch']

    private timerStorage: TimerStorage

    constructor(timerStorage: TimerStorage) {
        this.timerStorage = timerStorage
    }

    async run(msg: Message, args?: string[]): Promise<void> {
        await msg.reply('I̼m̸͚̮p̸e͙̰̹n̝d͙͠i̹͚ͅṉ͢g̭̗͘ t̴̳̓ȇ̵̛ŝ̸͝t̴̟̀ ̯͉͚ap͖͙͜p̹̦̹r̠͠ͅo̶̦ͅa̸̺̝c҉̜̺h͙̹ͅes̡...')
        const urlRepository = getRepository(MarketUrl)
        const urlEntities = await urlRepository.find({userId: msg.author.id})

        for (let {url, platinumLimit, updateFrequency} of urlEntities) {
            const timer = setInterval(async () => {
                try {
                    const embeds = await huntRivensOnce(url, platinumLimit)
                    for (let embed of embeds) {
                        await msg.reply(parseUrlQuery(url), {embed})
                    }
                } catch (e) {
                    console.log(e)
                    let embed = new MessageEmbed()
                    embed.addField("Error...", e.message)
                    await msg.reply(embed)
                }
            }, updateFrequency)

            this.timerStorage.add(timer, msg.author.id)
        }

        const userRepository = getRepository(User)
        const userEntity = await userRepository.findOne({userId: msg.author.id})
        userEntity.isHunting = true
        await userRepository.update(userEntity.id, userEntity)
    }


}


