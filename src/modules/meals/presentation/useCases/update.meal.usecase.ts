import { Injectable } from '@nestjs/common';
import { UpdateMealDto } from '../../domain/dto/update.meal.dto';
import { Meal } from '../../domain/entities/meal.entity';
import { MealRepository } from '../../infra/repository/meal.repository';

@Injectable()
export class UpdateMealUseCase {
  constructor(private readonly mealRepository: MealRepository) {}

  async execute(id: string, updateMealDto: UpdateMealDto): Promise<Meal> {
    const meal = await this.mealRepository.findById(id);
    if (!meal) {
      throw new Error('Refeição não encontrada.');
    }

    const updatedMeal = await this.mealRepository.update(id, updateMealDto);
    return updatedMeal;
  }
}
