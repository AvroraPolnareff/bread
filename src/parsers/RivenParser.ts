import {Bid, RivenDetails, TimeStamps} from "../structures/RivenWithDetails";
import {Dom} from "dom-parser";
import DomParser from "dom-parser";


export interface Parser<T> {
    parse(): T
}

export class RivenPageParser implements Parser<RivenDetails> {

    private dom: Dom

    constructor(rivenPage: string) {
        const domParser = new DomParser()
        this.dom = domParser.parseFromString(rivenPage)
    }

    public parse = () : RivenDetails => {

        return {
            description: this.getAuctionNotes(),
            bids: this.getBids(),
            createdAt: this.getTimeStamps().createdAt,
            updatedAt: this.getTimeStamps().updatedAt
        }
    }

    private getBids = () : Bid[] => {
        if (this.dom.getElementsByClassName("non-auction")[0]) return []
        const bidsList = this.dom.getElementsByClassName("infinite-translate")[0]
        if (bidsList) {
            let bids = []
            bidsList.childNodes.forEach((node) => {
                const bid = this.parseBid(node)
                if (bid) {
                    bids.push(this.parseBid(node))
                }
            })
            return bids
        }
        else return []
    }

    private parseBid(bidNode: DomParser.Node) : Bid {
        const userNode = bidNode.childNodes[0].childNodes[0].childNodes[0];
        if (!userNode) {
            return null
        }
        const nickname = userNode.childNodes[1].innerHTML
        const profileLink = userNode["href"]
        const bid = bidNode
            .childNodes[1].childNodes[0]
            .childNodes[1].childNodes[0]
            .childNodes[0].innerHTML
        const updatedAt = bidNode
            .childNodes[1].childNodes[0]
            .childNodes[2].childNodes[0]
            .childNodes[0].innerHTML

        return {
            nickname,
            profile: "https://warframe.market" + profileLink,
            price: parseInt(bid),
            updatedAt
        }
    }

    private getAuctionNotes = (): string => {
        const auctionNotes = this.dom.getElementsByClassName("auction__notes")[0]
        if (auctionNotes.childNodes.length) {
            return auctionNotes.getElementsByTagName("p")[0].innerHTML
        } else {
            return ""
        }
    }

    private getTimeStamps = () : TimeStamps => {
        const auctionInfo = this.dom.getElementsByClassName("auction__info")[0]
        const infoList = auctionInfo.getElementsByTagName("ul")[0]
        const listLength = infoList.childNodes.length

        const updatedAt = infoList.childNodes[listLength - 1]
            .getElementsByTagName("b")[0]
            .childNodes[0]
            .innerHTML
            .trim()

        const createdAt = infoList.childNodes[listLength - 2]
            .getElementsByTagName("b")[0]
            .childNodes[0]
            .innerHTML
            .trim()

        return {updatedAt, createdAt}
    }

}