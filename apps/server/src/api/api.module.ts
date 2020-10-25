import { Module } from '@nestjs/common';
import {RivenHunterController} from "./rivenhunter.controller";
import {BreadUserModule, MarketUrlModule} from "../database";
import {UserTrackerController} from "./usertracker.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Prey} from "../database/Prey";
import {RolesGuardModule} from "../guards/roles-guard";
import {DiscordModule} from "../features/Discord/discord.module";
import {UsersController} from "./users.controller";


@Module({
  imports: [
    MarketUrlModule,
    TypeOrmModule.forFeature([Prey]),
    RolesGuardModule,
    DiscordModule,
    BreadUserModule
  ],
  controllers: [RivenHunterController, UserTrackerController, UsersController],
})
export class ApiModule {}
