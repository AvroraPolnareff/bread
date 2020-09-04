import {injectable} from "inversify";
import Timeout = NodeJS.Timeout;

@injectable()
export class TimerStorageImpl implements TimerStorage {

    timers: Timer[] = []

    add (timer: Timeout, userId: string) {
        this.timers.push({timer, userId})
    }

    getAll () : Timer[] {
        return this.timers
    }

    stopAllUserTimers(userId: string): void {
        const timers = this.timers.filter(value => value.userId === userId)
        for (let timer of timers) {
            if (timer.userId === userId) {
                clearInterval(timer.timer)
            }
        }


    }
}


export interface TimerStorage {
    timers: Timer[]

    add (timer: Timeout, userId: string, category: TimerCategory, snowflake?: string) : void

    getAll() : Timer[]

    stopAllUserTimers(userId: string): void
}


export interface Timer {
    timer: Timeout
    userId: string
}
