import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateExerciseDto } from './dto/create-exercise.dto';
import { Exercise, ExerciseDocument } from './mongoSchema/exercise.schema';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectModel(Exercise.name) private exerciseModel: Model<ExerciseDocument>,
  ) {}

  getAll(page: number, limit: number): Promise<Exercise[]> {
    return this.exerciseModel.find().exec();
  }
  getById(id: ObjectId): any {
    return this.exerciseModel.findById(id);
  }
  create(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    const createdExercise = new this.exerciseModel(createExerciseDto);
    return createdExercise.save();
  }
}
