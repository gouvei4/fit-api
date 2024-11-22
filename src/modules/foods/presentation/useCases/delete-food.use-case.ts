import { Injectable, NotFoundException } from '@nestjs/common';
import { FoodRepository } from '../../infra/repositories/food.repository';

@Injectable()
export class DeleteFoodUseCase {
  constructor(private readonly foodRepository: FoodRepository) {}

  async execute(id: string): Promise<void> {
    const exists = await this.foodRepository.existsById(id);

    if (!exists) {
      throw new NotFoundException(`Food with ID ${id} not found`);
    }

    await this.foodRepository.deleteById(id);
  }
}
