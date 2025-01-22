import { Injectable } from '@nestjs/common';
import { CarbReportRepository } from '../../infra/repositories/carb.report.repository';

@Injectable()
export class GetDailyCarbReportUseCase {
  constructor(private readonly carbReportRepository: CarbReportRepository) {}

  async execute(
    userId: string,
    startDate: Date,
    endDate: Date,
  ): Promise<{ totalCarbs: number; totalCalories: number }> {
    return this.carbReportRepository.getDailyCarbReport(
      userId,
      startDate,
      endDate,
    );
  }
}
