import {
  Body,
  Controller,
  Delete,
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
  ApiParam,
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

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
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

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Delete a meal by ID',
    description: 'Deletes a meal item from the database using its unique ID.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Unique identifier of the meal to be deleted',
    example: '2f1e8d60-fc1b-11ec-b939-0242ac120002',
  })
  @ApiResponse({
    status: 200,
    description: 'The meal item was successfully deleted.',
  })
  @ApiResponse({
    status: 404,
    description: 'Meal with the given ID was not found.',
  })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.mealService.deleteMeal(id);
  }
}
