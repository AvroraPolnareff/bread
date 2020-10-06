import {BaseClient, Client, ClientOptions, Message} from "discord.js";
import {Logger} from "./utility/Logger";
import {CommandDispatcher} from "./commands/CommandDispatcher";
import {MarketUrl} from "./db/entity/MarketUrl";
import PQueue from "p-queue";
import {decorate, inject, injectable} from "inversify";
import TYPES from "./types/types";
import {EventEmitter} from "events";
import {Auction, Bid, Profile} from "@bread/wf-market"
import {connect} from 'socket.io-client'
import Socket = SocketIOClient.Socket;
import {fetchChannel} from "./functions/fetchChannel";
import Axios from "axios";
import {makeEmbed} from "./functions/embed";
import {PreyDto} from "@bread/shared";

decorate(injectable(), Client)
decorate(injectable(), BaseClient)
decorate(injectable(), EventEmitter)

type RivenHunterType = {rivenMods: {auction: Auction, bids: Bid[]}[], url: MarketUrl}

@injectable()
export class LaughingBreadEmoji extends Client {
  private readonly rivenHunterSocket: Socket
  private readonly userTrackerSocket: Socket
  constructor(
    @inject(TYPES.Logger) private logger: Logger,
    @inject(TYPES.PQueue) private promiseQueue: PQueue,
    @inject(TYPES.CommandDispatcher) private commandDispatcher: CommandDispatcher,
    @inject(TYPES.clientConfig) options?: ClientOptions
  ) {
    super(options);
    this.rivenHunterSocket = connect('ws://localhost:3000/rivenhunter')
    this.userTrackerSocket = connect('ws://localhost:3000/usertracker')

    this.initClient()
  }

  private initClient = () => {
    this.promiseQueue.on('active', () => {
      this.logger.debug(`Working on item.  Size: ${this.promiseQueue.size}  Pending: ${this.promiseQueue.pending}`);
    })

    this.on('ready', async () => {
      this.logger.info(`Logged in as ${this.user.tag}!`)
      const admins = process.env.ADMIN_ID.split(',')
      for (let adminId of admins) {
        const admin = await this.users.fetch(adminId)
        await admin.send(`Logged in as ${this.user.tag}!`)
      }

      this.rivenHunterSocket.on("rivens", async (rivens: RivenHunterType) => {
        const {userId, guildId, channelId, id} = rivens.url
        const channel = await fetchChannel(userId, guildId, channelId, this)
        if (!channel) {
          return await Axios.delete(`http://localhost:3000/api/v1/rivenhunter/${id}`)
        }
        const embeds = rivens.rivenMods.map(mod => makeEmbed(mod.auction, mod.bids))
        for (const embed of embeds) {
          await channel.send(embed)
        }
      })
      this.userTrackerSocket.on("usertracker",async (prey: {profile: Profile, prey: PreyDto}) => {
        const {userId, guildId, channelId, id} = prey.prey
        const channel = await fetchChannel(userId, guildId, channelId, this)
        if (!channel) {
          return await Axios.delete(`http://localhost:3000/api/v1/usertracker/${id}`)
        }
        if (prey.profile.status === "offline") {
          await channel.send(`<@${prey.prey.userId}>, ${prey.prey.nickname} just went **OFFLINE** on Warframe Market.`)
        } else if (prey.profile.status === "online") {
          await channel.send(`<@${prey.prey.userId}>, ${prey.prey.nickname} is currently **ONLINE** on Warframe Market!`)
        } else {
          await channel.send(`<@${prey.prey.userId}>, ${prey.prey.nickname} is currently **ONLINE IN GAME** on Warframe Market!`)
        }
      })
    })

    this.on('message', async (msg: Message) => {
      await this.commandDispatcher.run(msg)
    })
  }
}




