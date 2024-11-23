import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateMealDto } from '../../domain/dto/create.meal.dto';
import { Meal } from '../../domain/entities/meal.entity';
import { MealEntry } from '../../domain/entities/meal.entry.entity';
import { MealRepository } from '../../infra/repository/meal.repository';
import { GetMealUseCase } from '../../presentation/useCases/get.meal.use-case';
import { GetMealByIdUseCase } from '../../presentation/useCases/get.meal.byid.use-case';
import { UpdateMealDto } from '../../domain/dto/update.meal.dto';
import { UpdateMealUseCase } from '../../presentation/useCases/update.meal.usecase';
import { DeleteMealUseCase } from '../../presentation/useCases/delete.meal.use-case';

@Injectable()
export class MealService {
  constructor(
    private readonly mealRepository: MealRepository,
    private readonly mealUseCase: GetMealUseCase,
    private readonly getMealByIdUseCase: GetMealByIdUseCase,
    private readonly updateMealUseCase: UpdateMealUseCase,
    private readonly deleteMealUseCase: DeleteMealUseCase,
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

  async getMealById(id: string): Promise<Meal> {
    try {
      return await this.getMealByIdUseCase.execute(id);
    } catch (error) {
      if (error.message === 'Refeição não encontrada.') {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  async updateMeal(id: string, updateMealDto: UpdateMealDto): Promise<Meal> {
    try {
      return await this.updateMealUseCase.execute(id, updateMealDto);
    } catch (error) {
      if (error.message === 'Refeição não encontrada.') {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  async deleteMeal(id: string): Promise<void> {
    await this.deleteMealUseCase.execute(id);
  }
}
