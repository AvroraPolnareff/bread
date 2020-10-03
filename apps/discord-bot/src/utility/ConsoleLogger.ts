import {Logger} from "./Logger";
import {injectable} from "inversify";

@injectable()
export class ConsoleLogger implements Logger {
    debug(message: string): void {
        console.log(message)
    }

    error(error: Error, message?: string): void {
        console.error(error, message)
    }

    info(message: string): void {
        console.info(message)
    }

    warn(message: string): void {
        console.warn(message)
    }

}