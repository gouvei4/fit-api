import { Module } from '@nestjs/common';
import { CarbReportController } from '../presentation/controllers/carb.report.controller';
import { PrismaService } from 'src/infra/database/prismaService';
import { CarbReportService } from '../application/service/carb.report.service';
import { GetDailyCarbReportUseCase } from '../presentation/useCases/get.daily.carb.report.use-case';
import { CarbReportRepository } from './repositories/carb.report.repository';
import { GenerateWeeklyCarbsReportUseCase } from '../presentation/useCases/get.weekly.report.use-case';
import { GetMonthlyCarbReportUseCase } from '../presentation/useCases/get.monthly.carb.report.use-case';

@Module({
  imports: [],
  controllers: [CarbReportController],
  providers: [
    PrismaService,
    CarbReportService,
    CarbReportRepository,
    GetDailyCarbReportUseCase,
    GenerateWeeklyCarbsReportUseCase,
    GetMonthlyCarbReportUseCase,
  ],
})
export class CarbReportModule {}
