import * as puppeteer from "puppeteer";
import {getRepository} from "typeorm";
import {MarketUrl} from "../db/entity/MarketUrl";
import {getNewRivens} from "./getNewRivens";
import {getRivenDetails} from "./getRivenDetails";
import {makeEmbed} from "./embed";
import {parseUrlQuery} from "./parseUrlQuery";
import {Logger} from "../utility/Logger";

export const huntRivensOnce = async (url: string, platinumLimit: number) => {


    const browser = await puppeteer.launch({timeout: 60 * 1000, args: ['--no-sandbox'] })

    const rivens = await getNewRivens(url, browser)
    let embeds = []
    for (const el of rivens) {
        if (parseInt(el.displayingPrice) <= platinumLimit) {
            const rivenWithDetails = await getRivenDetails(el, browser)
            embeds.push(makeEmbed(rivenWithDetails))
        }
    }
    await browser.close()
    return embeds
}
