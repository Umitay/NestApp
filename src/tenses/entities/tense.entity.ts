import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId, Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type TenseDocument = Tense & Document;

export class Tense {
  @Prop({ required: true })
  title: string;

  @Prop()
  summary: string;

  @Prop()
  description: string;
}
export const TenseSchema = SchemaFactory.createForClass(Tense);
