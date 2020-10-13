import {DiscordAuth, DiscordUser} from "../features/Discord/discord.service";
import {BreadUser} from "../database/BreadUser";

export interface Session {
  discordAuth?: DiscordAuth,
  discordUser?: DiscordUser,
  breadUser?: BreadUser
}
