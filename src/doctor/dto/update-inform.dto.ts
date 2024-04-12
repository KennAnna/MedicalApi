import {IsDateString, IsNotEmpty, IsOptional} from "class-validator";

export class UpdateInformDto {
    @IsOptional()
    @IsNotEmpty()
    specialization: string;

    @IsOptional()
    @IsDateString()
    experience: Date;

    @IsOptional()
    @IsNotEmpty()
    opening_hours: string;

    @IsOptional()
    @IsNotEmpty()
    work_phone: string;

    @IsOptional()
    @IsNotEmpty()
    price: string;
}
