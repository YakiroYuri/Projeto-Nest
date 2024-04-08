import { Module } from '@nestjs/common';
import { ClotheModule } from './modules/clothe/clothe.module';
import { BrandModule } from './modules/brand/brand.module';
import { PrismaService } from './database/prismaService';

@Module({
  imports: [ClotheModule, BrandModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
