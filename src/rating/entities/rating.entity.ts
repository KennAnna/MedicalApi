import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Rating {
    @PrimaryGeneratedColumn()
    rating_id: number;

    @Column()
    rating: number;

    @Column()
    text: string;

    @Column()
    appointment_id: number;


}