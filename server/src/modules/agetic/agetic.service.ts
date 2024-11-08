import { Injectable } from '@nestjs/common';
import { CreateAgeticDto } from './dto/create-agetic.dto';
import { UpdateAgeticDto } from './dto/update-agetic.dto';

@Injectable()
export class AgeticService {
  create(createAgeticDto: CreateAgeticDto) {
    return 'This action adds a new agetic';
  }

  findAll() {
    return `This action returns all agetic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agetic`;
  }

  update(id: number, updateAgeticDto: UpdateAgeticDto) {
    return `This action updates a #${id} agetic`;
  }

  remove(id: number) {
    return `This action removes a #${id} agetic`;
  }
}
