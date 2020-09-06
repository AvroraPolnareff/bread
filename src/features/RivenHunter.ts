import {MarketUrl} from "../db/entity/MarketUrl";
import {DeleteResult, getRepository} from "typeorm/index";
import {MessageEmbed} from "discord.js";
import {BreadUser} from "../db/entity/BreadUser";
import PQueue from "p-queue";
import {launch} from "puppeteer";
import {getNewRivenMods} from "../fuctions/getNewRivenMods";
import {getRivenDetails} from "../fuctions/getRivenDetails";
import {RivenWithDetails} from "../structures/RivenWithDetails";
import {TimerCategory, TimerStorage} from "../storages/TimerStorage";


export class RivenHunter {
    constructor(
        private userId: string,
        private promiseQueue: PQueue,
        private timerStorage: TimerStorage
    ) {

    }

    public add = async (url: string, platinumLimit: number, channelId: string, guildId?: string) => {
        const userRepository = getRepository(BreadUser)
        const userEntity = await userRepository.findOne({userId: this.userId})
        const urlRepository = getRepository(MarketUrl)
        const urls = await urlRepository.find({userId: this.userId})

        if (urls.some(entry => entry.url === url && entry.channelId === channelId && entry.guildId === (guildId ?? ''))) {
            throw Error("URL has been added.")
        }

        let entity: MarketUrl
        if (guildId) {
            entity = urlRepository.create({
                userId: this.userId,
                url: url,
                channelId: channelId,
                guildId: guildId,
                platinumLimit: platinumLimit
            })
        } else {
            entity = urlRepository.create({
                userId: this.userId,
                url: url,
                channelId: channelId,
                guildId: '',
                platinumLimit: platinumLimit
            })
        }
        return await urlRepository.save(entity)
    }

    public huntOnce = async (urlEntity: MarketUrl): Promise<RivenWithDetails[]> => {
        return await this.promiseQueue.add(async () => {
            const browser = await launch({timeout: 60 * 1000, args: ['--no-sandbox']})
            const rivenMods = await getNewRivenMods(urlEntity.url, browser)
            const rivenModsWithDetails: RivenWithDetails[] = []
            for (const el of rivenMods) {
                if (parseInt(el.displayingPrice) <= urlEntity.platinumLimit) {
                    const rivenWithDetails = await getRivenDetails(el, browser)
                    rivenModsWithDetails.push(rivenWithDetails)
                }
            }
            await browser.close()
            return rivenModsWithDetails
        })
    }

    public startHunting = async (
        urlEntity: MarketUrl, onNewRivenMods: (rivenMods: RivenWithDetails[]) => void
    ) => {
        const userRepository = getRepository(BreadUser)
        const user = await userRepository.findOne({userId: this.userId})
        const timer = setInterval(async () => {
            const rivenMods = await this.huntOnce(urlEntity)
            onNewRivenMods(rivenMods)
        }, user.rivenUpdateFrequency)
        this.timerStorage.add(timer, this.userId, TimerCategory.riven, urlEntity.channelId + urlEntity.guildId)
    }

    public list = async (channelId: string, guildId?: string): Promise<MessageEmbed> => {
        const repository = getRepository(MarketUrl)
        const urls = await repository.find({userId: this.userId, channelId: channelId, guildId: guildId ?? ''})
        const embed = new MessageEmbed()
        embed.setTitle('Riven Urls')
        urls.forEach((url, index) => {
            embed.addField(`**${index + 1}:**`, `*${url.url}*`)
        })
        return embed
    }

    public remove = async (index: number, channelId: string, guildId?: string): Promise<DeleteResult> => {
        const urlRepository = getRepository(MarketUrl)

        const urls = await urlRepository.find({userId: this.userId, channelId: channelId, guildId: guildId ?? ''})
        const urlForDelete = urls[index]
        this.timerStorage.stopTimers({
            userId: this.userId,
            snowflake: urlForDelete.channelId + urlForDelete.guildId,
            category: TimerCategory.riven
        })
        return await urlRepository.delete(urls[index])
    }
}