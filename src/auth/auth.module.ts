import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { configModule } from 'src/configure.root';
import { TokenModule } from 'src/token/token.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [
    UserModule,
    configModule,
    TokenModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '23h' },
    }),
    MailModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
