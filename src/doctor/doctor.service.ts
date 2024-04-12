import {Injectable} from '@nestjs/common';


import {SearchDoctorDto} from "./dto/search-doctor.dto";
import {DataSource} from "typeorm";
import {Doctor} from "./entities/doctor.entity";
import {UpdateInformDto} from "./dto/update-inform.dto";



@Injectable()
export class DoctorService {
    constructor(
        private dataSource: DataSource,
    ) {
    }
    updateDoctorInform(body:UpdateInformDto) {
        return this.dataSource.getRepository(Doctor).save(body)


    }
    getDoctorList(query: SearchDoctorDto) {
        return this.dataSource.getRepository(Doctor).createQueryBuilder()
            .getMany()
    }

    findAll() {
        return `This action returns all doctor`;
    }

    findOne(id: number) {
        return `This action returns a #${id} doctor`;
    }

    remove(id: number) {
        return `This action removes a #${id} doctor`;
    }
}
