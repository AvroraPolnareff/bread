import {Injectable, Module} from "@nestjs/common";
import PQueue from "p-queue";

@Module({
  providers: [PQueueService]
})

@Injectable()
export class PQueueService {
  private readonly promiseQueue: PQueue

  constructor() {
    this.promiseQueue = new PQueue({interval: 300, concurrency: 1});
  }

  async add<TaskResultType>(fn: () => PromiseLike<TaskResultType>): Promise<TaskResultType> {
    return await this.promiseQueue.add(fn)
  }
}
