import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prismaService';
import { Meal } from '../../domain/entities/meal.entity';
import { MealEntry } from '../../domain/entities/meal.entry.entity';

@Injectable()
export class MealRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createMeal(meal: Meal, entries: MealEntry[]): Promise<Meal> {
    const createdMeal = await this.prisma.meal.create({
      data: {
        id: meal.id,
        userId: meal.userId,
        name: meal.name,
        date: meal.date,
        entries: {
          create: entries.map((entry) => ({
            id: entry.id,
            foodId: entry.foodId,
            quantity: entry.quantity,
          })),
        },
      },
      include: { entries: true },
    });

    return new Meal(
      createdMeal.id,
      createdMeal.userId,
      createdMeal.name,
      new Date(createdMeal.date),
      createdMeal.entries.map(
        (entry) =>
          new MealEntry(
            entry.id,
            entry.mealId,
            entry.foodId,
            entry.quantity,
            new Date(entry.createdAt),
            new Date(entry.updatedAt),
          ),
      ),
      new Date(createdMeal.createdAt),
      new Date(createdMeal.updatedAt),
    );
  }

  async findAll(): Promise<Meal[]> {
    const meals = await this.prisma.meal.findMany({
      include: { entries: true },
    });

    return meals.map(
      (meal) =>
        new Meal(
          meal.id,
          meal.userId,
          meal.name,
          new Date(meal.date),
          meal.entries.map(
            (entry) =>
              new MealEntry(
                entry.id,
                entry.mealId,
                entry.foodId,
                entry.quantity,
                new Date(entry.createdAt),
                new Date(entry.updatedAt),
              ),
          ),
          new Date(meal.createdAt),
          new Date(meal.updatedAt),
        ),
    );
  }
}
