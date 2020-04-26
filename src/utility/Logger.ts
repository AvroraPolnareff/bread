import {Logger as WinstonLogger, createLogger, transports} from 'winston'
import {Loggly} from 'winston-loggly-bulk'
import {inject, injectable} from "inversify";
import TYPES from "../types/types";


@injectable()
export class LogglyLogger implements Logger {
    readonly #logger: WinstonLogger

    public constructor(
        @inject(TYPES.logglyToken) token: string,
        @inject(TYPES.logglyDomain) logglyDomain: string
    ) {
        this.#logger = createLogger({
            transports: [
                new Loggly({
                    token: token,
                    json: true,
                    subdomain: logglyDomain,
                    tags: ["Bread"],
                    bufferOptions: {size: 1, retriesInMilliseconds: 30000}
                }),
                new transports.Console()
            ]
        })
    }


    public debug(message: string): void {
        this.#logger.log('debug', message)
    }

    public error(error: Error, message?: string): void {
        this.#logger.error(message, error)
    }

    public info(message: string): void {
        this.#logger.log('info', message)
    }

    public warn(message: string): void {
        this.#logger.log('warn', message)
    }

}

export interface Logger {
    info(message: string): void

    debug(message: string): void

    warn(message: string): void

    error(error: Error, message?: string): void
}