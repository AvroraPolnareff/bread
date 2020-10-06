import "reflect-metadata"
import {Logger} from "./utility/Logger";
import container from "./inversify.config";
import TYPES from "./types/types";
import {createConnection} from "typeorm";
import {config} from 'dotenv'
import {LaughingBreadEmoji} from "./LaughingBreadEmoji";
import connection from "../ormconfig"
config()

const logger = container.get<Logger>(TYPES.Logger)
const laughingBreadEmoji = container.get<LaughingBreadEmoji>(TYPES.LaughingBreadEmoji)

createConnection(connection).then(async () => {
    laughingBreadEmoji.login(process.env.DISCORD_TOKEN)
        .catch((e) => {
            logger.error(e)
        })

}).catch(e => logger.error(e))



