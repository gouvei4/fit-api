export class Goal {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public dailyCarbsGoal: number,
    public dailyCaloriesGoal: number,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}
