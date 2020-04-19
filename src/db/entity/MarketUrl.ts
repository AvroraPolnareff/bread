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
    updateFrequency: number

    @Column()
    platinumLimit: number

}
