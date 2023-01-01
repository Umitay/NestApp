import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTenseDto } from './dto/create-tense.dto';
import { UpdateTenseDto } from './dto/update-tense.dto';
import { Tense, TenseDocument } from './entities/tense.entity';

@Injectable()
export class TensesService {
  constructor(@InjectModel(Tense.name) private model: Model<TenseDocument>) {}

  create(createTenseDto: CreateTenseDto) {
    const createdTense = new this.model(createTenseDto);
    return createdTense.save();
  }

  findAll(page: number, limit: number): Promise<Tense[]> {
    return this.model.find().exec();
  }

  findOne(id: number): any {
    return this.model.findById(id);
  }

  update(id: number, updateTenseDto: UpdateTenseDto) {
    return `This action updates a #${id} tense`;
  }

  remove(id: number) {
    return `This action removes a #${id} tense`;
  }
}
