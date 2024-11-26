import {
  IsNotEmpty,
  IsNumber,
  IsUUID,
  Min,
  IsDateString,
  IsPositive,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCarbHistoryDto {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'ID do usuário',
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  })
  userId: string;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'ID do alimento',
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d480',
  })
  foodId: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive({ message: 'A quantidade deve ser positiva' })
  @Min(0, { message: 'A quantidade não pode ser negativa' })
  @ApiProperty({
    description: 'Quantidade de alimento consumido',
    example: 200,
  })
  quantity: number;

  @IsNotEmpty()
  @IsDateString(
    {},
    { message: 'A data deve ser uma string de data válida (ISO 8601)' },
  )
  @ApiProperty({
    description: 'Data de consumo do alimento',
    example: '2024-11-24',
  })
  date: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0, { message: 'O valor de carboidratos não pode ser negativo' })
  @IsPositive({ message: 'A quantidade de carboidratos deve ser positiva' })
  @ApiProperty({
    description: 'Quantidade de carboidratos consumidos',
    example: 30,
  })
  carbs: number;
}
