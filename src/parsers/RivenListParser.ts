import {Parser} from "./RivenParser";
import {Riven} from "../structures/Riven";
import DomParser, {Dom, Node} from "dom-parser";

export class RivenListParser implements Parser<Riven[]> {
    private dom: Dom
    private entries: Node[]

    constructor(rivenListPage: string) {
        const domParser = new DomParser()
        this.dom = domParser.parseFromString(rivenListPage)
        this.entries = this.dom.getElementsByClassName("auction-entry")
    }

    public parse(): Riven[] {

        const rivens = this.entries.map((entry, index) => {
            const user = this.parseUser(index)
            const bidsInfo = this.parseBids(index)
            const attributes = this.parseAttributes(index)
            return {
                link: this.parseLink(index),
                image: this.parseImage(index),
                name: this.parseName(index),
                attributes: this.parseStats(index),
                avatar: user.avatar,
                nickname: user.nickname,
                profile: user.profile,
                ...bidsInfo,
                mastery: attributes.mastery,
                polarity: attributes.polarity,
                rerolls: attributes.rerolls,
                modRank: attributes.modRank
            } as Riven
        })
        return rivens
    }

    private parseLink = (index: number) => {
        const linkNode = this.entries[index].getElementsByClassName("smartLink--Genkl")[0]
        return "https://warframe.market" + linkNode.getAttribute("href")
    }

    private parseImage = (index: number) => {
        const imageNode = this.entries[index].getElementsByClassName("auction-entry__item-image")[0]
        return imageNode.getAttribute("src")
    }

    private parseName = (index: number) => {
        const nameNode = this.entries[index]
            .getElementsByClassName("auction-entry__name")[0]
            .getElementsByTagName("span")[0]
        return nameNode.innerHTML
    }

    private parseStats = (index: number) => {
        const positiveStatsNode = this.entries[index].getElementsByClassName("auction-entry__positive-attributes")[0]
        const positiveStats = positiveStatsNode.childNodes.map(el => {
            const name = el.childNodes[1].innerHTML
            const value = el.childNodes[0].innerHTML
            return {name, value, negative: false}
        })

        const negativeStatsNode = this.entries[index].getElementsByClassName("auction-entry__negative-attributes")[0]

        if(!negativeStatsNode) return positiveStats

        const negativeStats = negativeStatsNode.childNodes.map(el => {
            const name = el.childNodes[1].innerHTML
            const value = el.childNodes[0].innerHTML
            return {name, value, negative: true}
        })

        return [...positiveStats, ...negativeStats]
    }

    private parseAttributes = (index: number) => {

        const attrsNode = this.entries[index].getElementsByClassName("auction-entry__mod-attributes")[0].childNodes

        const mastery = attrsNode[0].childNodes[1].innerHTML
        const modRank = attrsNode[1].childNodes[1].innerHTML
        const rerolls = attrsNode[2].childNodes[1].innerHTML
        const polarity = attrsNode[3]
            .childNodes[1]
            .childNodes[0]
            .getAttribute('class')
            .slice(14)
        const polarityCapitalized = polarity[0].toUpperCase() + polarity.slice(1).toLowerCase()

        return {mastery, modRank, rerolls, polarity: polarityCapitalized}
    }

    private parseBids = (index: number) => {
        const bidsNode = this.entries[index].getElementsByClassName("auction-entry__bids")[0].childNodes[0]
        let price: any = {}
        if (bidsNode.childNodes.length === 2) {
            const buyoutPrice = bidsNode.childNodes[0].childNodes[0].childNodes[1].childNodes[0].innerHTML
            price.buyoutPrice = buyoutPrice.replace(/,/i, '')
            const startingPrice = bidsNode.childNodes[0].childNodes[1].childNodes[1].childNodes[0].innerHTML
            price.startingPrice = startingPrice.replace(/,/i, '')

            if (!bidsNode.innerHTML.includes("No bids so far")) {
                const topBid = bidsNode.childNodes[1].childNodes[0].childNodes[1].childNodes[0].innerHTML
                price.topBid = topBid.replace(/,/i, '')
            }
        } else {
            const sellingPrice = bidsNode.childNodes[0].childNodes[1].childNodes[0].innerHTML
            price.sellingPrice = sellingPrice.replace(/,/i, '')
        }
        if (price.buyoutPrice === "<use xlink:href=\"/static/build/wfm-icons-0d249d.svg#icon-infinity\"></use>") {
            price.buyoutPrice = "∞"
        }

        const calcDisplayingPrice = (prices) => {
            if (prices.hasOwnProperty("topBid")) {
                return prices.topBid
            } else if (prices.hasOwnProperty("startingPrice")) {
                return prices.startingPrice
            } else {
                return prices.sellingPrice
            }
        }

        return {...price, displayingPrice: calcDisplayingPrice(price)}
    }

    private parseUser = (index: number) => {
        const userNode = this.entries[index].getElementsByClassName("auction-entry__user")[0]
        const nickname = userNode.childNodes[0].childNodes[0].childNodes[1].innerHTML
        const avatar = userNode.childNodes[0].childNodes[0].childNodes[0].getAttribute('src')
        const profile = userNode.getElementsByClassName('smartLink--Genkl')[0].getAttribute('href')
        const profileLink = "https://warframe.market" + profile
        return {nickname, avatar, profile: profileLink}
    }

}