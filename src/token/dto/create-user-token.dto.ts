import { IsString } from 'class-validator';
import mongoose from 'mongoose';

export class CreateUserTokenDto {
  @IsString()
  token: string;
  @IsString()
  uId: mongoose.Types.ObjectId;
  @IsString()
  expireAt: string;
}
