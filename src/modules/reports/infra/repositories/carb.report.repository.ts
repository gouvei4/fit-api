import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prismaService';

@Injectable()
export class CarbReportRepository {
  constructor(private prisma: PrismaService) {}

  async getDailyCarbReport(
    userId: string,
    startDate: Date,
    endDate: Date,
  ): Promise<{ totalCarbs: number; totalCalories: number }> {
    const carbHistory = await this.prisma.carbHistory.findMany({
      where: {
        userId,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      select: {
        carbs: true,
        food: {
          select: {
            calories: true,
          },
        },
      },
    });

    const totalCarbs = carbHistory.reduce((acc, item) => acc + item.carbs, 0);
    const totalCalories = carbHistory.reduce(
      (acc, item) => acc + (item.food?.calories ?? 0),
      0,
    );

    return { totalCarbs, totalCalories };
  }
}
