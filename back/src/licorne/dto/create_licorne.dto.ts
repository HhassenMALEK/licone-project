import { IsString, IsInt } from 'class-validator';

export class CreateLicorneDto {
  @IsString()
  name?: string;

  @IsInt()
  age?: number;

  @IsString()
  color?: string;

  @IsInt()
  weight?: number;
}
