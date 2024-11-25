import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateGoalDto } from '../../domain/dto/create.goal.dto';
import { Goal } from '../../domain/entities/goal.entity';
import { GoalService } from '../../application/service/goal.service';

@Controller('goals')
export class GoalController {
  constructor(private readonly goalService: GoalService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new goal' })
  @ApiResponse({
    status: 201,
    description: 'Goal created successfully',
    type: Goal,
  })
  async create(@Body() createGoalDto: CreateGoalDto): Promise<Goal> {
    return this.goalService.createGoal(createGoalDto);
  }
}
