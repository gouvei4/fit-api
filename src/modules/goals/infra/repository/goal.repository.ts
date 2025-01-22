import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prismaService';
import { CreateGoalDto } from '../../domain/dto/create.goal.dto';
import { Goal } from '../../domain/entities/goal.entity';
import { CreateOrUpdateGoalDto } from '../../domain/dto/update.goal.dto';

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

  async findById(id: string): Promise<Goal | null> {
    return this.prisma.goal.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    createOrUpdateGoalDto: CreateOrUpdateGoalDto,
  ): Promise<Goal> {
    return this.prisma.goal.update({
      where: { id },
      data: createOrUpdateGoalDto,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.goal.delete({
      where: { id },
    });
  }
}
