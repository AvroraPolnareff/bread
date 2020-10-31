import {DiscordAuth, DiscordUser} from "../features/Discord/discord.service";
import {BreadUser} from "../database";

export interface UserSession {
  discordAuth?: DiscordAuth,
  discordUser?: DiscordUser,
  breadUser?: BreadUser
}
