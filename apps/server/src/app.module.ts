import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ServeStaticModule} from "@nestjs/serve-static";
import {resolve} from "path";
import {ApiModule} from './api/api.module';
import {RouterModule, Routes} from "nest-router";
import {RivenHunterModule} from "./features/RivenHunter";
import {MarketUrl} from "./database/MarketUrl";
import {ScheduleModule} from "@nestjs/schedule";
import {TypeOrmModule} from "@nestjs/typeorm";
import {RivenList} from "./database/RivenList";
import {config} from "dotenv";
import {Prey} from "./database/Prey";
import {UserTrackerModule} from "./features/UserTracker";

config()

const routes: Routes = [
  {
    path: '/api/v1',
    module: ApiModule
  }
]

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: resolve("../front/build")
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [
        MarketUrl, RivenList, Prey
      ],
      synchronize: true,
    }),
    RouterModule.forRoutes(routes),
    ApiModule,
    RivenHunterModule,
    UserTrackerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
