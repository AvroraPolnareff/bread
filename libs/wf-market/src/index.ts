import axios, {AxiosInstance} from "axios";
import {URL} from "url";

export class WfMarketAPI {
  private readonly API_ROOT = 'https://api.warframe.market/v1'
  private readonly LANG = 'en'
  private readonly PLATFORM = 'pc'

  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: this.API_ROOT,
      headers: {language: this.LANG, platform: this.PLATFORM},
      timeout: 5000
    })
  }

  public profile = async (nickname: string): Promise<Profile> => {
    type ResponseData = { payload: { profile: Profile } }
    const request = await this.instance.get<ResponseData>(`/profile/${nickname}`)
    return request.data.payload.profile
  }

  public auctions = async (url: string): Promise<Auction[]> => {
    const urlObject = new URL(url)
    try {
      type ResponseData = { payload: { auctions: Auction[] } }
      const request = await this.instance.get<ResponseData>('/auctions/search', {
        params: urlObject.searchParams
      })
      return request.data.payload.auctions
    } catch (e) {
      console.log(e)
    }
  }

  public bids = async (id: string) => {
    type responseData = { payload: { bids: Bid[] } }
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