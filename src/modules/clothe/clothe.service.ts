import { Injectable } from '@nestjs/common';
import { ClotheDTO } from './clothe.dto';
import { PrismaService } from 'src/database/prismaService';

@Injectable()
export class ClotheService {
  constructor(private prisma: PrismaService) {}

  async create(data: ClotheDTO) {
    const clotheExists = await this.prisma.clothe.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });

    if (clotheExists) {
      throw new Error('Clothe already exists');
    }

    const clothe = await this.prisma.clothe.create({
      data,
    });

    return clothe;
  }
}
