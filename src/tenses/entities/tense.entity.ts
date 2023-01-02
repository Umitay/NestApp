import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type TenseDocument = HydratedDocument<Tense>;

@Schema()
export class Tense {
  @Prop({ required: true })
  sug: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  summary: string;

  @Prop()
  description: string;
}
export const TenseSchema = SchemaFactory.createForClass(Tense);
