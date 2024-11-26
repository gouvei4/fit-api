import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber } from 'class-validator';

export class CarbReportDto {
  @ApiProperty({
    description: 'Data de início do relatório',
    example: '2024-11-01',
  })
  @IsDateString()
  startDate: string;

  @ApiProperty({
    description: 'Data de término do relatório',
    example: '2024-11-30',
  })
  @IsDateString()
  endDate: string;

  @ApiProperty({
    description: 'Total de carboidratos consumidos no período',
    example: 320,
  })
  @IsNumber()
  totalCarbs: number;

  @ApiProperty({
    description: 'Total de calorias consumidas no período',
    example: 1200,
  })
  @IsNumber()
  totalCalories: number;
}
