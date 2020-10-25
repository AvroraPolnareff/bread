import {Injectable} from "@nestjs/common";
import {Client as DiscordClient} from "discord.js"
import Axios from "axios"
import {config} from "dotenv"

config()

const CLIENT_ID = process.env.DISCORD_ID
const REDIRECT_URL = process.env.REDIRECT_URL
const CLIENT_SECRET = process.env.DISCORD_SECRET
const TOKEN = process.env.DISCORD_TOKEN
const SCOPE = 'identify guilds.join email'

@Injectable()
export class DiscordService {
  client : DiscordClient;
  constructor() {
    this.client = new DiscordClient()
  }

  async login() {
    await this.client.login(TOKEN)
  }

  async fetchAuthToken(code: string) {
    const data = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: REDIRECT_URL,
      code: code,
      scope: SCOPE
    }
    return Axios.post<DiscordAuth>('https://discord.com/api/oauth2/token', (
      new URLSearchParams(data)).toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => res.data)
  }

  async fetchRefreshToken(refreshToken: string) {
    const data = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'refresh_token',
      redirect_uri: REDIRECT_URL,
      refresh_token: refreshToken,
      scope: SCOPE
    }
    return Axios.post<DiscordAuth>('https://discord.com/api/oauth2/token', (
      new URLSearchParams(data)).toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => res.data)
  }

  async fetchUser (discordAuth: DiscordAuth) {
    return Axios.get<DiscordUser>('https://discord.com/api/users/@me', {
      headers: {
        authorization: `${discordAuth.token_type} ${discordAuth.access_token}`
      }
    }).then(res => res.data)
  }
}

export interface DiscordAuth {
  access_token: string,
  token_type: string,
  expires_in: number,
  refresh_token: string,
  scope: string
}

export interface DiscordUser {
  id: string,
  username: string,
  discriminator: string,
  avatar: string | null,
  email: string,
  flags?: number,
  public_flags?: number
}
