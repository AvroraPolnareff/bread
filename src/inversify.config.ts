import {Container} from "inversify";
import TYPES from "./types/types";
import {TimerStorage, TimerStorageImpl} from "./storages/TimerStorage";
import {CommandDispatcher, CommandDispatcherImpl} from "./commands/CommandDispatcher";
import PQueue from "p-queue";
import {Logger} from "./utility/Logger";
import {config} from 'dotenv'
import {LogglyLogger} from "./utility/LogglyLogger";
import {ConsoleLogger} from "./utility/ConsoleLogger";
config()

const container = new Container()

container.bind<TimerStorage>(TYPES.TimerStorage).to(TimerStorageImpl).inSingletonScope()
container.bind<CommandDispatcher>(TYPES.CommandHandler).to(CommandDispatcherImpl).inSingletonScope()
container.bind<PQueue>(TYPES.PQueue).toConstantValue(new PQueue({concurrency: 1}))
if (process.env.LOGGLY_TOKEN && process.env.LOGGLY_DOMAIN) {
    container.bind(TYPES.logglyToken).toConstantValue(process.env.LOGGLY_TOKEN)
    container.bind(TYPES.logglyDomain).toConstantValue(process.env.LOGGLY_DOMAIN)
    container.bind<Logger>(TYPES.Logger).to(LogglyLogger).inSingletonScope()
} else {
    container.bind<Logger>(TYPES.Logger).to(ConsoleLogger).inSingletonScope()
}



export default container
