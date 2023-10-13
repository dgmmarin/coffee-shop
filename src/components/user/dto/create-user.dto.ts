import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  isNotEmpty,
} from 'class-validator';
import { Entity } from 'typeorm';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  password: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;
}
