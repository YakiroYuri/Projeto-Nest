import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuloinicialModule } from './moduloinicial/moduloinicial.module';

@Module({
  imports: [ModuloinicialModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
