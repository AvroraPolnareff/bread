import * as _ from "lodash";
import {MessageEmbed} from "discord.js";
import {Attribute, Auction, Bid} from "../features/RivenHunter";
import {weaponAttributes, weapons} from "../utility/weapon";

export const makeEmbed = (riven: Auction, bids: Bid[]) : MessageEmbed => {
    const weapon = weapons.find(weapon => weapon.url_name === riven.item.weapon_url_name)

    let embed = {
        "color": getColor(riven),
        "fields": [
            ...attributesAsFields(riven.item.attributes),
            {
                "inline": true,
                "name": "*Item Specs:*",
                "value": `Mod Rank: **${riven.item.mod_rank}**\nRe-rolls: **${riven.item.re_rolls}**\nMastery: **${riven.item.mastery_level}**\nPolarity: **${riven.item.polarity}**`
            },
            auctionInfoAsField(riven),
        ],
        "description": `Seller: **[${riven.owner.ingame_name}](<https://warframe.market/profile/${riven.owner.ingame_name}>)** **ꗯ** Price: **${displayingPrice(riven)}** Platinum\n• • • • • • • • • • \nDescription: *${riven.note_raw !== "" ? riven.note_raw : "n/a"}*`,
        "footer": {
            "text": "warframe.market | Click on the header to open the auction!",
            "icon_url": "https://cdn.discordapp.com/attachments/408460110222852096/690891636904951808/logo-black.webp"
        },
        "author": {
            "name": `Warframe Market: [${weapon.item_name} ${riven.item.name}]`,
            "url": `https://warframe.market/auction/${riven.id}`,
            "icon_url": `https://cdn.discordapp.com/attachments/408460110222852096/690891636904951808/logo-black.webp`
        },
        "thumbnail": {
            "url": `https://warframe.market/static/assets/${weapon.icon}`
        }
    }
    if (bids.length) {
      embed.fields.push(bidsAsField(bids))
    }
    return new MessageEmbed(embed)
}

export const displayingPrice = (riven: Auction) => (
  riven.is_direct_sell ?
    riven.buyout_price
  : riven.top_bid || riven.starting_price
)

const getColor = (riven : Auction) => {
    if (riven.is_direct_sell) {
        return 15922165
    }
    if (riven.top_bid) {
        return 6016762
    }
    if (riven.buyout_price) {
        return 16099768
    }
    return 11305941
}

const bidsAsField = (bids : Bid[]) => {
    let bidsField = {
        name: "**• BIDS:**",
        value: "",
        inline: false
    }

    const bidsSorted = _.sortBy(bids, "bid")

    _.forEach(bidsSorted, (bid, key) => {
        bidsField.value += `${key + 1}. **[${bid.user.ingame_name}](<https://warframe.market/profile/${bid.user.ingame_name}>)**: ${bid.value} Platinum, ${timeSince(Date.parse(bid.updated))} ago;\n`
    })
    bidsField.value = bidsField.value.slice(0, bidsField.value.length - 1)

    return bidsField
}

const auctionInfoAsField = (riven: Auction) => {
    let auctionInfo = ""

    if (riven.starting_price) {
        auctionInfo += `Starting price: **${riven.starting_price}**\n`
    } else {
        auctionInfo += `Starting price: **n/a**\n`
    }
    if (riven.buyout_price) {
        auctionInfo += `Buyout price: **${riven.buyout_price}**\n`
    } else {
        auctionInfo += `Buyout price: **n/a**\n`
    }
    if (riven.created) {
        auctionInfo += `Created: **${timeSince(Date.parse(riven.created))} ago**\n`
    } else {
        auctionInfo += `Created: **n/a**\n`
    }
    if (riven.updated) {
        auctionInfo += `Last update: **${timeSince(Date.parse(riven.updated))} ago**`
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
        const name = weaponAttributes
          .find(attr => attribute.url_name === attr.url_name)
          .effect
        return {
            name,
            value: `\`${attribute.value > 0 ? "+" + attribute.value : attribute.value}%\``,
            "inline": false
        }
    })
}

function timeSince(date) {

    var seconds = Math.floor((Date.now() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}
