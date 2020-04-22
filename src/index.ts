import "reflect-metadata"
import {LaughingBreadEmoji} from "./LaughingBreadEmoji";
import {Message, MessageEmbed} from "discord.js"
import {ConnectionOptions, createConnection, getRepository} from "typeorm";
import { CommandLoader} from "./commands/CommandLoader";
import {BreadUser as UserEntity} from "./db/entity/BreadUser"
import {TimerStorage} from "./storages/TimerStorage";
import {MarketUrl} from "./db/entity/MarketUrl";
import {huntRivensOnce} from "./util/huntRivensOnce";
import {parseUrlQuery} from "./util/parseUrlQuery";
import container from "./inversify.config";
import TYPES from "./types/types";
import * as path from "path";
import {config} from 'dotenv'
import PQueue from "p-queue";
config()

const configdb :ConnectionOptions = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true,
    "entities": [
        path.join(__dirname, "/db/entity/**/*{.ts,.js}")
    ]
}
// const configdb :ConnectionOptions = {
//     type: "postgres",
//     database: 'bread',
//     host: 'localhost',
//     username: 'avrora',
//     password: '1234',
//     port: 5432,
//     synchronize: true,
//     "entities": [
//         path.join(__dirname, "/db/entity/**/*{.ts,.js}")
//     ]
// }


const main = async () => {
    const client = new LaughingBreadEmoji({})
    await createConnection(configdb as ConnectionOptions)
    const timerStorage = container.get<TimerStorage>(TYPES.TimerStorage)
    const commandsLoader = container.get<CommandLoader>(TYPES.CommandLoader)
    const promiseQueue = container.get<PQueue>(TYPES.PQueue)

    promiseQueue.on('active', () => {
        console.log(`Working on item.  Size: ${promiseQueue.size}  Pending: ${promiseQueue.pending}`);
    })


    client.on('ready', async () => {
        console.log(`Logged in as ${client.user.tag}!`)
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
                            console.log(e)
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
        await commandsLoader.run(msg)
    })

    await client.login(process.env.DISCORD_TOKEN)
}

main()
