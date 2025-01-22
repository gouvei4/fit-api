import { IsNotEmpty, IsNumber, IsUUID, Min, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGoalDto {
  @ApiProperty({
    description: 'ID do usuário para quem os objetivos são definidos',
    example: 'd33f97f3-8f25-4b97-bd5d-c21597cb12a9',
  })
  @IsNotEmpty({ message: 'O ID do usuário não pode ser vazio.' })
  @IsUUID('all', { message: 'O ID do usuário deve ser um UUID válido.' })
  userId: string;

  @ApiProperty({
    description: 'Objetivo diário de carboidratos em gramas',
    example: 250,
  })
  @IsNotEmpty({
    message: 'O objetivo diário de carboidratos não pode ser vazio.',
  })
  @IsNumber(
    {},
    { message: 'O objetivo diário de carboidratos deve ser um número.' },
  )
  @Min(0, { message: 'O objetivo de carboidratos não pode ser negativo.' })
  @IsPositive({
    message: 'O objetivo de carboidratos deve ser um valor positivo.',
  })
  dailyCarbsGoal: number;

  @ApiProperty({
    description: 'Objetivo diário de calorias em calorias',
    example: 2000,
  })
  @IsNotEmpty({ message: 'O objetivo diário de calorias não pode ser vazio.' })
  @IsNumber(
    {},
    { message: 'O objetivo diário de calorias deve ser um número.' },
  )
  @Min(0, { message: 'O objetivo de calorias não pode ser negativo.' })
  @IsPositive({ message: 'O objetivo de calorias deve ser um valor positivo.' })
  dailyCaloriesGoal: number;
}
