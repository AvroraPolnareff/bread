import * as _ from "lodash";
import {RivenWithDetails} from "../models/RivenWithDetails";
import {Attribute} from "../models/Riven";

export const makeEmbed = (riven: RivenWithDetails) => {
    let embed = {
        "color": getColor(riven),
        "fields": [
            ...attributesAsFields(riven.attributes),
            {
                "inline": true,
                "name": "*Item Specs:*",
                "value": `Mod Rank: **${riven.modRank}**\nRe-rolls: **${riven.rerolls}**\nMastery: **${riven.mastery}**\nPolarity: **${riven.polarity}**`
            },
            auctionInfoAsField(riven),
        ],
        "description": `Seller: **[${riven.nickname}](<${riven.profile}>)** **ꗯ** Price: **${riven.displayingPrice}** Platinum\n• • • • • • • • • • \nDescription: *${riven.description ? riven.description : "n/a"}*`,
        "footer": {
            "text": "warframe.market | Click on the header to open the auction!",
            "icon_url": "https://cdn.discordapp.com/attachments/408460110222852096/690891636904951808/logo-black.webp"
        },
        "author": {
            "name": `Warframe Market: [${riven.name}]`,
            "url": `${riven.link}`,
            "icon_url": `https://cdn.discordapp.com/attachments/408460110222852096/690891636904951808/logo-black.webp`
        },
        "thumbnail": {
            "url": `${riven.image}`
        }
    }
    if (riven.bids) {
        if (riven.bids.length) {
            embed.fields.push(bidsAsField(riven.bids))
        }
    }
    return embed
}

const getColor = (riven) => {
    if (riven.hasOwnProperty('sellingPrice')) {
        return 15922165
    }
    if (riven.hasOwnProperty("topBid")) {
        return 6016762
    }
    if (riven.hasOwnProperty("buyoutPrice")) {
        return 16099768
    }
    return 11305941
}

const bidsAsField = (bids) => {
    let bidsField = {
        name: "**• BIDS:**",
        value: "",
        inline: false
    }

    const bidsSorted = _.sortBy(bids, "bid")

    _.forEach(bidsSorted, (bid, key) => {
        bidsField.value += `${key + 1}. **[${bid.nickname}](<${bid.profileLink}>)**: ${bid.bid} Platinum, ${bid.updatedAt};\n`
    })
    bidsField.value = bidsField.value.slice(0, bidsField.value.length - 1)

    return bidsField
}

const auctionInfoAsField = (riven) => {
    let auctionInfo = ""

    if (riven.hasOwnProperty("startingPrice")) {
        auctionInfo += `Starting price: **${riven.startingPrice}**\n`
    } else {
        auctionInfo += `Starting price: **n/a**\n`
    }
    if (riven.hasOwnProperty("buyoutPrice")) {
        auctionInfo += `Buyout price: **${riven.buyoutPrice}**\n`
    } else {
        auctionInfo += `Buyout price: **n/a**\n`
    }
    if (riven.hasOwnProperty("createdAt")) {
        auctionInfo += `Created: **${riven.createdAt}**\n`
    } else {
        auctionInfo += `Created: **n/a**\n`
    }
    if (riven.hasOwnProperty("updatedAt")) {
        auctionInfo += `Last update: **${riven.updatedAt}**`
    } else {
        auctionInfo += `Last update: **n/a**`
    }

    return {
        "name": "*Auction Info:*",
        "value": auctionInfo,
        "inline": true
    }
}

const attributesAsFields = (attributes: Attribute[]) => {

    return attributes.map(attribute => {
        return {
            name: attribute.name,
            value: `\`${attribute.value}\``,
            "inline": false
        }
    })
}

