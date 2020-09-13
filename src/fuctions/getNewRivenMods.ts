import {getCustomRepository} from "typeorm";
import {RivenListRepository} from "../db/repository/RivenListRepository";
import {Browser} from "puppeteer";
import * as _ from "lodash";
import {JSDOM} from "jsdom";
import {UniqueRivenRepository} from "../db/repository/UniqueRivenRepository";
import {RivenListParser} from "../parsers/RivenListParser";
import {Auction, WMAPI} from "../features/RivenHunter";

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




const getRivenList = async (url: string, browser: Browser) => {

    const page = await browser.newPage()
    await page.goto(url)
    await page.click(".filter__buttons-horizontal--2aCfA > .btn")
    const content = await page.content()
    const height = getPageHeight(content) + 3000
    await page.setViewport({width: 600, height})
    await sleep(3000)
    const allContent = await page.content()
    await page.close()

    const parser = new RivenListParser(allContent)
    return parser.parse()
}

const getPageHeight = (page) => {
    const dom = new JSDOM(page)
    const style = dom.window.document.querySelector(".infinite-scroll").getAttribute('style')
    const height = /(\d)+/g.exec(style)[0]
    return parseInt(height)
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}


