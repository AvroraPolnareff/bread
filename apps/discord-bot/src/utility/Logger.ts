export interface Logger {
    info(message: string): void

    debug(message: string): void

    warn(message: string): void

    error(error: Error, message?: string): void
}