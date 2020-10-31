import { Module } from '@nestjs/common';
import {RivenHunterController} from "./rivenhunter.controller";
import {BreadUserModule, Prey, RivenQueryModule} from "../database";
import {UserTrackerController} from "./usertracker.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {RolesGuardModule} from "../guards/roles-guard";
import {DiscordModule} from "../features/Discord/discord.module";
import {UsersController} from "./users.controller";
import {RivenHunterModule} from "../features/RivenHunter";

@Module({
  imports: [
    TypeOrmModule.forFeature([Prey]),
    RivenHunterModule,
    RivenQueryModule,
    RolesGuardModule,
    DiscordModule,
    BreadUserModule
  ],
  controllers: [RivenHunterController, UserTrackerController, UsersController],
})
export class ApiModule {}
