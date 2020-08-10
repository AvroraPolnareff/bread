import "reflect-metadata"
import {Logger} from "./utility/Logger";
import container from "./inversify.config";
import {TimerStorage} from "./storages/TimerStorage";
import TYPES from "./types/types";
import {CommandDispatcher} from "./commands/CommandDispatcher";
import PQueue from "p-queue";
import {ConnectionOptions, createConnection} from "typeorm";
import * as path from "path";
import {config} from 'dotenv'
import {LaughingBreadEmoji} from "./LaughingBreadEmoji";

config()


const timerStorage = container.get<TimerStorage>(TYPES.TimerStorage)
const commandsLoader = container.get<CommandDispatcher>(TYPES.CommandDispatcher)
const promiseQueue = container.get<PQueue>(TYPES.PQueue)
const logger = container.get<Logger>(TYPES.Logger)
const laughingBreadEmoji = container.get<LaughingBreadEmoji>(TYPES.LaughingBreadEmoji)

const configdb: ConnectionOptions = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true,
    "entities": [
        path.join(__dirname, "/db/entity/**/*{.ts,.js}")
    ]
};
createConnection(configdb as ConnectionOptions).then(async () => {
    laughingBreadEmoji.login(process.env.DISCORD_TOKEN)
        .catch((e) => {
            logger.error(e)
        })

}).catch(e => logger.error(e))



