
import { Controller, Post, Body } from '@nestjs/common';
import { ClotheService } from './clothe.service';
import { ClotheDTO } from './clothe.dto';

@Controller('clothe')
export class ClotheController {
  constructor(private readonly clotheService: ClotheService) {}

  @Post()
  async create(@Body() data: ClotheDTO) {
    return this.clotheService.create(data);
  }
}