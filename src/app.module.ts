import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { configModule } from './configure.root';
import { TokenModule } from './token/token.module';

@Module({
  imports: [
    UserModule,
    configModule,
    MongooseModule.forRoot(
      'mongodb+srv://Ivanka:7is7UItnJWINrvWH@cluster0.kjp3yfy.mongodb.net/mydb-nest?retryWrites=true&w=majority',
    ),
    AuthModule,
    TokenModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
