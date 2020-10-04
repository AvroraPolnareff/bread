import {createConnection} from "typeorm";
import {Module} from "@nestjs/common";
import {RivenList, rivenListProviders, RivenListService} from "./RivenList";
import {consts} from "../common/const";
import {MarketUrl, marketUrlProviders, MarketUrlService} from "./MarketUrl";


export const databaseProviders = [
  {
    provide: consts.DATABASE_CONNECTION,
    useFactory: async () => await createConnection({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [
        MarketUrl, RivenList
      ],
      synchronize: true,
    }),
  },
];

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders]
})
export class DatabaseModule {}

@Module({
  imports: [DatabaseModule],
  providers: [...rivenListProviders, RivenListService],

})
export class RivenListModule {}

@Module({
  imports: [DatabaseModule],
  providers: [...marketUrlProviders, MarketUrlService]
})
export class MarketUrlModule {}
