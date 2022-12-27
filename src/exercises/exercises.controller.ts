import { Controller, Post, Body, Query, Get, Param } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
@Controller('exercises')
export class ExercisesController {
  @Get()
  getAll(@Query('limit') limit: string, @Query('page') page: string): string {
    return `All Exercises:1,2,3 from ${page} to ${limit} `;
  }
  @Get(':id')
  getOne(@Param('id') id: string): string {
    return `Exercise: ${id}`;
  }

  @Post()
  create(@Body() createExercise: CreateExerciseDto) {
    return 'This action adds a new exercise';
  }
}
