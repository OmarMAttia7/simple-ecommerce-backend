import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
})
export class AppModule {}
