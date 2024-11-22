import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prismaService';
import { FoodService } from '../application/service/food.service';
import { FoodController } from '../presentation/controllers/food.controller';
import { CreateFoodUseCase } from '../presentation/useCases/create-food.use-case';
import { FoodRepository } from './repositories/food.repository';
import { GetFoodUseCase } from '../presentation/useCases/get.food.use-case';
import { UpdateFoodUseCase } from '../presentation/useCases/update-food.use-case';

@Module({
  controllers: [FoodController],
  providers: [
    PrismaService,
    FoodService,
    FoodRepository,
    CreateFoodUseCase,
    GetFoodUseCase,
    UpdateFoodUseCase,
  ],
})
export class FoodModule {}
