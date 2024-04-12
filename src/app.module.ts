import { Module } from '@nestjs/common';
import { AppointmentModule } from './appointment/appointment.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { UserModule } from './user/user.module';
import { DoctorModule } from './doctor/doctor.module';
import { RatingModule } from './rating/rating.module';
import { AuthModule } from './auth/auth.module';

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
    entities: ['dist/**/*.entity.{ts,js}'],
  }),
  UserModule,
  DoctorModule,
  RatingModule,
  AuthModule

  ],
  controllers: [],
  providers: []
})
export class AppModule {}
