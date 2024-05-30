import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import {AppointmentService} from './appointment.service';
import {CreateAppointmentDto} from './dto/create-appointment.dto';
import {UpdateAppointmentDto} from './dto/update-appointment.dto';
import {AuthGuard} from "@nestjs/passport";
import {User} from "../auth/user.decorator";

@Controller('appointment')
export class AppointmentController {
    constructor(private readonly appointmentService: AppointmentService) {
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('create')
    createAppointment(
        @Body() createAppointmentDto: CreateAppointmentDto,
        @User('user_id') user_id: number
    ) {
        createAppointmentDto.patient_id = user_id
        return this.appointmentService.create(createAppointmentDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('list')
    getAppointmentList(@User('user_id') user_id: number) {
        return this.appointmentService.findAll(user_id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch('change/:appointment_id')
    updateAppointment(
        @Param('appointment_id') appointment_id: number,
        @Body() updateAppointmentDto: UpdateAppointmentDto
    ) {
        return this.appointmentService.update(appointment_id, updateAppointmentDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('cancel/:appointment_id')
    remove(@Param('appointment_id') appointment_id: number) {
        return this.appointmentService.remove(appointment_id);
    }
}
