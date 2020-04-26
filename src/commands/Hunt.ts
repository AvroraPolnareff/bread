import {BaseCommand} from "../BaseCommand";
import {Message, MessageEmbed} from "discord.js";
import {getRepository} from "typeorm";
import {TimerStorage} from "../storages/TimerStorage";
import {MarketUrl} from "../db/entity/MarketUrl";
import {BreadUser} from "../db/entity/BreadUser";
import {huntRivensOnce} from "../fuctions/huntRivensOnce";
import {parseUrlQuery} from "../fuctions/parseUrlQuery";
import {PromiseQueue} from "../utility/promiseQueue";
import PQueue from "p-queue";
import {Logger} from "../utility/Logger";


export class Hunt implements BaseCommand {
    public name = 'hunt'
    public aliases = ['start', 'watch']

    private timerStorage: TimerStorage
    private promiseQueue: PromiseQueue
    private logger: Logger

    constructor(timerStorage: TimerStorage, promiseQueue: PQueue, logger: Logger) {
        this.timerStorage = timerStorage
        this.promiseQueue = promiseQueue
        this.logger = logger
    }

    async run(msg: Message, args?: string[]): Promise<void> {
        await msg.reply('I̼m̸͚̮p̸e͙̰̹n̝d͙͠i̹͚ͅṉ͢g̭̗͘ ̫d̞͍͞o̭̗̺o̗͞m̮͎̭ ̯͉͚ap͖͙͜p̹̦̹r̠͠ͅo̶̦ͅa̸̺̝c҉̜̺h͙̹ͅes̡... ')
        const urlRepository = getRepository(MarketUrl)
        const urlEntities = await urlRepository.find({userId: msg.author.id})


        for (let {url, platinumLimit, updateFrequency} of urlEntities) {
            const timer = setInterval(async () => {
                this.logger.debug(`Get ${url} for user ${msg.author.tag} ${msg.author.id}`)
                try {
                    const embeds = await this.promiseQueue.add(async () => {
                        return await huntRivensOnce(url, platinumLimit)
                    })

                    for (let embed of embeds) {
                        await msg.reply(parseUrlQuery(url), {embed})
                    }
                    this.logger.debug(`Got ${url} for user ${msg.author.tag} ${msg.author.id}`)
                } catch (e) {
                    this.logger.error(e)
                    let embed = new MessageEmbed()
                    embed.addField("Error...", e.message)
                    await msg.reply(embed)
                }
            }, updateFrequency)

            this.timerStorage.add(timer, msg.author.id)
        }

        const userRepository = getRepository(BreadUser)
        const userEntity = await userRepository.findOne({userId: msg.author.id})
        userEntity.isHunting = true
        await userRepository.update(userEntity.id, userEntity)
    }


}


