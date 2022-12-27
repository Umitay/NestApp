import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExercisesController } from './exercises/exercises.controller';

@Module({
  imports: [],
  controllers: [AppController, ExercisesController],
  providers: [AppService],
})
export class AppModule {}
