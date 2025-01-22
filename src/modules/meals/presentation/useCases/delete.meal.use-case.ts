import { Injectable, NotFoundException } from '@nestjs/common';
import { MealRepository } from '../../infra/repository/meal.repository';

@Injectable()
export class DeleteMealUseCase {
  constructor(private readonly mealRepository: MealRepository) {}

  async execute(id: string): Promise<void> {
    const exists = await this.mealRepository.existsById(id);

    if (!exists) {
      throw new NotFoundException(`Meal with Id ${id} not found`);
    }

    await this.mealRepository.deleteById(id);
  }
}
