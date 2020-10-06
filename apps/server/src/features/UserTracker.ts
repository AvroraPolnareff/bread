import {Injectable, Module} from "@nestjs/common";
import {WebSocketGateway, WebSocketServer} from "@nestjs/websockets";
import {PQueueModule, PQueueService} from "./PromiseQueue";
import {Repository} from "typeorm";
import {Prey} from "../database/Prey";
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {Server, Socket} from "socket.io";
import {PreyDto} from "@bread/shared";
import {Profile, WfMarketAPI} from "@bread/wf-market";
import {Cron} from "@nestjs/schedule";

@Injectable()
@WebSocketGateway({namespace: "usertracker"})
export class UserTrackerService {
  constructor(
    private promiseQueue: PQueueService,
    @InjectRepository(Prey)
    private preyRepository: Repository<Prey>
  ) {}

  @WebSocketServer() server: Server

  async trackOnce (preyDto: PreyDto): Promise<Profile> {
    return await this.promiseQueue.add(async () => {
      const api = new WfMarketAPI()
      return await api.profile(preyDto.nickname)
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

  @Cron("*/5 * * * * *")
  async startTracking() {
    const clients = await this.clients()
    if (!clients.length) return

    const preys = await this.preyRepository.find({})
    for (const prey of preys) {
      const profile = await this.trackOnce(prey)
      if (profile.status !== prey.status) {
        await this.preyRepository.update(prey.id, {
          ...prey, status: profile.status, lastLogin: profile.last_seen
        })
        this.server.emit("usertracker", {profile, prey})
      }
    }
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Prey]), PQueueModule],
  providers: [UserTrackerService],
  exports: [UserTrackerService]
})
export class UserTrackerModule {}
