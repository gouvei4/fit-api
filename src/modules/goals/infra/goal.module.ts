import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prismaService';
import { GoalService } from '../application/service/goal.service';
import { GoalController } from '../presentation/controllers/goal.controller';
import { CreateGoalUseCase } from '../presentation/useCases/create.goal.use-case';
import { GoalRepository } from './repository/goal.repository';
import { UpdateGoalUseCase } from '../presentation/useCases/update.goal.use-case';
import { DeleteGoalUseCase } from '../presentation/useCases/delete.goal.use-case';

@Module({
  imports: [],
  controllers: [GoalController],
  providers: [
    GoalService,
    PrismaService,
    GoalRepository,
    CreateGoalUseCase,
    UpdateGoalUseCase,
    DeleteGoalUseCase,
  ],
})
export class GoalModule {}
