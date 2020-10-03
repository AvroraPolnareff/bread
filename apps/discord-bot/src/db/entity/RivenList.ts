import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class RivenList {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url: string

    @Column()
    rivenList: string

}
