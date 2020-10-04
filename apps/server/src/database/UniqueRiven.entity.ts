import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class UniqueRivenEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    riven: string

    @Column()
    url: string
}
