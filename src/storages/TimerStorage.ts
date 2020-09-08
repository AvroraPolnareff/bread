import {injectable} from "inversify";
import Timeout = NodeJS.Timeout;

export enum TimerCategory {
    riven = "riven",
    user = "user"
}

@injectable()
export class TimerStorageImpl implements TimerStorage {

    timers: Timer[] = []

    add(timer: Timeout, userId: string, category: TimerCategory, snowflake?: string) {
        this.timers.push({timer, userId, category, snowflake})
    }

    getAll(): Timer[] {
        return this.timers
    }

    stopTimers({userId, category, snowflake}) {
        const timers = this.timers.filter(timer => timer.userId === userId || category === timer.category || snowflake === timer.snowflake)
        for (let timer of timers) {
            clearInterval(timer.timer)
            this.timers = this.timers.filter(el => el.snowflake !== timer.snowflake && el.userId !== timer.userId)
        }

    }

    stopAllUserTimers(userId: string): void {
        const timers = this.timers.filter(value => value.userId === userId)
        for (let timer of timers) {
            if (timer.userId === userId) {
                clearInterval(timer.timer)
                this.timers = this.timers.filter(el => el.userId !== timer.userId)
            }
        }


    }
}


export interface TimerStorage {
    timers: Timer[]

    add(timer: Timeout, userId: string, category: TimerCategory, snowflake?: string): void

    getAll(): Timer[]

    stopTimers(parameters: TimerParameters): void

    stopAllUserTimers(userId: string): void
}

export interface TimerParameters {
    userId?: string,
    category?: TimerCategory,
    snowflake?: string
}

export interface Timer {
    timer: Timeout,
    userId: string,
    category: TimerCategory,
    snowflake?: string
}
