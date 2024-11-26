import { Injectable } from '@nestjs/common';
import { GetDailyCarbReportUseCase } from '../../presentation/useCases/get.daily.carb.report.use-case';

@Injectable()
export class CarbReportService {
  constructor(
    private readonly getDailyCarbReportUseCase: GetDailyCarbReportUseCase,
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
}
