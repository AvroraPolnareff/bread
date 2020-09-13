import {EntityRepository, Repository} from "typeorm";
import {RivenList} from "../entity/RivenList";
import {Riven} from "../../structures/Riven";
import {Auction} from "../../features/RivenHunter";

@EntityRepository(RivenList)
export class RivenListRepository extends Repository<RivenList> {
    async findRivenListByUrl(url: string): Promise<Auction[]> {
        const entity = await this.findOne({url: url})
        if (entity) {
            return JSON.parse(entity.rivenList)
        } else {
            return undefined
        }
    }


    async saveRivenList(rivenList: Auction[], url: string) {
        const stringified = JSON.stringify(rivenList)
        const oldList = await this.findOne({url: url})
        if (oldList) {
            await this.delete(oldList.id)
        }
        const newList = new RivenList()
        newList.url = url
        newList.rivenList = stringified
        return this.save(newList)
    }
}
