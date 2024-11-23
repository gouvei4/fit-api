import { Injectable } from '@nestjs/common';
import { Meal } from '../../domain/entities/meal.entity';
import { MealRepository } from '../../infra/repository/meal.repository';

@Injectable()
export class GetMealByIdUseCase {
  constructor(private readonly mealRepository: MealRepository) {}

  async execute(id: string): Promise<Meal> {
    const meal = await this.mealRepository.findById(id);
    if (!meal) {
      throw new Error('Refeição não encontrada.');
    }
    return meal;
  }
}
