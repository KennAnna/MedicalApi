import {Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards} from '@nestjs/common';
import { DoctorService } from './doctor.service';

import {SearchDoctorDto} from "./dto/search-doctor.dto";
import {RatingDoctorDto} from "./dto/rating-doctor.dto";
import {UpdateInformDto} from "./dto/update-inform.dto";
import {AuthGuard} from "@nestjs/passport";
import {User} from "../auth/user.decorator";

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get('list')
  getDoctorList(@Query() query: SearchDoctorDto) {
    return this.doctorService.getDoctorList(query);
  }

  @Post('rate')
  createDoctorRate(@Body() body:RatingDoctorDto) {
    //return this.doctorService.createDoctorRate(body);
  }

  @Get('appointment')
  getDoctorAppointment() {
    //return this.doctorService.getDoctorAppointment();
  }

  @Patch('inform')
  @UseGuards(AuthGuard('jwt'))
  updateDoctorInform(
      @Body() body: UpdateInformDto,
      @User('user_id') user_id:number
  ) {
    body.user_id = user_id;
    return this.doctorService.updateDoctorInform(body);
  }
}
