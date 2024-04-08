"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClotheModule = void 0;
const common_1 = require("@nestjs/common");
const clothe_service_1 = require("./clothe.service");
const clothe_controller_1 = require("./clothe.controller");
const prismaService_1 = require("../../database/prismaService");
let ClotheModule = class ClotheModule {
};
exports.ClotheModule = ClotheModule;
exports.ClotheModule = ClotheModule = __decorate([
    (0, common_1.Module)({
        controllers: [clothe_controller_1.ClotheController],
        providers: [clothe_service_1.ClotheService, prismaService_1.PrismaService],
    })
], ClotheModule);
//# sourceMappingURL=clothe.module.js.map