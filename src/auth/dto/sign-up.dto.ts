import {IsDateString, IsEmail, IsEnum, IsNotEmpty, IsNumberString, IsOptional, IsString} from "class-validator";
import {RoleEnum} from "../enums/role.enum";

export class SignUpDto {

    @IsEmail()
    email!: string;

    @IsNumberString()
    phone!: string;

    @IsDateString()
    dob!: Date;

    @IsNotEmpty()
    name!: string;


    @IsNotEmpty()
    password!: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsEnum (RoleEnum)
    role!: RoleEnum;
}