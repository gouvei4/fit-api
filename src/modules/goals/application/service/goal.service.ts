import { Injectable } from '@nestjs/common';
import { CreateGoalDto } from '../../domain/dto/create.goal.dto';
import { Goal } from '../../domain/entities/goal.entity';
import { CreateGoalUseCase } from '../../presentation/useCases/create.goal.use-case';
import { GoalRepository } from '../../infra/repository/goal.repository';
import { UpdateGoalUseCase } from '../../presentation/useCases/update.goal.use-case';
import { CreateOrUpdateGoalDto } from '../../domain/dto/update.goal.dto';

@Injectable()
export class GoalService {
  constructor(
    private readonly createGoalUseCase: CreateGoalUseCase,
    private readonly goalRepository: GoalRepository,
    private readonly updateGoalUseCase: UpdateGoalUseCase,
  ) {}

  async createGoal(dto: CreateGoalDto): Promise<Goal> {
    return this.createGoalUseCase.execute(dto);
  }

  async getAllGoals(): Promise<Goal[]> {
    return this.goalRepository.findAll();
  }

  async updateGoal(
    id: string,
    createOrUpdateGoalDto: CreateOrUpdateGoalDto,
  ): Promise<Goal> {
    return this.updateGoalUseCase.execute(id, createOrUpdateGoalDto);
  }
}
