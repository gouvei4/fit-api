import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
} from '@nestjs/swagger';
import { MealService } from '../../application/service/meal.service';
import { CreateMealDto } from '../../domain/dto/create.meal.dto';
import { Meal } from '../../domain/entities/meal.entity';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';

@ApiTags('Meals')
@Controller('meals')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Post()
  @ApiOperation({ summary: 'Cria uma nova refeição para o usuário' })
  @ApiCreatedResponse({
    description: 'Refeição criada com sucesso.',
    type: Meal,
  })
  @ApiBadRequestResponse({
    description: 'Os dados enviados são inválidos ou incompletos.',
  })
  async createMeal(@Body() createMealDto: CreateMealDto): Promise<Meal> {
    return this.mealService.createMeal(createMealDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get()
  @ApiOperation({ summary: 'Obter todos os alimentos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de alimentos retornada com sucesso',
    type: [Meal],
  })
  async getAllMeals(): Promise<Meal[]> {
    const meals = await this.mealService.getAllMeals();

    return meals.map((meal) => ({
      ...meal,
    }));
  }
}
