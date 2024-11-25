import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prismaService';
import { GoalService } from '../application/service/goal.service';
import { GoalController } from '../presentation/controllers/goal.controller';
import { CreateGoalUseCase } from '../presentation/useCases/create.goal.use-case';
import { GoalRepository } from './repository/goal.repository';

@Module({
  imports: [],
  controllers: [GoalController],
  providers: [GoalService, CreateGoalUseCase, GoalRepository, PrismaService],
})
export class GoalModule {}
