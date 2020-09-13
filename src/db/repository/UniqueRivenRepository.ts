import {EntityRepository, Repository} from "typeorm";
import {UniqueRiven} from "../entity/UniqueRiven";
import {Riven} from "../../structures/Riven";
import * as _ from "lodash"
import {Auction} from "../../features/RivenHunter";
import {auctionDifference} from "../../fuctions/getNewRivenMods";

@EntityRepository(UniqueRiven)
export class UniqueRivenRepository extends Repository<UniqueRiven> {

    async getUniqueRivens(rivenList: Auction[], url) {

        const oldRivenEntities = await this.find({url: url})
        const oldRivenList = oldRivenEntities.map(entity => JSON.parse(entity.riven))

        if (oldRivenList.length) {
            const difference = _.differenceWith(rivenList, oldRivenList, auctionDifference)

            for (let riven of difference) {
                let entity = new UniqueRiven()
                entity.riven = JSON.stringify(riven)
                entity.url = url
                await this.save(entity)
            }
            return difference

        } else {
            return rivenList
        }

    }

}
