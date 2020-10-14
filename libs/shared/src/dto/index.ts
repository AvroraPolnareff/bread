export interface MarketUrlDto {
  id?: number
  userId: string,
  url: string,
  platinumLimit: number,
  channelId: string,
  guildId: string
}


export interface PreyDto {
  id?: number
  userId: string
  nickname: string
  status: string
  lastLogin: string
  url: string
  channelId: string
  guildId: string
}

export interface BreadUserDto {
  id?: number
  userId: string
  email: string
  avatar: string
  nickname: string
  discriminator: string
  currentRefreshToken?: string
  newUser: boolean
}

export interface UpdateCurrentUserDto {
  newUser: boolean
}
