import {Container} from "inversify";
import TYPES from "./types/types";
import {TimerStorage, TimerStorageImpl} from "./storages/TimerStorage";
import {CommandHandler, CommandHandlerImpl} from "./commands/CommandHandler";
import PQueue from "p-queue";
import {Logger, LogglyLogger} from "./utility/Logger";
import {config} from 'dotenv'
config()

const container = new Container()

container.bind<TimerStorage>(TYPES.TimerStorage).to(TimerStorageImpl).inSingletonScope()
container.bind<CommandHandler>(TYPES.CommandHandler).to(CommandHandlerImpl).inSingletonScope()
container.bind<PQueue>(TYPES.PQueue).toConstantValue(new PQueue({concurrency: 1}))
container.bind(TYPES.logglyToken).toConstantValue(process.env.LOGGLY_TOKEN)
container.bind(TYPES.logglyDomain).toConstantValue(process.env.LOGGLY_DOMAIN)
container.bind<Logger>(TYPES.Logger).to(LogglyLogger).inSingletonScope()

export default container
