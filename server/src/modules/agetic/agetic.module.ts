import { Module } from '@nestjs/common';
import { AgeticService } from './agetic.service';
import { AgeticController } from './agetic.controller';

@Module({
  controllers: [AgeticController],
  providers: [AgeticService],
})
export class AgeticModule {}

