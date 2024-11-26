export class CarbReport {
  constructor(
    public readonly id: string,
    public userId: string,
    public startDate: Date,
    public endDate: Date,
    public totalCarbs: number,
    public totalCalories: number,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
