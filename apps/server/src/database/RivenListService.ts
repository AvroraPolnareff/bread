import {Injectable} from "@nestjs/common";
import {RivenListRepository} from "./RivenListRepository";
import {Auction, Bid, WfMarketAPI} from "@bread/wf-market";

@Injectable()
export class RivenListService {
  constructor(
    private rivenListRepository: RivenListRepository
  ) {}

  async fetchNewRivenMods(marketURL: string): Promise<{auction: Auction, bids: Bid[]}[]> {
    const rivenMods = await this.rivenListRepository.fetchNewRivenMods(marketURL)
    const auctionsWithBids: {auction: Auction, bids: Bid[]}[] = []
    const api = new WfMarketAPI()
    for (const el of rivenMods) {
      const bids = await api.bids(el.id)
      auctionsWithBids.push({auction: el, bids: bids})
    }
    return auctionsWithBids
  }
}





