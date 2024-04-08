import { BrandService } from './brand.service';
import { BrandDTO } from './brand.dto';
export declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandService);
    create(data: BrandDTO): Promise<{
        id: number;
        nome: string;
    }>;
}
