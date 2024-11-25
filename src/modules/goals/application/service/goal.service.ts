import { Injectable } from '@nestjs/common';
import { CreateGoalDto } from '../../domain/dto/create.goal.dto';
import { Goal } from '../../domain/entities/goal.entity';
import { CreateGoalUseCase } from '../../presentation/useCases/create.goal.use-case';

@Injectable()
export class GoalService {
  constructor(private readonly createGoalUseCase: CreateGoalUseCase) {}

  async createGoal(dto: CreateGoalDto): Promise<Goal> {
    return this.createGoalUseCase.execute(dto);
  }
}
