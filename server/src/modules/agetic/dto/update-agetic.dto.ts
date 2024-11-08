import { PartialType } from '@nestjs/mapped-types';
import { CreateAgeticDto } from './create-agetic.dto';

export class UpdateAgeticDto extends PartialType(CreateAgeticDto) {}

