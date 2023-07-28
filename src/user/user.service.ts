import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';

import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async getAll(): Promise<IUser[]> {
    return await this.userModel.find();
  }

  async getUserById(id: string): Promise<IUser> {
    return await this.userModel.findById(id).exec();
  }

  async createUser(user: CreateUserDto): Promise<IUser> {
    const hash = await bcrypt.hash(user.password, 10);

    const createdUser = new this.userModel(
      _.assignIn(user, { password: hash }),
    );

    return await createdUser.save();
  }

  //   updateUser(data: UpdateUserDto) {}
  async deleteUser(id: string): Promise<IUser> {
    return await this.userModel.findByIdAndRemove(id).exec();
  }
}
