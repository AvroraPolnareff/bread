import {Column, Connection, Entity, PrimaryGeneratedColumn, Repository} from "typeorm";
import {consts} from "../common/const";
import {Inject, Injectable} from "@nestjs/common";

@Injectable()
export class MarketUrlService {
  constructor(
    @Inject(consts.MARKET_URL_REPOSITORY)
    private marketUrlRepository: Repository<MarketUrl>
  ) {}


}

export const marketUrlProviders = [
  {
    provide: consts.MARKET_URL_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(MarketUrl),
    inject: [consts.DATABASE_CONNECTION]
  }
]

@Entity()
export class MarketUrl {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  userId: string

  @Column()
  url: string

  @Column()
  platinumLimit: number

  @Column()
  channelId: string

  @Column()
  guildId: string

}
