import { Test, TestingModule } from '@nestjs/testing';
import { TensesService } from './tenses.service';

describe('TensesService', () => {
  let service: TensesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TensesService],
    }).compile();

    service = module.get<TensesService>(TensesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
