export interface Riven {
    id?: number

    name: string

    link: string

    image: string

    nickname: string

    avatar: string

    profile: string

    attributes: Attribute[]

    mastery: string

    modRank: string

    rerolls: string

    polarity: string

    buyoutPrice?: string

    startingPrice?: string

    sellingPrice?: string

    topBid?: string

    displayingPrice: string

}

export interface Attribute {

    id: number

    name: string

    value: string

    negative: boolean
}


