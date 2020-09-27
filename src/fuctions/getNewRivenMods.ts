import {getCustomRepository} from "typeorm";
import {RivenListRepository} from "../db/repository/RivenListRepository";
import * as _ from "lodash";
import {Auction} from "../features/RivenHunter";
import {WMAPI} from "../api/WMAPI";

export const auctionDifference = (a: Auction, b: Auction) => (
  a.buyout_price === b.buyout_price &&
  a.top_bid === b.top_bid &&
  a.is_direct_sell === b.is_direct_sell &&
  a.owner.id === b.owner.id &&
  _.isEqual(a.item, b.item) &&
  a.starting_price === b.starting_price &&
  a.updated === b.updated
)

export const getNewRivenMods = async (marketUrl: string) => {
    const api = new WMAPI()
    const repository = getCustomRepository(RivenListRepository)
    const oldRivenList = await repository.findRivenListByUrl(marketUrl)
    const actualRivenList = await api.auctions(marketUrl)

    if (oldRivenList) {
        const difference = _.differenceWith(actualRivenList, oldRivenList, auctionDifference)
        await repository.saveRivenList(actualRivenList, marketUrl)
        if (difference.length !== 0) {
            return difference
        } else {
            return []
        }
    } else {
        console.log("Doing some first launch stuff")
        await repository.saveRivenList(actualRivenList, marketUrl)
        return []
    }
}
