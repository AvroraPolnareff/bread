import {injectable} from "inversify";
import Timeout = NodeJS.Timeout;

@injectable()
export class TimerStorageImpl implements TimerStorage {
    constructor() {
        this.timers = []
    }

    timers: Timer[]

    add (timer: Timeout, userId: string) {
        this.timers.push({timer, userId})
    }

    getAll () : Timer[] {
        return this.timers
    }

    stopAllUserTimers(userId: string): void {
        for (let timer of this.timers) {
            if (timer.userId === userId) {
                clearInterval(timer.timer)
            }
        }
        this.timers = this.timers.filter(value => value.userId !== userId)

    }
}


export interface TimerStorage {
    timers: Timer[]

    add (timer: Timeout, userId: string) : void

    getAll() : Timer[]

    stopAllUserTimers(userId: string): void
}


export interface Timer {
    timer: Timeout
    userId: string
}
