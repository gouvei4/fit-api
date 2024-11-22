import { Injectable } from '@nestjs/common';
import { FoodService } from '../../application/service/food.service';
import { CreateFoodDto } from '../../domain/dto/create-food.dto';

@Injectable()
export class CreateFoodUseCase {
  constructor(private readonly foodService: FoodService) {}

  async execute(createFoodDto: CreateFoodDto, userId: string) {
    return this.foodService.createFood(createFoodDto, userId);
  }
}
