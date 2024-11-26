import { IsUUID, IsOptional, IsNumber, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetCarbHistoryDto {
  @ApiProperty({
    description: 'ID do usuário',
    example: 'd0b0d7e8-7adb-49c4-bf3e-e7fde8117af4',
  })
  @IsOptional()
  @IsUUID()
  userId?: string;

  @ApiProperty({
    description: 'ID do alimento',
    example: 'c112d863-8da5-49e4-9443-5426ec92dde7',
  })
  @IsOptional()
  @IsUUID()
  foodId?: string;

  @ApiProperty({ description: 'Quantidade consumida', example: 300 })
  @IsOptional()
  @IsNumber()
  @Min(1, { message: 'A quantidade deve ser positiva' })
  quantity?: number;

  @ApiProperty({ description: 'Data de consumo', example: '2024-11-26' })
  @IsOptional()
  @IsString()
  date?: string;

  @ApiProperty({
    description: 'Quantidade de carboidratos consumidos',
    example: 50,
  })
  @IsOptional()
  @IsNumber()
  @Min(1, { message: 'A quantidade de carboidratos deve ser positiva' })
  carbs?: number;
}
