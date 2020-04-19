import {Riven} from "./Riven";
import {Column, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

export interface RivenWithDetails extends Riven, RivenDetails {}

export interface RivenDetails {
    updatedAt: string
    createdAt: string
    bids?: Bid[]
    description?: string
}

export interface Bid {

    nickname: string

    profile: string

    price: number

    updatedAt: string
}
