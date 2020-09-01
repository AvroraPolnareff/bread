import {RivenListParser} from "../parsers/RivenListParser";
import {rivenListPage} from "./testData";

const expected = [
    {
        "attributes": [
            {
                "name": "Base Damage / Melee Damage",
                "negative": false,
                "value": "+203.9%"
            },
            {
                "name": "Critical Damage",
                "negative": false,
                "value": "+126.8%"
            },
            {
                "name": "Damage vs. Infested",
                "negative": false,
                "value": "+51.7%"
            },
            {
                "name": "Zoom",
                "negative": true,
                "value": "-57.7%"
            }
        ],
        "avatar": "https://warframe.market/static/assets/user/avatar/5eab3a2309b33e0188e25ef1.png?d5ad1c88bb71ff4519cf884a09ca3448",
        "buyoutPrice": "200",
        "displayingPrice": "60",
        "image": "https://warframe.market/static/assets/icons/en/thumbs/cernos.6ea49e65e339e10cc84409e7dcb02cef.128x128.png",
        "link": "https://warframe.market/auction/5f34356a1897a101756cf067",
        "mastery": "15",
        "modRank": "8",
        "name": "Cernos visi-puratis",
        "nickname": "Jiggsi",
        "polarity": "Naramon",
        "profile": "https://warframe.market/profile/Jiggsi",
        "rerolls": "10",
        "startingPrice": "60"
    },
    {
        "attributes": [
            {
                "name": "Base Damage / Melee Damage",
                "negative": false,
                "value": "+185%"
            },
            {
                "name": "Critical Damage",
                "negative": false,
                "value": "+135%"
            },
            {
                "name": "Damage vs. Infested",
                "negative": false,
                "value": "+54%"
            },
            {
                "name": "Magazine Capacity",
                "negative": true,
                "value": "-43%"
            }
        ],
        "avatar": "https://warframe.market/static/assets/user/avatar/5b31ea74c34b9206a351c014.png?cbce50186e247a5b3817260e24aec380",
        "buyoutPrice": "100",
        "displayingPrice": "10",
        "image": "https://warframe.market/static/assets/icons/en/thumbs/argonak.39fc2b8728117c8c7cc81370cd216ba2.128x128.png",
        "link": "https://warframe.market/auction/5f42c6bfd4c248018db1c6c0",
        "mastery": "8",
        "modRank": "0",
        "name": "Argonak pura-acriata",
        "nickname": "-DC-eXcellent",
        "polarity": "Vazarin",
        "profile": "https://warframe.market/profile/-DC-eXcellent",
        "rerolls": "9",
        "startingPrice": "10"
    },
    {
        "attributes": [
            {
                "name": "Base Damage / Melee Damage",
                "negative": false,
                "value": "+160.8%"
            },
            {
                "name": "Critical Damage",
                "negative": false,
                "value": "+81.3%"
            },
            {
                "name": "Damage vs. Infested",
                "negative": false,
                "value": "+43.8%"
            }
        ],
        "avatar": "https://warframe.market/static/assets/user/avatar/56a6db50d3ffb60e8b35bcec.png?1d7a77960ad235d97ba8e0ec7c92ca87",
        "displayingPrice": "200",
        "image": "https://warframe.market/static/assets/icons/en/thumbs/hate.1e4354f5dbd630a1809478ea19ca740d.128x128.png",
        "link": "https://warframe.market/auction/5f3f7a52b923fb013241823c",
        "mastery": "10",
        "modRank": "8",
        "name": "Hate visi-puratis",
        "nickname": "EnderStar101",
        "polarity": "Naramon",
        "profile": "https://warframe.market/profile/EnderStar101",
        "rerolls": "28",
        "sellingPrice": "200"
    },
    {
        "attributes": [
            {
                "name": "Base Damage / Melee Damage",
                "negative": false,
                "value": "+143%"
            },
            {
                "name": "Critical Damage",
                "negative": false,
                "value": "+107.2%"
            },
            {
                "name": "Damage vs. Infested",
                "negative": false,
                "value": "+43.1%"
            },
            {
                "name": "Ammo Maximum",
                "negative": true,
                "value": "-34%"
            }
        ],
        "avatar": "https://warframe.market/static/assets/user/default-avatar.png",
        "displayingPrice": "400",
        "image": "https://warframe.market/static/assets/icons/en/thumbs/lenz.c503188d5decb7208a86975a77881152.128x128.png",
        "link": "https://warframe.market/auction/5f38e0fe52bbb900607c59d1",
        "mastery": "8",
        "modRank": "8",
        "name": "Lenz pura-acriata",
        "nickname": "idealaspirin",
        "polarity": "Vazarin",
        "profile": "https://warframe.market/profile/idealaspirin",
        "rerolls": "21",
        "sellingPrice": "400"
    }
]

test('parses the page', () => {
    const parser = new RivenListParser(rivenListPage)
    expect(parser.parse()).toEqual(expected)
})