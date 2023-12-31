import * as mongoose from 'mongoose';

import { genderEnum } from '../enums/gender.enum';
import { statusEnum } from '../enums/status.enum';

export const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  status: {
    type: String,
    enum: Object.values(statusEnum),
    default: statusEnum.pending,
  },
  gender: { type: String, required: true, enum: Object.values(genderEnum) },
  password: { type: String, required: true },
});

UserSchema.index({ email: 1 }, { unique: true });
