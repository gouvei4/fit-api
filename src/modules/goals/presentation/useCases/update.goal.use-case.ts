import { Injectable } from '@nestjs/common';
import { GoalRepository } from '../../infra/repository/goal.repository';
import { CreateOrUpdateGoalDto } from '../../domain/dto/update.goal.dto';
import { Goal } from '@prisma/client';

@Injectable()
export class UpdateGoalUseCase {
  constructor(private readonly goalRepository: GoalRepository) {}

  async execute(
    id: string,
    createOrUpdateGoalDto: CreateOrUpdateGoalDto,
  ): Promise<Goal> {
    const existingGoal = await this.goalRepository.findById(id);
    if (!existingGoal) {
      throw new Error('Goal not found');
    }

    return this.goalRepository.update(id, createOrUpdateGoalDto);
  }
}
