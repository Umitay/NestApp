import { ObjectId } from 'mongoose';

export class CreateExerciseDto {
  tenseId: string;
  title: string;
  description: string;
}
