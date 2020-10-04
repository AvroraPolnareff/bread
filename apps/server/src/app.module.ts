import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ServeStaticModule} from "@nestjs/serve-static";
import {resolve} from "path";
import { ApiModule } from './api/api.module';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: resolve("../front/build")
  }), ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
