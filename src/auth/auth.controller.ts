import {Body, Controller, Post} from '@nestjs/common';
import { AuthService } from './auth.service';
import {LoginDto} from "./dto/login.dto";
import {SignUpDto} from "./dto/sign-up.dto";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body()body:LoginDto) {
    return this.authService.login(body);
  }

  @Post('sign-up')
  signUp(@Body()body:SignUpDto) {
    return this.authService.signUp(body);
  }
}

