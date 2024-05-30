import {Injectable} from '@nestjs/common';
import {CreateAppointmentDto} from './dto/create-appointment.dto';
import {UpdateAppointmentDto} from './dto/update-appointment.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {AppointmentController} from "./appointment.controller";
import {Appointment} from "./entities/appointment.entity";
import {Repository} from "typeorm";
import {AppointmentStatusEnum} from "./enums/appointment-status.enum";

@Injectable()
export class AppointmentService {
    constructor(
        @InjectRepository(Appointment)
        private appointmentRepository: Repository<Appointment>
    ) {
    }

    create(createAppointmentDto: CreateAppointmentDto) {
        return this.appointmentRepository.save(createAppointmentDto)
    }

    findAll(user_id:number) {
        return this.appointmentRepository.find({
            relations:['doctor'],
            where: {
                patient_id:user_id
            }
        });
    }

    findOne(id: number) {
        return this.appointmentRepository.findOne({
            where: {
                appointment_id: id
            }
        });
    }

    update(appointment_id: number, updateAppointmentDto: UpdateAppointmentDto) {
        return this.appointmentRepository.update(appointment_id, updateAppointmentDto);
    }

    remove(appointment_id: number) {
        return this.appointmentRepository.update(appointment_id, {

            status:AppointmentStatusEnum.CANCEL
        });
    }
}
