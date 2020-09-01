import {JSDOM} from "jsdom";
import {RivenDetails} from "../structures/RivenWithDetails";

export const parseRivenPage = (content) => {
    const dom = new JSDOM(content)
    const auctionInfoNode = dom.window.document.querySelectorAll(".auction__info")[0]
    const bidsListNode = dom.window.document.querySelectorAll(".infinite-translate")[0]
    const auctionNotesNode = dom.window.document.querySelectorAll(".auction__notes")[0]

    const auctionInfo = parseAuctionInfo(auctionInfoNode)
    const bidsList = parseBidsList(bidsListNode)
    let description
    if (auctionNotesNode) {
        parseAuctionNotes(auctionNotesNode)
    }

    return {...auctionInfo, bids: bidsList, description} as RivenDetails
}

const parseAuctionNotes = (auctionNotes) => {
    if(auctionNotes.childNodes.length) {
        return auctionNotes.childNodes[0].innerHTML
    } else {
        return ""
    }
}

const parseAuctionInfo = (auctionInfo) => {
    const infoList = auctionInfo.childNodes[1];
    const listLength = infoList.childNodes.length

    const updatedAt = infoList.childNodes[listLength - 1]
        .getElementsByTagName("B")[0]
        .childNodes[0]
        .innerHTML
        .trim()

    const createdAt = infoList.childNodes[listLength - 2]
        .getElementsByTagName("B")[0]
        .childNodes[0]
        .innerHTML
        .trim()

    return {updatedAt, createdAt}
}

const parseBidsList = (bidsList) => {
    if (bidsList) {
        let bids = []
        bidsList.childNodes.forEach((node) => {
            const bid = parseBid(node)
            if (bid) {
                bids.push(parseBid(node))
            }
        })
        return bids
    }
    else return []
}

const parseBid = (bidNode) => {
    const userNode = bidNode.childNodes[0].childNodes[0].childNodes[0];
    if (!userNode) {
        return null
    }
    const nickname = userNode.childNodes[1].innerHTML
    const profileLink = userNode.href
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
        profileLink: "https://warframe.market"+ profileLink,
        bid,
        updatedAt
    }
}

