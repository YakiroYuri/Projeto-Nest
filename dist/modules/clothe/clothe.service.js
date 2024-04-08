"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClotheService = void 0;
const common_1 = require("@nestjs/common");
const prismaService_1 = require("../../database/prismaService");
let ClotheService = class ClotheService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
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
};
exports.ClotheService = ClotheService;
exports.ClotheService = ClotheService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prismaService_1.PrismaService])
], ClotheService);
//# sourceMappingURL=clothe.service.js.map