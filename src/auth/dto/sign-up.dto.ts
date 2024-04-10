import {IsDateString, IsEmail, IsNotEmpty, IsNumberString} from "class-validator";

export class SignUpDto {

    @IsEmail()
    email!: string;

    @IsNumberString()
    phone!: string;

    @IsDateString()
    dob!: Date;

    @IsNotEmpty()
    password!: string;
}