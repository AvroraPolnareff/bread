import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

export enum Status {
    Online= "online",
    Offline = "offline",
    OnlineInGame = "online in game"
}

@Entity()
export class Prey {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userId: string

    @Column()
    nickname: string

    @Column({
        type: "enum",
        enum: Status,
        default: Status.Offline
    })
    status: Status

    @Column()
    lastLogin: string

    @Column()
    url: string

    @Column()
    channelId: string

    @Column()
    guildId: string

}
