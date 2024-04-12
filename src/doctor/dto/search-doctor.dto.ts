import { IsNotEmpty, IsOptional} from "class-validator";

export class SearchDoctorDto {
    @IsOptional()
    @IsNotEmpty()
    name!: string;

    @IsOptional()
    @IsNotEmpty()
    rating!: number;

    @IsOptional()
    @IsNotEmpty()
    specialization!: string;
}
