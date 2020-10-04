import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class BreadUserEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userId: string

    @Column()
    isHunting: boolean

    @Column()
    rivenUpdateFrequency: number

    @Column()
    userUpdateFrequency: number
}
