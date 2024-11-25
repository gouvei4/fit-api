import { Injectable } from '@nestjs/common';
import { CreateGoalDto } from '../../domain/dto/create.goal.dto';
import { Goal } from '../../domain/entities/goal.entity';
import { GoalRepository } from '../../infra/repository/goal.repository';

@Injectable()
export class CreateGoalUseCase {
  constructor(private readonly goalRepository: GoalRepository) {}

  async execute(dto: CreateGoalDto): Promise<Goal> {
    return this.goalRepository.create(dto);
  }
}
