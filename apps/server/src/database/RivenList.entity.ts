import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class RivenListEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url: string

    @Column()
    rivenList: string

}
