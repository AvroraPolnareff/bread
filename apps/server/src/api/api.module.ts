import { Module } from '@nestjs/common';
import {RivenHunterController} from "./rivenhunter.controller";
import {MarketUrlModule} from "../database";
import {UserTrackerController} from "./usertracker.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Prey} from "../database/Prey";

@Module({
  imports: [MarketUrlModule, TypeOrmModule.forFeature([Prey])],
  controllers: [RivenHunterController, UserTrackerController],
})
export class ApiModule {}
