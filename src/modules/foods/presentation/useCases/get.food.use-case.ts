import { Injectable } from '@nestjs/common';
import { FoodRepository } from '../../infra/repositories/food.repository';
import { Food } from '../../domain/entities/food.entity';

@Injectable()
export class GetFoodUseCase {
  constructor(private readonly foodRepository: FoodRepository) {}

  async getAllFoods(): Promise<Food[]> {
    return this.foodRepository.findAll();
  }
}
