import {JSDOM} from 'jsdom'
import {Riven} from "../models/Riven";

export const parseRivenList = (content) => {
    const dom = new JSDOM(content)
    const elements = dom.window.document.querySelectorAll(".auction-entry")
    let rivens : Riven[] = []
    elements.forEach(el => {
        let header = el.childNodes.item(0)
        let info = el.getElementsByClassName("auction-entry__info")[0]
        let bids = el.getElementsByClassName("auction-entry__bids")[0].childNodes[0]
        let user = el.getElementsByClassName("auction-entry__user")[0]
        let displayingPrice = calcDisplayingPrice(parseBids(bids))
        const riven : Riven = {
            ...parseRivenHeader(header),
            ...parseRivenInfo(info),
            ...parseBids(bids),
            ...parseUser(user),
            displayingPrice
        }
        rivens.push(riven)
    })
    return rivens
}

const calcDisplayingPrice = (prises) => {
    if (prises.hasOwnProperty("topBid")) {
        return prises.topBid
    } else if (prises.hasOwnProperty("startingPrice")) {
        return prises.startingPrice
    } else {
        return prises.sellingPrice
    }
}

const parseRivenHeader = (header) => {
    const link = "https://warframe.market" + header.getElementsByClassName("smartLink--Genkl")[0].href
    const image = header.getElementsByClassName("auction-entry__item-image")[0].src
    const name = header.getElementsByTagName("SPAN")[0].innerHTML
    return {name, link, image}
}

const parseRivenInfo = (info) => {
    const attributes = parseStats(info)
    const additionalInfo = parseAdditionalInfo(info)
    return { attributes, ...additionalInfo }
}

const parseStats = (info) => {
    const positiveStats = info.getElementsByClassName("auction-entry__positive-attributes").item(0)
    let attributes = []
    positiveStats.childNodes.forEach(el => {
        let attribute = {name: '', value: '', negative: false}
        attribute.name = el.childNodes.item(1).innerHTML
        attribute.value = el.childNodes.item(0).innerHTML
        attributes.push(attribute)
    })

    const negativeStats = info.getElementsByClassName("auction-entry__negative-attributes").item(0)
    if (negativeStats) {
        let attribute = {name: '', value: '', negative: false}
        const attributeNode = negativeStats.childNodes.item(0)
        attribute.name = attributeNode.childNodes.item(1).innerHTML
        attribute.value = attributeNode.childNodes.item(0).innerHTML
        attributes.push(attribute)
    }
    return attributes
}

const parseAdditionalInfo = (info) => {
    const additionalInfo = info.getElementsByClassName("auction-entry__mod-attributes")[0].childNodes
    const mr = additionalInfo[0].childNodes[1].innerHTML
    const ranks = additionalInfo[1].childNodes[1].innerHTML
    const rerolls = additionalInfo[2].childNodes[1].innerHTML
    const polarity = additionalInfo[3]
        .childNodes[1]
        .childNodes[0]
        .getAttribute('class')
        .slice(14)
    const polarityCapitalized = capitalize(polarity)


    return { mastery: mr, modRank: ranks, rerolls, polarity: polarityCapitalized }
}

const parseBids = (bids) => {

    let price: any = {}
    if (bids.childNodes.length === 2) {
        const buyoutPrice = bids.childNodes[0].childNodes[0].childNodes[1].childNodes[0].innerHTML
        price.buyoutPrice = buyoutPrice.replace(/,/i, '')
        const startingPrice = bids.childNodes[0].childNodes[1].childNodes[1].childNodes[0].innerHTML
        price.startingPrice = startingPrice.replace(/,/i, '')

        if(!bids.innerHTML.includes("No bids so far")) {
            const topBid = bids.childNodes[1].childNodes[0].childNodes[1].childNodes[0].innerHTML
            price.topBid = topBid.replace(/,/i, '')
        }
    } else {
        const sellingPrice = bids.childNodes[0].childNodes[1].childNodes[0].innerHTML
        price.sellingPrice = sellingPrice.replace(/,/i, '')
    }
    if (price.buyoutPrice === "<use xlink:href=\"/static/build/wfm-icons-0d249d.svg#icon-infinity\"></use>") {
        price.buyoutPrice = "∞"
    }

    return price
}


const parseUser = (user) => {
    const nickname = user.childNodes[0].childNodes[0].childNodes[1].innerHTML
    const avatar = user.childNodes[0].childNodes[0].childNodes[0].src
    //const status = user.childNodes[1].childNodes[0].innerHTML
    //const reputation = user.childNodes[2].textContent
    const profile = user.getElementsByClassName('smartLink--Genkl')[0].href
    const profileLink = "https://warframe.market" + profile
    return { nickname, avatar, profile: profileLink }
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}
