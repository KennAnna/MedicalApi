import {Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import {SearchDoctorDto} from "./dto/search-doctor.dto";
import {RatingDoctorDto} from "./dto/rating-doctor.dto";

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get('list')
  getDoctorList(@Query() query: SearchDoctorDto) {
    return this.doctorService.create(createDoctorDto);
  }

  @Post('rate')
  createDoctorRate(@Body() body:RatingDoctorDto) {
    return this.doctorService.findAll();
  }

  @Get('appointment')
  getDoctorAppointment() {
    return this.doctorService.findOne(+id);
  }

  @Patch('inform')
  updateDoctorInform(@Body() body: UpdateDoctorDto) {
    return this.doctorService.remove(+id);
  }
}
