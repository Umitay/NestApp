import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId, HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Tense } from 'src/tenses/entities/tense.entity';
export type ExerciseDocument = HydratedDocument<Exercise>;

@Schema()
export class Exercise {
  @Prop({ required: true })
  title: string;
  @Prop()
  description: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tenses' })
  tenseId: Tense;
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
