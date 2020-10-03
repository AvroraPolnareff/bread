import {MarketUrl} from "../db/entity/MarketUrl";
import {DeleteResult, getCustomRepository, getRepository} from "typeorm";
import {Client, DMChannel, MessageEmbed, TextChannel} from "discord.js";
import PQueue from "p-queue";
import {displayingPrice} from "../functions/embed";
import {WMAPI} from "../api/WMAPI";
import {RivenListRepository} from "../db/repository/RivenListRepository";
import {fetchChannel} from "../functions/fetchChannel";

type AuctionWithBids = { auction: Auction, bids: Bid[] }

export class RivenHunter {
  constructor(
    private userId: string,
    private promiseQueue: PQueue,
  ) {}

  public add = async (url: string, platinumLimit: number, channelId: string, guildId?: string) => {
    const urlRepository = getRepository(MarketUrl)
    const urls = await urlRepository.find({userId: this.userId})

    if (urls.some(entry => entry.url === url && entry.channelId === channelId && entry.guildId === (guildId ?? ''))) {
      throw Error("URL has been added.")
    }

    let entity: MarketUrl

    entity = urlRepository.create({
      userId: this.userId,
      url: url,
      channelId: channelId,
      guildId: guildId ?? "",
      platinumLimit: platinumLimit
    })

    return await urlRepository.save(entity)
  }

  public huntOnce = async (urlEntity: MarketUrl): Promise<AuctionWithBids[]> => {
    return await this.promiseQueue.add(async () => {
      const rivenRepository = getCustomRepository(RivenListRepository)
      const rivenMods = await rivenRepository.fetchNewRivenMods(urlEntity.url)
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
    urlEntity: MarketUrl,
    client: Client,
    onNewRivenMods: (rivenMods: AuctionWithBids[], channel: TextChannel | DMChannel) => void
  ) => {
    const timer = setInterval(async () => {
      const urlRepository = getRepository(MarketUrl)

      const newUrlEntity = await urlRepository.find(urlEntity)
      if (!newUrlEntity.length) {
        return clearInterval(timer)
      }

      const channel = await fetchChannel(urlEntity.userId, urlEntity.guildId, urlEntity.channelId, client)
      if (!channel) {
        await urlRepository.delete(urlEntity)
        return clearInterval(timer)
      }

      const rivenMods = await this.huntOnce(urlEntity)
      if (rivenMods.length) {
        onNewRivenMods(rivenMods, channel)
      }
    }, 10000)
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