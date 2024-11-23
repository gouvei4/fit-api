import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateMealDto } from '../../domain/dto/create.meal.dto';
import { Meal } from '../../domain/entities/meal.entity';
import { MealEntry } from '../../domain/entities/meal.entry.entity';
import { MealRepository } from '../../infra/repository/meal.repository';

@Injectable()
export class CreateMealUseCase {
  constructor(private readonly mealRepository: MealRepository) {}

  async execute(createMealDto: CreateMealDto): Promise<Meal> {
    const { userId, name, date, entries } = createMealDto;

    const now = new Date();

    const meal = new Meal(
      randomUUID(),
      userId,
      name,
      new Date(date),
      entries.map(
        (entry) =>
          new MealEntry(
            randomUUID(),
            '',
            entry.foodId,
            entry.quantity,
            now,
            now,
          ),
      ),
      now,
      now,
    );

    return this.mealRepository.createMeal(meal, meal.entries);
  }
}
