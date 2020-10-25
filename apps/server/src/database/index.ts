import {Module} from "@nestjs/common";
import {RivenQuery,  RivenQueryService} from "./RivenQuery";
import {TypeOrmModule} from "@nestjs/typeorm";
import {RivenListRepository} from "./RivenListRepository";
import {RivenSearchService} from "./riven-search.service";
import {BreadUser, BreadUserService} from "./BreadUser";

@Module({
  imports: [TypeOrmModule.forFeature([RivenQuery])],
  providers: [RivenQueryService],
  exports: [RivenQueryService]
})
export class MarketUrlModule {}

@Module({
  imports: [TypeOrmModule.forFeature([RivenListRepository])],
  providers: [RivenSearchService],
  exports: [RivenSearchService]
})
export class RivenListModule {}

@Module({
  imports: [TypeOrmModule.forFeature([BreadUser])],
  providers: [BreadUserService],
  exports: [BreadUserService]
})
export class BreadUserModule {}

