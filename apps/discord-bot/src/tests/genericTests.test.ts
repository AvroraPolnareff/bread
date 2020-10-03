import {Auction, Bid} from "../features/RivenHunter";
import {WMAPI} from "../api/WMAPI";


const data : Auction[] = [{"buyout_price": 1231, "private": false, "note": "<p>haha</p>", "item": {"re_rolls": 0, "polarity": "madurai", "name": "geli-mantitio", "weapon_url_name": "imperator", "attributes": [{"value": 32.0, "positive": true, "url_name": "cold_damage"}, {"value": 32.0, "positive": true, "url_name": "damage_vs_corpus"}, {"value": 32.0, "positive": true, "url_name": "electric_damage"}, {"value": -32.0, "positive": false, "url_name": "damage_vs_grineer"}], "type": "riven", "mastery_level": 8, "mod_rank": 0}, "minimal_reputation": 0, "starting_price": 1, "owner": {"reputation": 2, "reputation_bonus": 0, "region": "en", "last_seen": "2020-09-13T11:30:52.318+00:00", "ingame_name": "Hippothoe", "avatar": "user/avatar/5a96bbbbe9df0c0ad343b3d6.png?da2ce2b7fc36e028592cc73a03f2a305", "status": "offline", "id": "5a96bbbbe9df0c0ad343b3d6"}, "platform": "pc", "closed": false, "top_bid": 2, "winner": null, "is_marked_for": null, "marked_operation_at": null, "created": "2020-04-13T15:05:38.000+00:00", "updated": "2020-09-13T11:29:40.000+00:00", "note_raw": "haha", "is_direct_sell": false, "visible": true, "id": "5e947fc2ebde7c07ad3ef630"}]

test('get auctions from wf market api', async () => {
  const api = new WMAPI()
  const auctions = await api.auctions('https://warframe.market/auctions/search?type=riven&positive_stats=cold_damage,damage_vs_corpus,electric_damage&negative_stats=damage_vs_grineer&polarity=any&sort_by=positive_attr_desc')
  console.log(auctions)
  expect(auctions).toEqual(data)
})
const data2 : Bid[] = [
  {
    "value": 2,
    "created": "2020-04-14T11:58:53.000+00:00",
    "updated": "2020-04-14T11:58:53.000+00:00",
    "auction": "5e947fc2ebde7c07ad3ef630",
    "user": {
      "reputation": 0,
      "reputation_bonus": 0,
      "region": "zh",
      "last_seen": "2020-05-05T13:29:18.616+00:00",
      "ingame_name": "QIIXssy",
      "status": "offline",
      "id": "5e4fcbe25e5e89014a72b35c",
      "avatar": null
    },
    "id": "5e95a57d396e6900141238be"
  },
  {
    "value": 2,
    "created": "2020-04-16T21:25:22.000+00:00",
    "updated": "2020-04-16T21:25:22.000+00:00",
    "auction": "5e947fc2ebde7c07ad3ef630",
    "user": {
      "reputation": 17,
      "reputation_bonus": 0,
      "region": "en",
      "last_seen": "2020-08-01T20:40:39.508+00:00",
      "ingame_name": "Luishr_8",
      "avatar": "user/avatar/5d220184eec58b00cf2860be.png?424a29b45ce903b35b02dff035ec6983",
      "status": "offline",
      "id": "5d220184eec58b00cf2860be"
    },
    "id": "5e98cd42f85590001842db08"
  },
  {
    "value": 2,
    "created": "2020-04-18T07:57:00.000+00:00",
    "updated": "2020-04-18T07:57:00.000+00:00",
    "auction": "5e947fc2ebde7c07ad3ef630",
    "user": {
      "reputation": 1,
      "reputation_bonus": 0,
      "region": "en",
      "last_seen": "2020-04-25T07:57:18.172+00:00",
      "ingame_name": "ikpoUA",
      "avatar": "user/avatar/5d8862848792860572dc1495.png?e6be7d28b64c0c6c838b6bc57c2f4129",
      "status": "offline",
      "id": "5d8862848792860572dc1495"
    },
    "id": "5e9ab2ccc520d100144900a9"
  }
]
test('get bids for auction', async () => {
  const api = new WMAPI()
  const bids = await api.bids('5e947fc2ebde7c07ad3ef630')
  expect(bids).toEqual(data2)
})