import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId, Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type ExerciseDocument = Exercise & Document;

@Schema()
export class Exercise {
  @Prop({ required: true })
  title: string;
  @Prop()
  description: string;
  @Prop() //{ type: mongoose.Schema.Types.ObjectId, ref: 'Tenses' })
  tenseId: string;
}
export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
