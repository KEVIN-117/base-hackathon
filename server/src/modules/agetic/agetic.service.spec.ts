import { Test, TestingModule } from '@nestjs/testing';
import { AgeticService } from './agetic.service';

describe('AgeticService', () => {
  let service: AgeticService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgeticService],
    }).compile();

    service = module.get<AgeticService>(AgeticService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

