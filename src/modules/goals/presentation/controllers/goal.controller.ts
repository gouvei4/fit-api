import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateGoalDto } from '../../domain/dto/create.goal.dto';
import { Goal } from '../../domain/entities/goal.entity';
import { GoalService } from '../../application/service/goal.service';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { CreateOrUpdateGoalDto } from '../../domain/dto/update.goal.dto';

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

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um objetivo nutricional' })
  @ApiResponse({
    status: 200,
    description: 'Objetivo nutricional atualizado com sucesso',
    type: Goal,
  })
  @ApiResponse({
    status: 404,
    description: 'Objetivo nutricional não encontrado',
  })
  async updateGoal(
    @Param('id') id: string,
    @Body() updateGoalDto: CreateOrUpdateGoalDto,
  ): Promise<Goal> {
    return this.goalService.updateGoal(id, updateGoalDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um objetivo nutricional' })
  @ApiResponse({
    status: 200,
    description: 'Objetivo nutricional deletado com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Objetivo nutricional não encontrado',
  })
  async deleteGoal(@Param('id') id: string): Promise<void> {
    await this.goalService.deleteGoal(id);
  }
}
