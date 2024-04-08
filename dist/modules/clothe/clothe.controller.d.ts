import { ClotheService } from './clothe.service';
import { ClotheDTO } from './clothe.dto';
export declare class ClotheController {
    private readonly clotheService;
    constructor(clotheService: ClotheService);
    create(data: ClotheDTO): Promise<{
        id: number;
        type: string;
        gender: string;
        bar_code: string;
        brandId: number;
    }>;
}
