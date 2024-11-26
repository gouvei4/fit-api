import { Module } from '@nestjs/common';
import { CarbHistoryController } from '../presentation/controllers/carb.history.controller';
import { PrismaService } from 'src/infra/database/prismaService';
import { CarbHistoryService } from '../application/service/carb.history.service';
import { CreateCarbHistoryUseCase } from '../presentation/useCases/create.carb.history.use-case';
import { CarbHistoryRepository } from './repositories/carb-history.repository';
import { GetCarbHistoryUseCase } from '../presentation/useCases/get.carb.history.use-case';
import { DeleteCarbHistoryUseCase } from '../presentation/useCases/delete.carb.use-case';

@Module({
  controllers: [CarbHistoryController],
  providers: [
    PrismaService,
    CarbHistoryService,
    CreateCarbHistoryUseCase,
    CarbHistoryRepository,
    GetCarbHistoryUseCase,
    DeleteCarbHistoryUseCase,
  ],
})
export class CarbHistoryModule {}
