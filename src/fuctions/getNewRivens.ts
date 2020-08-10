import {getCustomRepository} from "typeorm";
import {RivenListRepository} from "../db/repository/RivenListRepository";
import {Browser} from "puppeteer";
import * as _ from "lodash";
import {JSDOM} from "jsdom";
import {parseRivenList} from "./parseRivenList";
import {UniqueRivenRepository} from "../db/repository/UniqueRivenRepository";


export const getNewRivens = async (marketUrl, browser) => {
    const repository = getCustomRepository(RivenListRepository)
    const oldRivenList = await repository.findRivenListByUrl(marketUrl)
    const actualRivenList = await getRivenList(marketUrl, browser)

    if (oldRivenList) {
        const difference = _.differenceWith(actualRivenList, oldRivenList, _.isEqual)
        if (difference.length !== 0) {
            await repository.saveRivenList(actualRivenList, marketUrl)
            const uniqueRivenRepository = getCustomRepository(UniqueRivenRepository)
            const uniqueRivens = await uniqueRivenRepository.getUniqueRivens(difference, marketUrl)
            return uniqueRivens
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
    await page.click("div[class^='filter__buttons-horizontal'] > .btn")
    const content = await page.content()
    const height = getPageHeight(content) + 3000
    await page.setViewport({width: 600, height})
    await sleep(3000)
    const allContent = await page.content()
    await page.close()
    return parseRivenList(allContent)
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


