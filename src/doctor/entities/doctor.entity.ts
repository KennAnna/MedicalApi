import {Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {Appointment} from "../../appointment/entities/appointment.entity";

@Entity('')
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

@OneToMany(() =>Appointment, appointment=>appointment.doctor)
    appointments:Appointment[]
}