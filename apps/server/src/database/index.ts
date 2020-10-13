import {Module} from "@nestjs/common";
import {MarketUrl,  MarketUrlService} from "./MarketUrl";
import {TypeOrmModule} from "@nestjs/typeorm";
import {RivenListRepository} from "./RivenListRepository";
import {RivenListService} from "./RivenListService";
import {BreadUser, BreadUserService} from "./BreadUser";

@Module({
  imports: [TypeOrmModule.forFeature([MarketUrl])],
  providers: [MarketUrlService],
  exports: [MarketUrlService]
})
export class MarketUrlModule {}

@Module({
  imports: [TypeOrmModule.forFeature([RivenListRepository])],
  providers: [RivenListService],
  exports: [RivenListService]
})
export class RivenListModule {}

@Module({
  imports: [TypeOrmModule.forFeature([BreadUser])],
  providers: [BreadUserService],
  exports: [BreadUserService]
})
export class BreadUserModule {}

