import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Riven} from "../../models/Riven";

@Entity()
export class RivenList {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url: string

    @Column()
    rivenList: string

}
