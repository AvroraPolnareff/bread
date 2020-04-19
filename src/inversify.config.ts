import {Container} from "inversify";
import TYPES from "./types/types";
import {TimerStorage, TimerStorageImpl} from "./storages/TimerStorage";
import {CommandLoader, CommandLoaderImpl} from "./commands/commandList";

const container = new Container()

container.bind<TimerStorage>(TYPES.TimerStorage).to(TimerStorageImpl).inSingletonScope()
container.bind<CommandLoader>(TYPES.CommandLoader).to(CommandLoaderImpl)

export default container
