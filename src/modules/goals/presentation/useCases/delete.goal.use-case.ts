import { Injectable } from '@nestjs/common';
import { GoalRepository } from '../../infra/repository/goal.repository';

@Injectable()
export class DeleteGoalUseCase {
  constructor(private readonly goalRepository: GoalRepository) {}

  async execute(id: string): Promise<void> {
    await this.goalRepository.delete(id);
  }
}
