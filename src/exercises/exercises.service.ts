import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model, Types } from 'mongoose';
import mongoose from 'mongoose';

export const ObjectId = mongoose.Types.ObjectId;
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

import { Exercise, ExerciseDocument } from './entities/exercise.entity';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectModel(Exercise.name) private model: Model<ExerciseDocument>,
  ) {}

  create(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    const createdExercise = new this.model(createExerciseDto);
    return createdExercise.save();
  }

  findAll(tenseId: string, level: string): Promise<Exercise[]> {
    const query: any = { tenseId: new Types.ObjectId(tenseId), level };
    return this.model.find(query).exec();
  }

  findOne(id: string): any {
    return this.model.findById(id);
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto): any {
    return `This action updates a #${id} exercise`;
  }

  remove(id: number): any {
    return `This action removes a #${id} exercise`;
  }
}
