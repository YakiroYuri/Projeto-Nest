import { Injectable } from '@nestjs/common';
import { BrandDTO } from './brand.dto';
import { PrismaService } from 'src/database/prismaService';

@Injectable()
export class BrandService {
  constructor(private prisma: PrismaService) {}

  async create(data: BrandDTO) {
    const brandExists = await this.prisma.brand.findFirst({
      where: {
        name: data.name,
      },
    });

    if (brandExists) {
      throw new Error('Brand already exists');
    }
    const brand = await this.prisma.brand.create({
      data,
    });

    return brand;
  }
}