export class CarbHistory {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly foodId: string,
    public quantity: number,
    public date: Date,
    public carbs: number,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}
