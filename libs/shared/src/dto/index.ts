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

export interface RivenQueryDto {
  id?: number
  userId: string
  weapon: string
  positive: string[]
  negative?: string
  polarity?: string
  modRank?: string
  mastery?: string
  platinumLimit?: number
  channelId: string
  guildId: string
}

