import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prismaService';
import { Meal } from '../../domain/entities/meal.entity';
import { MealEntry } from '../../domain/entities/meal.entry.entity';
import { UpdateMealDto } from '../../domain/dto/update.meal.dto';

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

  async findById(id: string): Promise<Meal | null> {
    const meal = await this.prisma.meal.findUnique({
      where: { id },
      include: { entries: { include: { food: true } } },
    });

    if (!meal) return null;

    return new Meal(
      meal.id,
      meal.userId,
      meal.name,
      meal.date,
      meal.entries.map(
        (entry) =>
          new MealEntry(
            entry.id,
            entry.foodId,
            entry.mealId,
            entry.quantity,
            entry.createdAt,
            entry.updatedAt,
          ),
      ),
      meal.createdAt,
      meal.updatedAt,
    );
  }

  async update(id: string, updateMealDto: UpdateMealDto): Promise<Meal> {
    const updatedMeal = await this.prisma.meal.update({
      where: { id },
      data: {
        name: updateMealDto.name,
        date: updateMealDto.date ? new Date(updateMealDto.date) : undefined,
        entries: updateMealDto.entries
          ? {
              deleteMany: {},
              create: updateMealDto.entries.map((entry) => ({
                foodId: entry.foodId,
                quantity: entry.quantity,
              })),
            }
          : undefined,
      },
      include: { entries: true },
    });
    return updatedMeal;
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.meal.delete({ where: { id } });
  }

  async existsById(id: string): Promise<boolean> {
    const count = await this.prisma.meal.count({ where: { id } });
    return count > 0;
  }
}
