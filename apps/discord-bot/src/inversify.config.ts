import "reflect-metadata"
import {Container} from "inversify";
import TYPES from "./types/types";
import {CommandDispatcher, CommandDispatcherImpl} from "./commands/CommandDispatcher";
import PQueue from "p-queue";
import {Logger} from "./utility/Logger";
import {config} from 'dotenv'
import {LogglyLogger} from "./utility/LogglyLogger";
import {ConsoleLogger} from "./utility/ConsoleLogger";
import {LaughingBreadEmoji} from "./LaughingBreadEmoji";
config()

const container = new Container()

container.bind(TYPES.clientConfig).toConstantValue({})
if (process.env.LOGGLY_TOKEN && process.env.LOGGLY_DOMAIN) {
    container.bind(TYPES.logglyToken).toConstantValue(process.env.LOGGLY_TOKEN)
    container.bind(TYPES.logglyDomain).toConstantValue(process.env.LOGGLY_DOMAIN)
    container.bind<Logger>(TYPES.Logger).to(LogglyLogger)
} else {
    container.bind<Logger>(TYPES.Logger).to(ConsoleLogger)
}
container.bind<CommandDispatcher>(TYPES.CommandDispatcher).to(CommandDispatcherImpl)
container.bind<PQueue>(TYPES.PQueue).toConstantValue(new PQueue({concurrency: 1}))

container.bind<LaughingBreadEmoji>(TYPES.LaughingBreadEmoji).to(LaughingBreadEmoji)




export default container
