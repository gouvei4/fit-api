import { IsNotEmpty, IsNumber, IsUUID, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGoalDto {
  @ApiProperty({
    description: 'ID do usuário para quem os objetivos são definidos',
    example: 'd33f97f3-8f25-4b97-bd5d-c21597cb12a9',
  })
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @ApiProperty({
    description: 'Objetivo diário de carboidratos em gramas',
    example: 250,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0, { message: 'O objetivo de carboidratos não pode ser negativo' })
  dailyCarbsGoal: number;

  @ApiProperty({
    description: 'Objetivo diário de calorias em calorias',
    example: 2000,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0, { message: 'O objetivo de calorias não pode ser negativo' })
  dailyCaloriesGoal: number;
}
