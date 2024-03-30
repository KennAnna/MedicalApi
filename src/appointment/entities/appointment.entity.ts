import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    appointment_id: number;

    @Column()
    patient_id: number;

    @Column()
    doctor_id:number;

    @Column()
    date: Date;

}
