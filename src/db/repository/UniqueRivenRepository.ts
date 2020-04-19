import {EntityRepository, Repository} from "typeorm";
import {UniqueRiven} from "../entity/UniqueRiven";
import {Riven} from "../../models/Riven";
import * as _ from "lodash"

@EntityRepository(UniqueRiven)
export class UniqueRivenRepository extends Repository<UniqueRiven> {

    async getUniqueRivens(rivenList: Riven[], url) {

        const oldRivenEntities = await this.find({url: url})
        const oldRivenList = oldRivenEntities.map(entity => JSON.parse(entity.riven))

        if (oldRivenList.length) {
            const difference = _.differenceWith(rivenList, oldRivenList, _.isEqual)

            for (let riven of difference) {
                let entity = new UniqueRiven()
                entity.riven = riven
                entity.url = url
                await this.save(entity)
            }
            return difference

        } else {
            return rivenList
        }

    }

}
