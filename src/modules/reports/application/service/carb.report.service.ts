import { Injectable } from '@nestjs/common';
import { GetDailyCarbReportUseCase } from '../../presentation/useCases/get.daily.carb.report.use-case';
import { GenerateWeeklyCarbsReportUseCase } from '../../presentation/useCases/get.weekly.report.use-case';
import { GetMonthlyCarbReportUseCase } from '../../presentation/useCases/get.monthly.carb.report.use-case';

@Injectable()
export class CarbReportService {
  constructor(
    private readonly getDailyCarbReportUseCase: GetDailyCarbReportUseCase,
    private readonly generateWeeklyCarbsReportUseCase: GenerateWeeklyCarbsReportUseCase,
    private readonly getMonthlyCarbReportUseCase: GetMonthlyCarbReportUseCase,
  ) {}

  async getDailyCarbReport(userId: string, startDate: string, endDate: string) {
    const startDateParsed = new Date(startDate);
    const endDateParsed = new Date(endDate);
    return this.getDailyCarbReportUseCase.execute(
      userId,
      startDateParsed,
      endDateParsed,
    );
  }

  async getWeeklyCarbReport(
    userId: string,
    startDate: string,
    endDate: string,
  ) {
    const startDateParsed = new Date(startDate);
    const endDateParsed = new Date(endDate);
    return this.generateWeeklyCarbsReportUseCase.execute(
      userId,
      startDateParsed,
      endDateParsed,
    );
  }

  async getMonthlyCarbReport(
    userId: string,
    startDate: string,
    endDate: string,
  ) {
    const startDateParsed = new Date(startDate);
    const endDateParsed = new Date(endDate);
    return this.getMonthlyCarbReportUseCase.execute(
      userId,
      startDateParsed,
      endDateParsed,
    );
  }
}
