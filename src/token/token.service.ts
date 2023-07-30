import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IUserToken } from './interfaces/user-token.interface';
import { CreateUserTokenDto } from './dto/create-user-token.dto';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel('Token') private readonly tokenModel: Model<IUserToken>,
  ) {}

  async createToken(token: CreateUserTokenDto): Promise<IUserToken> {
    const userToken = new this.tokenModel(token);
    return await userToken.save();
  }

  async delete(uId: string, token: string) {
    return await this.tokenModel.deleteOne({ uId, token });
  }

  async deleteAll(uId: string) {
    return await this.tokenModel.deleteMany({ uId });
  }

  async exists(uId: string, token: string) {
    return await this.tokenModel.exists({ uId, token });
  }
}
