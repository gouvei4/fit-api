import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { MealService } from '../../application/service/meal.service';
import { CreateMealDto } from '../../domain/dto/create.meal.dto';
import { Meal } from '../../domain/entities/meal.entity';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { UpdateMealDto } from '../../domain/dto/update.meal.dto';

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

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get(':id')
  @ApiOperation({ summary: 'Obter detalhes de uma refeição específica' })
  @ApiOkResponse({
    description: 'Detalhes da refeição obtidos com sucesso.',
    type: Meal,
  })
  @ApiNotFoundResponse({
    description: 'Refeição não encontrada.',
  })
  async getMealById(@Param('id') id: string): Promise<Meal> {
    return this.mealService.getMealById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar uma refeição' })
  @ApiOkResponse({
    description: 'Refeição atualizada com sucesso.',
    type: Meal,
  })
  @ApiNotFoundResponse({ description: 'Refeição não encontrada.' })
  @ApiBadRequestResponse({ description: 'Dados inválidos.' })
  async updateMeal(
    @Param('id') id: string,
    @Body() updateMealDto: UpdateMealDto,
  ): Promise<Meal> {
    return this.mealService.updateMeal(id, updateMealDto);
  }
}
