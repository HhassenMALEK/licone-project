import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class SigninDto {
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  email: string;
}
