import {DiscordAuth, DiscordUser} from "../features/Discord/discord.service";
import {BreadUser} from "../database/BreadUser";

export interface UserSession {
  discordAuth?: DiscordAuth,
  discordUser?: DiscordUser,
  breadUser?: BreadUser
}
