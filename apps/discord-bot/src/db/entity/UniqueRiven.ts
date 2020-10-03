import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class UniqueRiven {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    riven: string

    @Column()
    url: string
}
