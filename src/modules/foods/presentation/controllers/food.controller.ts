import {
  Controller,
  Post,
  Body,
  Request,
  UseGuards,
  Get,
  Param,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';
import { FoodService } from '../../application/service/food.service';
import { CreateFoodDto } from '../../domain/dto/create-food.dto';
import { Food } from '../../domain/entities/food.entity';
import { UpdateFoodDto } from '../../domain/dto/update-food.dto';

@ApiTags('Food')
@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Post()
  @ApiOperation({ summary: 'Cria um novo alimento' })
  @ApiBody({ type: CreateFoodDto })
  @ApiResponse({
    status: 201,
    description: 'Alimento criado com sucesso',
    type: Food,
  })
  @ApiResponse({
    status: 400,
    description: 'Erro na validação dos dados',
  })
  @ApiResponse({
    status: 401,
    description: 'Usuário não autorizado',
  })
  async createFood(
    @Body() createFoodDto: CreateFoodDto,
    @Request() req,
  ): Promise<Food> {
    const userId = req.user.id;
    console.log('User ID:', userId);
    if (!userId) {
      throw new Error('User ID is required');
    }
    return this.foodService.createFood(createFoodDto, userId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get()
  @ApiOperation({ summary: 'Obter todos os alimentos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de alimentos retornada com sucesso',
    type: [Food],
  })
  async getAllFoods(): Promise<Food[]> {
    const foods = await this.foodService.getAllFoods();

    return foods.map((food) => ({
      ...food,
    }));
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get(':id')
  @ApiOperation({ summary: 'Obter detalhes de um alimento específico' })
  @ApiParam({ name: 'id', type: String, description: 'ID do alimento' })
  @ApiResponse({
    status: 200,
    description: 'Detalhes do alimento',
    type: CreateFoodDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Alimento não encontrado',
  })
  async getFood(@Param('id') id: string): Promise<Food> {
    const food = await this.foodService.getFoodById(id);
    if (!food) {
      throw new NotFoundException('Food not found');
    }
    return food;
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um alimento específico' })
  @ApiParam({ name: 'id', type: String, description: 'ID do alimento' })
  @ApiResponse({
    status: 200,
    description: 'Alimento atualizado com sucesso',
    type: CreateFoodDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Alimento não encontrado',
  })
  async updateFood(
    @Param('id') id: string,
    @Body() updateFoodDto: UpdateFoodDto,
  ): Promise<CreateFoodDto> {
    const food = await this.foodService.updateFood(id, updateFoodDto);
    if (!food) {
      throw new NotFoundException('Food not found');
    }
    return food;
  }
}
