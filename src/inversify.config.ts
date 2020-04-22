import {Container} from "inversify";
import TYPES from "./types/types";
import {TimerStorage, TimerStorageImpl} from "./storages/TimerStorage";
import {CommandLoader, CommandLoaderImpl} from "./commands/CommandLoader";

import {PromiseQueue, PromiseQueueImpl} from "./promiseQueue/promiseQueue";
import PQueue from "p-queue";

const container = new Container()

container.bind<TimerStorage>(TYPES.TimerStorage).to(TimerStorageImpl).inSingletonScope()
container.bind<CommandLoader>(TYPES.CommandLoader).to(CommandLoaderImpl).inSingletonScope()
container.bind<PQueue>(TYPES.PQueue).toConstantValue(new PQueue({concurrency: 1}))


export default container
