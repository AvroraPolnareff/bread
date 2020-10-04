import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class PreyEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userId: string

    @Column()
    nickname: string

    @Column()
    status: string

    @Column()
    lastLogin: string

    @Column()
    url: string

    @Column()
    channelId: string

    @Column()
    guildId: string

}
