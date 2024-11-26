import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarbReportService } from '../../application/service/carb.report.service';

@ApiTags('Relatórios de Carboidratos')
@Controller('reports')
export class CarbReportController {
  constructor(private readonly carbReportService: CarbReportService) {}

  @Get('daily-carbs')
  @ApiOperation({
    summary: 'Obter um relatório diário de ingestão de carboidratos',
  })
  @ApiResponse({
    status: 200,
    description: 'Relatório de carboidratos obtido com sucesso',
  })
  async getDailyCarbReport(
    @Query('userId') userId: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ): Promise<{ totalCarbs: number; totalCalories: number }> {
    return this.carbReportService.getDailyCarbReport(
      userId,
      startDate,
      endDate,
    );
  }
}
