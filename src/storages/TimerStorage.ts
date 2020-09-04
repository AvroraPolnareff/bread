import {injectable} from "inversify";
import Timeout = NodeJS.Timeout;

export enum TimerCategory {
    riven = "riven",
    user = "user"
}

@injectable()
export class TimerStorageImpl implements TimerStorage {

    timers: Timer[] = []

    add (timer: Timeout, userId: string, category: TimerCategory, snowflake?: string) {
        this.timers.push({timer, userId, category, snowflake})
    }

    getAll () : Timer[] {
        return this.timers
    }

    stopTimers(userId?: string, category?: TimerCategory, snowflake?: string) {
        const timers = this.timers.filter(timer => timer.userId === userId || category === timer.category || snowflake === timer.snowflake)
        for (let timer of timers) {
            if (timer.userId === userId) {
                clearInterval(timer.timer)
            }
        }
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

    stopTimers(userId?: string, category?: TimerCategory, snowflake?: string) : void

    stopAllUserTimers(userId: string): void
}


export interface Timer {
    timer: Timeout,
    userId: string,
    category: TimerCategory,
    snowflake?: string
}
