import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import {Doctor} from "../../doctor/entities/doctor.entity";
import {AppointmentStatusEnum} from "../enums/appointment-status.enum";

@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    appointment_id: number;

    @Column()
    patient_id: number;

    @Column()
    doctor_id: number;

    @Column()
    date: Date;

    @Column()
    status:AppointmentStatusEnum

    @ManyToOne(() => Doctor, doctor => doctor.appointments)
    @JoinColumn({name: 'doctor_id'})
    doctor: Doctor;

}
