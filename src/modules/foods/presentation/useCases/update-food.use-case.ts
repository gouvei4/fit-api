import { Injectable } from '@nestjs/common';
import { UpdateFoodDto } from '../../domain/dto/update-food.dto';
import { FoodRepository } from '../../infra/repositories/food.repository';
import { CreateFoodDto } from '../../domain/dto/create-food.dto';

@Injectable()
export class UpdateFoodUseCase {
  constructor(private readonly foodRepository: FoodRepository) {}

  async execute(
    id: string,
    updateFoodDto: UpdateFoodDto,
  ): Promise<CreateFoodDto> {
    return this.foodRepository.updateFood(id, updateFoodDto);
  }
}
