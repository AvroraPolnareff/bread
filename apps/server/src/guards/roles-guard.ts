import {CanActivate, ExecutionContext, Injectable, Module, SetMetadata} from "@nestjs/common";
import {Request} from "express";
import {DiscordService} from "../features/Discord/discord.service";
import {Reflector} from "@nestjs/core";
import {DiscordModule} from "../features/Discord/discord.module";

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(
    private readonly discordService: DiscordService,
    private reflector: Reflector
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler())
    if (!roles) {
      return true
    }
    return roles.some(role => (
      ((role === 'bot') && this.isBot(context))
      || ((role === 'user') && this.isUser(context)))
    )
  }

  isBot(context: ExecutionContext) {
    const botAuth = context.switchToHttp().getRequest<Request>().headers["bot-auth"]
    if (botAuth) {
      if (botAuth.toString() === process.env.BOT_SECRET) {
        return true
      }
    }
    return false
  }

  async isUser(context: ExecutionContext) {
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

export const Roles = (...roles: string[]) => SetMetadata('roles', roles)

@Module({
  imports: [DiscordModule],
  providers: [RolesGuard],
  exports: [RolesGuard]
})
export class RolesGuardModule {}
