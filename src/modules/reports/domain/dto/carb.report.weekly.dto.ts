import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsISO8601, IsString, MaxLength } from 'class-validator';

export class GetWeeklyCarbsDto {
  @ApiProperty({
    description:
      'Data de início da semana para o relatório (obrigatória e deve ser válida)',
    example: '2024-11-01',
  })
  @IsISO8601(
    {},
    { message: 'startDate deve ser uma data válida no formato ISO.' },
  )
  @IsNotEmpty({ message: 'startDate não pode estar vazio.' })
  @IsString({ message: 'startDate deve ser uma string.' })
  @MaxLength(10, { message: 'startDate não pode ter mais de 10 caracteres.' })
  startDate: string;
}
