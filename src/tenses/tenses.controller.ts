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
import { TensesService } from './tenses.service';
import { CreateTenseDto } from './dto/create-tense.dto';
import { UpdateTenseDto } from './dto/update-tense.dto';
import { Tense } from './entities/tense.entity';

@Controller('tenses')
export class TensesController {
  constructor(private readonly tensesService: TensesService) {}

  @Post()
  create(@Body() createTenseDto: CreateTenseDto): Promise<Tense> {
    return this.tensesService.create(createTenseDto);
  }

  @Get()
  async findAll(
    @Req() req: Request,
    @Res() res: Response,
    @Query('limit') limit: number,
    @Query('page') page: number,
  ): Promise<Tense[]> {
    return await this.tensesService.findAll(page, limit);
  }

  @Get(':sug')
  findOne(@Param('sug') sug: string): Promise<Tense> {
    return this.tensesService.findOne(sug);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTenseDto: UpdateTenseDto) {
    return this.tensesService.update(+id, updateTenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tensesService.remove(+id);
  }
}
