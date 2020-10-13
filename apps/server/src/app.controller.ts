import {Controller, Get, Req, Res} from '@nestjs/common';
import {Request, Response} from "express"
import {AppService} from './app.service';
import * as url from "url";
import {DiscordService} from "./features/Discord/discord.service";
import {BreadUserService} from "./database/BreadUser";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly discordService: DiscordService,
    private readonly breadUserService: BreadUserService,
  ) {}

  @Get('/hello/')
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * Discord Authentication callback from api
   */
  @Get('/callback')
  async getCallback(@Req() req: Request, @Res() res: Response) {
    const urlObj = url.parse(req.url, true);
    const code = urlObj.query.code
    if (code) {
      req.session.discordAuth = await this.discordService.fetchAuthToken(code as string)
      req.session.discordUser = await this.discordService.fetchUser(req.session.discordAuth)
    }
    const discordUser = req.session.discordUser
    const user = await this.breadUserService.findOne({userId: discordUser.id})
    if (!user) {
      req.session.breadUser = await this.breadUserService.add({
        userId: discordUser.id,
        email: discordUser.email,
        newUser: true
      })
    }
    req.session.breadUser = user
    return res.redirect("/")
  }

}
