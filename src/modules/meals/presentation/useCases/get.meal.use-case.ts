import { Injectable } from '@nestjs/common';
import { MealRepository } from '../../infra/repository/meal.repository';
import { Meal } from '../../domain/entities/meal.entity';

@Injectable()
export class GetMealUseCase {
  constructor(private readonly mealRepository: MealRepository) {}

  async getAllMeals(): Promise<Meal[]> {
    return this.mealRepository.findAll();
  }
}
