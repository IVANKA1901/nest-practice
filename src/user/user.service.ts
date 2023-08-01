import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';

import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private readonly saltRounds = 10;

  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async getAll(): Promise<IUser[]> {
    return await this.userModel.find();
  }

  async getUserById(id: string): Promise<IUser> {
    return await this.userModel.findById(id).exec();
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds);
    return await bcrypt.hash(password, salt);
  }

  async createUser(user: CreateUserDto): Promise<IUser> {
    const hash = await this.hashPassword(user.password);

    const createdUser = new this.userModel(
      _.assignIn(user, { password: hash }),
    );

    return await createdUser.save();
  }

  async deleteUser(id: string): Promise<IUser> {
    return await this.userModel.findByIdAndRemove(id).exec();
  }

  async find(id: string): Promise<IUser> {
    return await this.userModel.findById(id).exec();
  }

  async findByEmail(email: string): Promise<IUser> {
    return await this.userModel.findOne({ email }).exec();
  }

  async update(_id: string, payload: Partial<IUser>) {
    return await this.userModel.updateOne({ _id }, payload);
  }
}
