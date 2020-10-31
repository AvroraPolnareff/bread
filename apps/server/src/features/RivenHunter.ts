import {Injectable, Module} from "@nestjs/common";
import {WebSocketGateway, WebSocketServer} from "@nestjs/websockets";
import {Server, Socket} from "socket.io";
import {RivenQuery, RivenQueryService, RivenQueryModule} from "../database";
import {Auction, Bid, WfMarketAPI} from "@bread/wf-market";
import {PQueueModule, PQueueService} from "./PromiseQueue";
import * as _ from "lodash";
import {Cron} from "@nestjs/schedule";

type AuctionWithBids = { auction: Auction, bids: Bid[] }

@Injectable()
@WebSocketGateway({namespace: 'rivenhunter'})
export class RivenHunterService {
  private auctionsList = new Map<string, Auction[]>()

  @WebSocketServer()
  private readonly server: Server

  @Cron("*/7 * * * * *")
  async startHunting() {
    const clients = await this.clients()
    if (!clients.length) return
    const queries = await this.rivenQueryService.find({})
    for (const query of queries) {
      const rivenMods = await this.huntOnce(query)
      if (rivenMods.length) {
        this.server.emit("rivens", {rivenMods, url: query})
      }
    }
  }

  huntOnce = async (rivenQuery: RivenQuery): Promise<AuctionWithBids[]> => {
    return await this.promiseQueue.add(async () => {
      const api = new WfMarketAPI()
      const auctions = await api.auctions(rivenQuery)
      const newModsWithBids: AuctionWithBids[] = []
      if (this.auctionsList) {
        const newMods = _.differenceWith(auctions, this.auctionsList.get(rivenQuery.userId), _.isEqual)
        for await (const mod of newMods) {
          const bids = await api.bids(mod.id)
          newModsWithBids.push({auction: mod, bids: bids})
        }
      }
      this.auctionsList.set(rivenQuery.userId, auctions)
      return newModsWithBids
    })
  }

  private clients(): Promise<Socket[]> {
    return new Promise((resolve, reject) => {
      this.server.clients((error, clients: Socket[]) => {
        if (error) reject(error)
        resolve(clients)
      })
    })
  }

  constructor(
    private promiseQueue: PQueueService,
    private rivenQueryService: RivenQueryService
  ) {}
}

@Module({
  imports: [PQueueModule, RivenQueryModule],
  providers: [RivenHunterService],
  exports: [RivenHunterService]
})
export class RivenHunterModule {}
