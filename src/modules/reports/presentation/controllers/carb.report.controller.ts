import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CarbReportService } from '../../application/service/carb.report.service';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';

@ApiTags('Relatórios de Carboidratos')
@Controller('reports')
export class CarbReportController {
  constructor(private readonly carbReportService: CarbReportService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
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

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get('weekly-carbs')
  async getWeeklyCarbReport(
    @Query('userId') userId: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.carbReportService.getWeeklyCarbReport(
      userId,
      startDate,
      endDate,
    );
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get('monthly-carbs')
  async getMonthlyCarbReport(
    @Query('userId') userId: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.carbReportService.getMonthlyCarbReport(
      userId,
      startDate,
      endDate,
    );
  }
}
