import { Test, TestingModule } from '@nestjs/testing';
import { TensesController } from './tenses.controller';
import { TensesService } from './tenses.service';

describe('TensesController', () => {
  let controller: TensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TensesController],
      providers: [TensesService],
    }).compile();

    controller = module.get<TensesController>(TensesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
