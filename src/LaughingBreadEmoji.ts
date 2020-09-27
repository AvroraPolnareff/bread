import {BaseClient, Client, ClientOptions, Message} from "discord.js";
import {Logger} from "./utility/Logger";
import {CommandDispatcher} from "./commands/CommandDispatcher";
import {BreadUser as UserEntity} from "./db/entity/BreadUser";
import {MarketUrl} from "./db/entity/MarketUrl";
import PQueue from "p-queue";
import {getRepository} from "typeorm";
import {decorate, inject, injectable} from "inversify";
import TYPES from "./types/types";
import {EventEmitter} from "events";
import {Prey} from "./db/entity/Prey";
import {RivenHunter} from "./features/RivenHunter";
import {makeEmbed} from "./functions/embed";
import {UserTracker} from "./features/UserTracker";

decorate(injectable(), Client)
decorate(injectable(), BaseClient)
decorate(injectable(), EventEmitter)

@injectable()
export class LaughingBreadEmoji extends Client {
  constructor(
    @inject(TYPES.Logger) private logger: Logger,
    @inject(TYPES.PQueue) private promiseQueue: PQueue,
    @inject(TYPES.CommandDispatcher) private commandDispatcher: CommandDispatcher,
    @inject(TYPES.clientConfig) options?: ClientOptions
  ) {
    super(options);
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

      const userRepository = getRepository(UserEntity)
      const urlRepository = getRepository(MarketUrl)
      const preyRepository = getRepository(Prey)
      const userEntities = await userRepository.find()

      for (let {userId} of userEntities) {
        const user = await this.users.fetch(userId)
        let preys = await preyRepository.find({userId: userId})

        for (const prey of preys) {
          const userTracker = new UserTracker(userId, this.promiseQueue, this)
          await userTracker.startTracking(prey, async (profile, channel) => {
            if (profile.status === "offline") {
              await channel.send(`<@${prey.userId}>, ${prey.nickname} just went **OFFLINE** on Warframe Market.`)
            } else if (profile.status === "online") {
              await channel.send(`<@${prey.userId}>, ${prey.nickname} is currently **ONLINE** on Warframe Market!`)
            } else {
              await channel.send(`<@${prey.userId}>, ${prey.nickname} is currently **ONLINE IN GAME** on Warframe Market!`)
            }
          })
        }

        const urlEntities = await urlRepository.find({userId})
        for (let urlEntity of urlEntities) {
          const rivenHunter = new RivenHunter(user.id, this.promiseQueue)
          await rivenHunter.startHunting(urlEntity, this, async (rivenMods, channel) => {
            const embeds = rivenMods.map(mod => makeEmbed(mod.auction, mod.bids))
            for (const embed of embeds) {
              await channel.send(`<@${userId}>`, embed)
            }
          })
        }
      }
    })

    this.on('message', async (msg: Message) => {
      await this.commandDispatcher.run(msg)
    })
  }
}




