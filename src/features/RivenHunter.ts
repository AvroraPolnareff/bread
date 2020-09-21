import {MarketUrl} from "../db/entity/MarketUrl";
import {DeleteResult, getRepository} from "typeorm";
import {MessageEmbed} from "discord.js";
import {BreadUser} from "../db/entity/BreadUser";
import PQueue from "p-queue";
import {getNewRivenMods} from "../fuctions/getNewRivenMods";
import {TimerCategory, TimerStorage} from "../storages/TimerStorage";
import axios, {AxiosInstance} from "axios";
import {URL} from "url";
import {displayingPrice} from "../fuctions/embed";


type AuctionWithBids = {auction: Auction, bids: Bid[]}

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

  public huntOnce = async (urlEntity: MarketUrl): Promise<AuctionWithBids[]> => {
    return await this.promiseQueue.add(async () => {
      const rivenMods = await getNewRivenMods(urlEntity.url)
      const api = new WMAPI()
      const auctionsWithBids: AuctionWithBids[] = []
      for (const el of rivenMods) {
        if (displayingPrice(el) <= urlEntity.platinumLimit) {
          const bids = await api.bids(el.id)
          auctionsWithBids.push({auction: el, bids: bids})
        }
      }
      return auctionsWithBids
    })
  }

  public startHunting = async (
    urlEntity: MarketUrl, onNewRivenMods: (rivenMods: AuctionWithBids[]) => void
  ) => {
    const userRepository = getRepository(BreadUser)
    const timer = setInterval(async () => {
      const urlRepository = getRepository(MarketUrl)
      const newUrlEntity = await urlRepository.find(urlEntity)
      if (!newUrlEntity.length) {
        clearInterval(timer)
        return
      }
      const rivenMods = await this.huntOnce(urlEntity)
      onNewRivenMods(rivenMods)
    }, 20000)
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
    return await urlRepository.delete(urls[index])
  }
}

export class WMAPI {
  private readonly API_ROOT = 'https://api.warframe.market/v1'
  private readonly LANG = 'en'
  private readonly PLATFORM = 'pc'

  private instance : AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: this.API_ROOT,
      headers: {language: this.LANG, platform: this.PLATFORM},
      timeout: 5000
    })
  }

  public profile = async (nickname: string) : Promise<Profile> => {

    type ResponseData = {payload: {profile: Profile}}
    const request = await this.instance.get<ResponseData>(`/profile/${nickname}`)
    return request.data.payload.profile

  }

  public auctions = async (url: string) : Promise<Auction[]> => {
    const urlObject = new URL(url)
    try {
      type ResponseData = {payload: {auctions: Auction[]}}
      const request = await this.instance.get<ResponseData>('/auctions/search', {
        params: urlObject.searchParams
      })
      return request.data.payload.auctions
    } catch (e) {
      console.log(e)
    }
  }

  public bids = async (id: string) => {
    type responseData = {payload: {bids: Bid[]}}
    const request = await this.instance.get<responseData>(`/auctions/entry/${id}/bids`)
    return request.data.payload.bids
  }
}

export interface Profile {
  region: string
  banned: boolean
  status: "offline" | "online" | "ingame"
  ingame_name: string
  background?: string
  own_profile: boolean
  about: string
  last_seen: string
  achievements: any[]
  avatar?: string
  id: string
  reputation: number
  platform: string
}

export interface Bid {
  value: number
  created: string
  updated: string
  auction: string
  user: User
  id: string
}

export interface Auction {
  visible: boolean
  starting_price?: number
  note: string
  buyout_price?: number
  private: boolean
  item: AuctionItem
  minimal_reputation: number
  owner: User
  platform: string
  closed: boolean
  top_bid?: number
  winner?: string
  is_marked_for?: null
  marked_operation_at: null
  created: string
  updated: string
  note_raw: string
  is_direct_sell: boolean
  id: string
}

export interface User {
  reputation: number
  reputation_bonus: number
  region: string
  last_seen: string
  ingame_name: string
  status: "offline" | "online" | "ingame"
  id: string
  avatar?: string
}

export enum Polarity {
  Naramon = "naramon",
  Vazarin = "vazarin",
  Madurai = "madurai"
}

export interface Attribute {
  positive: boolean,
  value: number,
  url_name: string
}

export interface AuctionItem {
  name: string,
  mod_rank: number
  polarity: "madurai" | "vazarin" | "naramon"
  attributes: Attribute[]
  type: string
  weapon_url_name: string
  re_rolls: number
  mastery_level: number

}