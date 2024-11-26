import { Module } from '@nestjs/common';
import { CarbReportController } from '../presentation/controllers/carb.report.controller';
import { PrismaService } from 'src/infra/database/prismaService';
import { CarbReportService } from '../application/service/carb.report.service';
import { GetDailyCarbReportUseCase } from '../presentation/useCases/get.daily.carb.report.use-case';
import { CarbReportRepository } from './repositories/carb.report.repository';

@Module({
  imports: [],
  controllers: [CarbReportController],
  providers: [
    PrismaService,
    CarbReportService,
    CarbReportRepository,
    GetDailyCarbReportUseCase,
  ],
})
export class CarbReportModule {}
