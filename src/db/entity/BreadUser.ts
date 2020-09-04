import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class BreadUser {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userId: string

    @Column()
    isHunting: boolean

    @Column()
    updateFrequency: number
}
