import {IsNumber} from "class-validator";

export class RatingDoctorDto {

    @IsNumber()
    appointment_id!: number;

    @IsNumber()
    rating!: number;
}