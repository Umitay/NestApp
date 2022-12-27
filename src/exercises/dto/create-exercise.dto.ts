import { ObjectId } from 'mongoose';

export class CreateExerciseDto {
  tenseId: ObjectId;
  name: string;
  description: string;
}
