import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateGoalDto } from '../../domain/dto/create.goal.dto';
import { Goal } from '../../domain/entities/goal.entity';
import { GoalService } from '../../application/service/goal.service';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';

@Controller('goals')
export class GoalController {
  constructor(private readonly goalService: GoalService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
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

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get()
  @ApiOperation({ summary: 'Obter todos os objetivos nutricionais' })
  @ApiResponse({
    status: 200,
    description: 'Objetivos nutricionais obtidos com sucesso.',
    type: [Goal],
  })
  async getAllGoals(): Promise<Goal[]> {
    return this.goalService.getAllGoals();
  }
}
