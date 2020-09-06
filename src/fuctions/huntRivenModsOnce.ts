import {launch} from "puppeteer";
import {getNewRivenMods} from "./getNewRivenMods";
import {getRivenDetails} from "./getRivenDetails";
import {makeEmbed} from "./embed";
import {MessageEmbed} from "discord.js";

export const huntRivenModsOnce = async (url: string, platinumLimit: number): Promise<MessageEmbed[]> => {


    const browser = await launch({timeout: 60 * 1000, args: ['--no-sandbox'] })

    const rivens = await getNewRivenMods(url, browser)
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
