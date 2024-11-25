import { IsOptional, IsNumber, IsUUID, Min } from 'class-validator';

export class CreateOrUpdateGoalDto {
  @IsOptional()
  @IsUUID()
  userId?: string;

  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'O objetivo de carboidratos não pode ser negativo' })
  dailyCarbsGoal?: number;

  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'O objetivo de calorias não pode ser negativo' })
  dailyCaloriesGoal?: number;
}
