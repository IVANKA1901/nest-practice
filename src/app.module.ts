import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import {  } from "@nes";
import { MongooseModule } from '@nestjs/mongoose';

const environment = process.env.NODE_ENV || "development"

@Module({
  imports: [UserModule,
    ConfigModule.forRoot{{
      envFilePath: `.env.${environment}`,
      isGlobal: true
    }},
  MongooseModule.forRoot{
    

  }
  
  ],
  controllers: [AppController],
  providers: [AppService],
},
)
export class AppModule {}
