import { ApiProperty } from '@nestjs/swagger';
import { IsDateString } from 'class-validator';

export class GetWeeklyCarbsDto {
  @ApiProperty({
    description: 'Data de início da semana para o relatório',
    example: '2024-11-01',
  })
  @IsDateString()
  startDate: string;
}
