import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId, Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type ExerciseDocument = Exercise & Document;

@Schema()
export class Exercise {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Tenses' })
  tenseId: ObjectId;

  @Prop({ required: true })
  title: string;
  @Prop()
  description: string;
}
export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
