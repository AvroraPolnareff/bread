import {Auction, Bid} from "@bread/wf-market";
import {Server, Socket} from "socket.io";
import {PQueueModule, PQueueService} from "./PromiseQueue";
import {RivenQuery, RivenQueryService} from "../database/RivenQuery";
import {Cron} from "@nestjs/schedule";
import {WebSocketGateway, WebSocketServer} from "@nestjs/websockets";
import {Injectable, Module} from "@nestjs/common";
import {MarketUrlModule, RivenListModule} from "../database";
import {RivenSearchService} from "../database/riven-search.service";

type AuctionWithBids = { auction: Auction, bids: Bid[] }

@Injectable()
@WebSocketGateway({namespace: 'rivenhunter'})
export class RivenHunterService {
  constructor(
    private promiseQueue: PQueueService,
    private rivenQueryService: RivenQueryService,
    private rivenListService: RivenSearchService
  ) {}

  @WebSocketServer() server: Server

  public huntOnce = async (rivenQuery: RivenQuery): Promise<AuctionWithBids[]> => {
    return await this.promiseQueue.add(async () => {
      return this.rivenListService.fetchNewRivenMods(rivenQuery.url)
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

  @Cron("*/20 * * * * *")
  async startHunting() {
    const clients = await this.clients()
    if (!clients.length) return
    const urls = await this.rivenQueryService.find({})
    for (const url of urls) {
      const rivenMods = await this.huntOnce(url)
      if (rivenMods.length) {
        this.server.emit("rivens", {rivenMods, url})
      }
    }
  }
}

@Module({
  imports: [RivenListModule, PQueueModule, MarketUrlModule],
  providers: [RivenHunterService],
  exports: [RivenHunterService]
})
export class RivenHunterModule {}

