import { launch} from "puppeteer";
import DomParser from "dom-parser";
import {Status} from "../db/entity/Prey";


export const stalkPrey = async (userUrl: string) => {
    const browser = await launch({timeout: 60 * 1000, args: ['--no-sandbox'] })
    const page = await browser.newPage()
    await page.goto(userUrl)
    const content = await page.content()
    const domParser = new DomParser()
    const dom = domParser.parseFromString(content)

    const profileStatusNode = dom.getElementsByClassName("profile__status")[0]
    const status = profileStatusNode.childNodes[0].innerHTML
    const nickname = dom.getElementsByClassName("name_box__nickname")[0].innerHTML
    if (status === "Online in game") {
        return {nickname, status: Status.OnlineInGame}
    } else if (status === "Online") {
        return {nickname, status: Status.Online}
    } else {
        return {nickname, status: Status.Offline}
    }
}

