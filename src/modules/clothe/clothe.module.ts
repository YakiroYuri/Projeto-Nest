import { Module } from '@nestjs/common';
import { ClotheService } from './clothe.service';
import { ClotheController } from './clothe.controller';
import { PrismaService } from 'src/database/prismaService';

@Module({
  controllers: [ClotheController],
  providers: [ClotheService, PrismaService],
})
export class ClotheModule {}
