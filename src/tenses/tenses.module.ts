import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TensesService } from './tenses.service';
import { TensesController } from './tenses.controller';
import { Tense, TenseSchema } from './entities/tense.entity';

@Module({
  controllers: [TensesController],
  providers: [TensesService],
  imports: [
    MongooseModule.forFeature([{ name: Tense.name, schema: TenseSchema }]),
  ],
})
export class TensesModule {}
