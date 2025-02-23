import {
  Controller,
  Post,
  Get,
  Body,
  ValidationPipe,
  UseGuards,
  Request,
} from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { AuthService } from 'src/auth/auth.service';
import { SigninDto } from 'src/auth/dto/signin.dto';
import { AuthGuard } from './auth.guard';
//import { ResetPasswordDto } from 'src/auth/dto/reset_password.dto';
import { RequestWithUser } from './interfaces/request_with_user.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body(new ValidationPipe()) signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }

  @Post('signin')
  signin(@Body(new ValidationPipe()) signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }

  // @Post('reset-password')
  // resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
  //   return this.authService.resetPassword(resetPasswordDto);
  // }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req: RequestWithUser) {
    return req.user;
  }
}
