import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Header,
  HttpCode,
  Query,
  HttpStatus,
  Req,
  Res,
} from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

import { Exercise } from './entities/exercise.entity';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createExerciseDto: CreateExerciseDto): Promise<Exercise | {}> {
    return this.exercisesService.create(createExerciseDto);
  }

  @Get()
  async findAll(
    @Req() req: Request,
    @Res() res: Response,
    @Query('limit') limit: number,
    @Query('page') page: number,
  ) {
    return [{ title: 'past' }]; // await this.exercisesService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Exercise> {
    return this.exercisesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ): Promise<Exercise> {
    return this.exercisesService.update(+id, updateExerciseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Exercise> {
    return this.exercisesService.remove(+id);
  }
}
