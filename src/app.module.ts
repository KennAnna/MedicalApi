import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentModule } from './appointment/appointment.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Appointment} from "./appointment/entities/appointment.entity";
import { UserModule } from './user/user.module';
import { DoctorModule } from './doctor/doctor.module';
import { RatingModule } from './rating/rating.module';

@Module({

  imports: [AppointmentModule,
  TypeOrmModule.forRoot({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"root",
    password: "root",
    database: "medical",
    logging: 'all',
    entities: [Appointment]
  }),
  UserModule,
  DoctorModule,
  RatingModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
