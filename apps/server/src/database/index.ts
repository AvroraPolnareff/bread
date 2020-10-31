import {Module} from "@nestjs/common";
import {RivenQuery,  RivenQueryService} from "./entities/RivenQuery";
import {TypeOrmModule} from "@nestjs/typeorm";
import {BreadUser, BreadUserService} from "./entities/BreadUser";
import {Prey} from "./entities/Prey";


@Module({
  imports: [TypeOrmModule.forFeature([BreadUser])],
  providers: [BreadUserService],
  exports: [BreadUserService]
})
export class BreadUserModule {}

@Module({
  imports: [TypeOrmModule.forFeature([RivenQuery])],
  providers: [RivenQueryService],
  exports: [RivenQueryService]
})
export class RivenQueryModule {}

export {
  RivenQueryService,
  BreadUserService,
  BreadUser,
  RivenQuery,
  Prey
}
