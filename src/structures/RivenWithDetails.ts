import {Riven} from "./Riven";
import {Column, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

export interface RivenWithDetails extends Riven, RivenDetails {}

export interface TimeStamps {
    updatedAt: string
    createdAt: string
}

export interface RivenDetails extends TimeStamps{
    bids?: Bid[]
    description?: string
}

export interface Bid {

    nickname: string

    profile: string

    price: number

    updatedAt: string
}
