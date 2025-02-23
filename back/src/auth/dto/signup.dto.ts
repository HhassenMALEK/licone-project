import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class SignupDto {
  @IsString()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  email: string;
}
