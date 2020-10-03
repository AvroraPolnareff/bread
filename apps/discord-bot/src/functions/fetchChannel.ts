import {Client, DMChannel, TextChannel} from "discord.js"

export async function fetchChannel(
  userId: string,
  guildId: string,
  channelId: string,
  client: Client
): Promise<TextChannel | DMChannel | null> {
  if (guildId) {
    const guild = await client.guilds.fetch(guildId)
    if (!guild) return null
    return guild.channels.resolve(channelId) as TextChannel
  } else {
    const user = await client.users.fetch(userId)
    if (!user) return null
    return user.dmChannel
  }
}
