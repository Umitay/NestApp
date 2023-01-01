import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';
import { Exercise, ExerciseSchema } from './entities/exercise.entity';

@Module({
  controllers: [ExercisesController],
  providers: [ExercisesService],
  imports: [
    MongooseModule.forFeature([
      { name: Exercise.name, schema: ExerciseSchema },
    ]),
  ],
})
export class ExercisesModule {}
