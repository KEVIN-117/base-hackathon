import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgeticService } from './agetic.service';
import { CreateAgeticDto } from './dto/create-agetic.dto';
import { UpdateAgeticDto } from './dto/update-agetic.dto';

@Controller('agetic')
export class AgeticController {
  constructor(private readonly ageticService: AgeticService) {}

  @Post()
  create(@Body() createAgeticDto: CreateAgeticDto) {
    return this.ageticService.create(createAgeticDto);
  }

  @Get()
  findAll() {
    return this.ageticService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ageticService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgeticDto: UpdateAgeticDto) {
    return this.ageticService.update(+id, updateAgeticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ageticService.remove(+id);
  }
}
