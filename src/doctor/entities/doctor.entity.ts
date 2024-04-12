import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Doctor {
    @PrimaryColumn()
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