import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userId: string

    @Column()
    isHunting: boolean

}
