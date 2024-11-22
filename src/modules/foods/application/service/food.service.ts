import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from '../../domain/dto/create-food.dto';
import { FoodRepository } from '../../infra/repositories/food.repository';
import { GetFoodUseCase } from '../../presentation/useCases/get.food.use-case';
import { Food } from '../../domain/entities/food.entity';
import { UpdateFoodDto } from '../../domain/dto/update-food.dto';

@Injectable()
export class FoodService {
  constructor(
    private readonly foodRepository: FoodRepository,
    private readonly foodUseCase: GetFoodUseCase,
  ) {}

  async createFood(createFoodDto: CreateFoodDto, userId: string) {
    return this.foodRepository.create(createFoodDto, userId);
  }

  async getAllFoods(): Promise<Food[]> {
    return this.foodUseCase.getAllFoods();
  }

  async getFoodById(id: string): Promise<Food | null> {
    return this.foodRepository.findById(id);
  }

  async updateFood(
    id: string,
    updateFoodDto: UpdateFoodDto,
  ): Promise<CreateFoodDto> {
    return this.foodRepository.updateFood(id, updateFoodDto);
  }
}
