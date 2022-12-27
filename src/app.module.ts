import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExercisesModule } from './exercises/exercises.module';

@Module({
  imports: [ExercisesModule, MongooseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
