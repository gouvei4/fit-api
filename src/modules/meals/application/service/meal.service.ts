import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateMealDto } from '../../domain/dto/create.meal.dto';
import { Meal } from '../../domain/entities/meal.entity';
import { MealEntry } from '../../domain/entities/meal.entry.entity';
import { MealRepository } from '../../infra/repository/meal.repository';
import { GetMealUseCase } from '../../presentation/useCases/get.meal.use-case';

@Injectable()
export class MealService {
  constructor(
    private readonly mealRepository: MealRepository,
    private readonly mealUseCase: GetMealUseCase,
  ) {}

  async createMeal(createMealDto: CreateMealDto): Promise<Meal> {
    const { userId, name, date, entries } = createMealDto;

    const now = new Date();

    const mealEntries = entries.map(
      (entry) =>
        new MealEntry(randomUUID(), '', entry.foodId, entry.quantity, now, now),
    );

    const meal = new Meal(
      randomUUID(),
      userId,
      name,
      new Date(date),
      mealEntries,
      now,
      now,
    );

    const createdMeal = await this.mealRepository.createMeal(meal, mealEntries);

    return new Meal(
      createdMeal.id,
      createdMeal.userId,
      createdMeal.name,
      createdMeal.date,
      mealEntries,
      createdMeal.createdAt,
      createdMeal.updatedAt,
    );
  }

  async getAllMeals(): Promise<Meal[]> {
    return this.mealUseCase.getAllMeals();
  }
}
