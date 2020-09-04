import {Status} from "../db/entity/Prey";

export interface MarketUser {
    nickname: string,
    url: string,
    status: Status
}