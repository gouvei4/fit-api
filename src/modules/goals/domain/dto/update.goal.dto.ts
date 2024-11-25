import { IsOptional, IsNumber, IsUUID, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrUpdateGoalDto {
  @IsOptional()
  @IsUUID()
  @ApiProperty({
    description: 'ID do usuário associado ao objetivo',
    required: false,
  })
  userId?: string;

  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'O objetivo de carboidratos não pode ser negativo' })
  @ApiProperty({
    description: 'Objetivo diário de carboidratos (em gramas)',
    example: 150,
    required: false,
  })
  dailyCarbsGoal?: number;

  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'O objetivo de calorias não pode ser negativo' })
  @ApiProperty({
    description: 'Objetivo diário de calorias (em kcal)',
    example: 2000,
    required: false,
  })
  dailyCaloriesGoal?: number;
}
