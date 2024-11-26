import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  Min,
  IsOptional,
  IsNotEmpty,
  IsPositive,
  IsISO8601,
} from 'class-validator';

export class CarbReportDto {
  @ApiProperty({
    description: 'Data de início do relatório (obrigatória e deve ser válida)',
    example: '2024-11-01',
  })
  @IsISO8601(
    {},
    { message: 'startDate deve ser uma data válida no formato ISO.' },
  )
  @IsNotEmpty({ message: 'startDate não pode estar vazio.' })
  startDate: string;

  @ApiProperty({
    description: 'Data de término do relatório (obrigatória e deve ser válida)',
    example: '2024-11-30',
  })
  @IsISO8601(
    {},
    { message: 'endDate deve ser uma data válida no formato ISO.' },
  )
  @IsNotEmpty({ message: 'endDate não pode estar vazio.' })
  endDate: string;

  @ApiProperty({
    description:
      'Total de carboidratos consumidos no período (número positivo ou zero)',
    example: 320,
    required: false,
  })
  @IsNumber({}, { message: 'totalCarbs deve ser um número.' })
  @IsPositive({ message: 'totalCarbs deve ser um número positivo.' })
  @Min(0, { message: 'totalCarbs não pode ser negativo.' })
  @IsOptional()
  totalCarbs: number;

  @ApiProperty({
    description:
      'Total de calorias consumidas no período (número positivo ou zero)',
    example: 1200,
    required: false,
  })
  @IsNumber({}, { message: 'totalCalories deve ser um número.' })
  @IsPositive({ message: 'totalCalories deve ser um número positivo.' })
  @Min(0, { message: 'totalCalories não pode ser negativo.' })
  @IsOptional()
  totalCalories: number;
}
