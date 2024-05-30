import {IsDateString, IsNotEmpty, IsNumber} from "class-validator";

export class CreateAppointmentDto {
    patient_id:number;

    @IsNumber()
    doctor_id:number;

    @IsDateString()
    date:Date;
}
