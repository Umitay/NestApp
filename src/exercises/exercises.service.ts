import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
interface Exercise {
  id: number;
  tenseId: number;
}
@Injectable()
export class ExercisesService {
  private exercises: Array<Exercise> = [];
  getAll(page: number, limit: number): Array<Exercise> {
    return this.exercises;
  }
  getById(id: number): any {
    return this.exercises.find((e) => e.id == id);
  }
  create(createExercise: CreateExerciseDto): Exercise {
    const exercise = { ...createExercise, id: Date.now() };
    this.exercises.push(exercise);
    return exercise;
  }
}
