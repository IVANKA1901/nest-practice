import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TokenController } from './token.controller';
import { TokenService } from './token.service';
import { TokenSchema } from './schemas/user-token.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Token', schema: TokenSchema }]), ////cretae token model
  ],
  controllers: [TokenController],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
