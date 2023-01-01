import { PartialType } from '@nestjs/mapped-types';
import { CreateTenseDto } from './create-tense.dto';

export class UpdateTenseDto extends PartialType(CreateTenseDto) {}
