import { ClotheDTO } from './clothe.dto';
import { PrismaService } from 'src/database/prismaService';
export declare class ClotheService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: ClotheDTO): Promise<{
        id: number;
        type: string;
        gender: string;
        bar_code: string;
        brandId: number;
    }>;
}
