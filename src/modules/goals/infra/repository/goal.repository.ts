import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prismaService';
import { CreateGoalDto } from '../../domain/dto/create.goal.dto';
import { Goal } from '../../domain/entities/goal.entity';

@Injectable()
export class GoalRepository {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateGoalDto): Promise<Goal> {
    const prismaGoal = await this.prisma.goal.create({
      data: {
        userId: dto.userId,
        dailyCarbsGoal: dto.dailyCarbsGoal,
        dailyCaloriesGoal: dto.dailyCaloriesGoal,
      },
    });

    return new Goal(
      prismaGoal.id,
      prismaGoal.userId,
      prismaGoal.dailyCarbsGoal,
      prismaGoal.dailyCaloriesGoal,
      prismaGoal.createdAt,
      prismaGoal.updatedAt,
    );
  }

  async findAll(): Promise<Goal[]> {
    return this.prisma.goal.findMany();
  }
}
