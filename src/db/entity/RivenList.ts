import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Riven} from "../../structures/Riven";

@Entity()
export class RivenList {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url: string

    @Column()
    rivenList: string

}
