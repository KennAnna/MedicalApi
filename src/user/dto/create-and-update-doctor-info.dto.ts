import {IsDateString, IsOptional, IsString} from "class-validator";

export class CreateAndUpdateDoctorInfoDto {
    @IsOptional()
    @IsString()
    specialization: string;

    @IsDateString()
    @IsOptional()
    experience: Date;

    @IsOptional()
    @IsString()
    opening_hours: string;

    @IsOptional()
    @IsString()
    work_phone: string;

    @IsOptional()
    @IsString()
    price: string
}