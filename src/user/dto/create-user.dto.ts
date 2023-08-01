import { IsEmail, IsString, IsNotEmpty, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly userName: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly age: number;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  status: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly gender: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Matches(
    /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
    { message: 'Weak password' },
  )
  readonly password: string;
}
