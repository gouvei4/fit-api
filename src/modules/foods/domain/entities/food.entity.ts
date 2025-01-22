export class Food {
  constructor(
    public readonly id: string,
    public name: string,
    public carbs: number,
    public protein: number,
    public fat: number,
    public calories: number,
    public createdAt: Date,
    public updatedAt: Date,
    public user?: { id: string; name: string },
  ) {}
}
