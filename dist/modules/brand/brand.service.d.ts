import { BrandDTO } from './brand.dto';
import { PrismaService } from 'src/database/prismaService';
export declare class BrandService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: BrandDTO): Promise<{
        id: number;
        nome: string;
    }>;
}
