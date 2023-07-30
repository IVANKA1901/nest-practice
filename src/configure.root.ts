import { ConfigModule } from '@nestjs/config';

// const environment = 'development';

export const configModule = ConfigModule.forRoot({
  //   envFilePath: `.env.${environment}`,
  isGlobal: true,
});
