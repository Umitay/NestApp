import {
  Controller,
  Header,
  HttpCode,
  Post,
  Body,
  Query,
  Get,
  Param,
  HttpStatus,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { ExercisesService } from './exercises.service';
interface Exercise {
  id: string;
  tenseId: string;
}

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesServise: ExercisesService) {}
  @Get()
  getAll(
    @Req() req: Request,
    @Res() res: Response,
    @Query('limit') limit: number,
    @Query('page') page: number,
  ): Array<Exercise> {
    return this.exercisesServise.getAll(page, limit);
  }
  @Get(':id')
  getOne(@Param('id') id: number): Exercise {
    return this.exercisesServise.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createExercise: CreateExerciseDto): Exercise {
    return this.exercisesServise.create(createExercise);
  }
}
