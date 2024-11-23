import { MealEntry } from '@prisma/client';

export class Meal {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public name: string,
    public date: Date,
    public entries: MealEntry[],
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}
