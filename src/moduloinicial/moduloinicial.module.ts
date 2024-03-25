import {Controller, Get} from '@nestjs/common';

@Controller('exemplo')
export class ExemploController {
    @Get()
    async getExemplo(): Promise<string> {
        return 'Exemplo de rota GET'
    }
}

export class ModuloinicialModule {} // Exporte o módulo