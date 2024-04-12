import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {CreateAndUpdateDoctorInfoDto} from "./dto/create-and-update-doctor-info.dto";
import {AuthGuard} from "@nestjs/passport";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('doctor/info')
  @UseGuards(AuthGuard('jwt'))
  saveAndUpdateDoctorInform(@Body()body:CreateAndUpdateDoctorInfoDto){

  }
}
