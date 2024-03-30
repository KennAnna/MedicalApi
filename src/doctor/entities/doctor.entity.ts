import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Doctor {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    specialization: string;

    @Column()
    experience: Date;

    @Column()
    opening_hours: string;

    @Column()
    work_phone: string;

    @Column()
    price: string;

}