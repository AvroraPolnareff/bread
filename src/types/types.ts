import {LaughingBreadEmoji} from "../LaughingBreadEmoji";

let TYPES = {
    BaseCommand: Symbol.for("BaseCommand"),
    CommandDispatcher: Symbol.for('CommandHandler'),
    PQueue: Symbol.for('PQueue'),
    Logger: Symbol.for('Logger'),
    logglyToken: Symbol.for('logglyToken'),
    logglyDomain: Symbol.for('logglyDomain'),
    LaughingBreadEmoji: Symbol.for('LaughingBreadEmoji'),
    clientConfig: Symbol.for('clientConfig')
}

export default TYPES
