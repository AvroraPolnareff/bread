import "reflect-metadata"
import {LaughingBreadEmoji} from "./LaughingBreadEmoji";
import {Message, MessageEmbed} from "discord.js"
import {getRepository} from "typeorm";
import {BreadUser as UserEntity} from "./db/entity/BreadUser"
import {MarketUrl} from "./db/entity/MarketUrl";
import {huntRivensOnce} from "./fuctions/huntRivensOnce";
import {parseUrlQuery} from "./fuctions/parseUrlQuery";
import {Logger} from "./utility/Logger";


export const app = async (logger: Logger, promiseQueue, commandDispatcher, timerStorage) => {
    const client = new LaughingBreadEmoji({})

    promiseQueue.on('active', () => {
        logger.debug(`Working on item.  Size: ${promiseQueue.size}  Pending: ${promiseQueue.pending}`);
    })

    client.on('ready', async () => {
        logger.info(`Logged in as ${client.user.tag}!`)
        const admins = process.env.ADMIN_ID.split(',')
        for (let adminId of admins) {
            const admin = await client.users.fetch(adminId)
            await admin.send(`Logged in as ${client.user.tag}!`)
        }

        const userRepository = getRepository(UserEntity)
        const urlRepository = getRepository(MarketUrl)
        const userEntities = await userRepository.find()

        for (let {isHunting, userId} of userEntities) {
            if (isHunting) {
                const user = await client.users.fetch(userId)
                const urlEntities = await urlRepository.find({userId})

                for (let {url, platinumLimit, updateFrequency} of urlEntities) {
                    const timer = setInterval(async () => {
                        try {
                            const embeds = await promiseQueue.add(async () => await huntRivensOnce(url, platinumLimit))
                            for (let embed of embeds) {
                                await user.send(parseUrlQuery(url), {embed})
                            }
                        } catch (e) {
                            logger.error(e)
                            let embed = new MessageEmbed()
                            embed.addField("Error...", e.message)
                            await user.send(embed)
                        }
                    }, updateFrequency)

                    timerStorage.add(timer, userId)
                }
            }
        }
    })

    client.on('message', async (msg: Message) => {
        await commandDispatcher.run(msg)
    })

    await client.login(process.env.DISCORD_TOKEN)
}

