import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { configModule } from './configure.root';
import { TokenService } from './token/token.service';
import { UserService } from './user/user.service';
import { TokenModule } from './token/token.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    UserModule,
    configModule,
    MongooseModule.forRoot(
      'mongodb+srv://Ivanka:7is7UItnJWINrvWH@cluster0.kjp3yfy.mongodb.net/mydb-nest?retryWrites=true&w=majority',
    ),
    AuthModule,
    TokenModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, JwtService, TokenService, UserService],
})
export class AppModule {}
