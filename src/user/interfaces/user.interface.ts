import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly userName: string;
  readonly email: string;
  readonly age: number;
  readonly status: boolean;
  readonly gender: string;
  readonly password: string;
}
