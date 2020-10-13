import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Request} from "express";
import {DiscordService} from "../features/Discord/discord.service";


@Injectable()
export class DiscordGuard implements CanActivate {
  constructor(
    private discordService: DiscordService
  ) {}

  async canActivate(
    context: ExecutionContext
  ) : Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request>()
    const discordAuth = req.session.discordAuth
    if (discordAuth) {
      if (discordAuth.expires_in < Date.now()) return true
      else {
        try {
          req.session.discordAuth = await this.discordService.fetchRefreshToken(discordAuth.refresh_token)
          return true
        } catch (error) {
          return false
        }
      }
    }
    return false
  }
}
