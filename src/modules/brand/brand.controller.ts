
import { Body, Controller, Post } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandDTO } from './brand.dto';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  async create(@Body() data: BrandDTO) {
    return this.brandService.create(data);
  }
}