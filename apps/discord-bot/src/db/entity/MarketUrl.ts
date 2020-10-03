import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class MarketUrl {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userId: string

    @Column()
    url: string

    @Column()
    platinumLimit: number

    @Column()
    channelId: string

    @Column()
    guildId: string

}
