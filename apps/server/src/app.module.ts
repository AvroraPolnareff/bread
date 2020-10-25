import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ServeStaticModule} from "@nestjs/serve-static";
import {resolve} from "path";
import {ApiModule} from './api/api.module';
import {RouterModule, Routes} from "nest-router";
import {RivenHunterModule} from "./features/RivenHunter";
import {RivenQuery} from "./database/RivenQuery";
import {ScheduleModule} from "@nestjs/schedule";
import {TypeOrmModule} from "@nestjs/typeorm";
import {RivenList} from "./database/RivenList";
import {config} from "dotenv";
import {Prey} from "./database/Prey";
import {UserTrackerModule} from "./features/UserTracker";
import {SessionModule} from "nestjs-session";
import {DiscordModule} from "./features/Discord/discord.module";
import {BreadUserModule} from "./database";
import {BreadUser} from "./database/BreadUser";

config()

const routes: Routes = [
  {
    path: '/api/v1',
    module: ApiModule
  }
]

@Module({
  imports: [
    SessionModule.forRoot({
      session: {secret: "secret"}
    }),
    ScheduleModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: resolve("../front/build")
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [
        RivenQuery, RivenList, Prey, BreadUser
      ],
      synchronize: true,
    }),
    RouterModule.forRoutes(routes),
    ApiModule,
    RivenHunterModule,
    UserTrackerModule,
    DiscordModule,
    BreadUserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
