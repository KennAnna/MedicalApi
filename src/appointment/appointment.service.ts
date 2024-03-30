import {Injectable} from '@nestjs/common';
import {CreateAppointmentDto} from './dto/create-appointment.dto';
import {UpdateAppointmentDto} from './dto/update-appointment.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {AppointmentController} from "./appointment.controller";
import {Appointment} from "./entities/appointment.entity";
import {Repository} from "typeorm";

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

    findAll() {
        return this.appointmentRepository.find();
    }

    findOne(id: number) {
        return this.appointmentRepository.findOne({
            where: {
                appointment_id: id
            }
        });
    }

    update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
        return this.appointmentRepository.update(id, updateAppointmentDto);
    }

    remove(id: number) {
        return this.appointmentRepository.delete(id);
    }
}
