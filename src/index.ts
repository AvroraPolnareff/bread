import {app} from './app'
import {Logger} from "./utility/Logger";
import container from "./inversify.config";
import {TimerStorage} from "./storages/TimerStorage";
import TYPES from "./types/types";
import {CommandHandler} from "./commands/CommandHandler";
import PQueue from "p-queue";
import {ConnectionOptions, createConnection} from "typeorm";
import * as path from "path";
import {config} from 'dotenv'
config()


const timerStorage = container.get<TimerStorage>(TYPES.TimerStorage)
const commandsLoader = container.get<CommandHandler>(TYPES.CommandHandler)
const promiseQueue = container.get<PQueue>(TYPES.PQueue)
const logger = container.get<Logger>(TYPES.Logger)
const configdb :ConnectionOptions = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true,
    "entities": [
        path.join(__dirname, "/db/entity/**/*{.ts,.js}")
    ]
};
createConnection(configdb as ConnectionOptions).then(()=> {
        app(logger, promiseQueue, commandsLoader, timerStorage)
            .catch((e) => {
                logger.error(e)
            })
    }).catch(e => logger.error(e))



