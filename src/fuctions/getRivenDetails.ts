import {Riven} from "../structures/Riven";
import {RivenWithDetails} from "../structures/RivenWithDetails";
import {RivenDetailsParser} from "../parsers/RivenParser";


export const getRivenDetails = async (riven: Riven, browser) => {
    try {
        const url = riven.link

        const page = await browser.newPage()
        await page.goto(url)
        const allContent = await page.content()

        await page.close()
        const parser = new RivenDetailsParser(allContent)
        return {...riven,...parser.parse()} as RivenWithDetails
    } catch (e) {
        console.log(e)
    }

}


