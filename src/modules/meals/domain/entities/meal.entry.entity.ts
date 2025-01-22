export class MealEntry {
  constructor(
    public readonly id: string,
    public readonly mealId: string,
    public readonly foodId: string,
    public quantity: number,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}
