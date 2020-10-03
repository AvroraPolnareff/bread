import PQueue from 'p-queue'
import {injectable} from "inversify";
declare type Task<TaskResultType> = (() => PromiseLike<TaskResultType>) | (() => TaskResultType);

export interface PromiseQueue {
    add<TaskResultType>(fn: Task<TaskResultType>, options?: Partial<any>): Promise<TaskResultType>
}


@injectable()
export class PromiseQueueImpl extends PQueue implements PromiseQueue {
    constructor() {
        super({concurrency: 1});
        this.on('active', () => {
            console.log(`Working on item.  Size: ${this.size}  Pending: ${this.pending}`);
        })
    }
}

