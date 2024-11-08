import { Test, TestingModule } from '@nestjs/testing';
import { AgeticController } from './agetic.controller';
import { AgeticService } from './agetic.service';

describe('AgeticController', () => {
  let controller: AgeticController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgeticController],
      providers: [AgeticService],
    }).compile();

    controller = module.get<AgeticController>(AgeticController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
