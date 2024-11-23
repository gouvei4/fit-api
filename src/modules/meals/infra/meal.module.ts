import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prismaService';
import { MealService } from '../application/service/meal.service';
import { MealController } from '../presentation/controllers/meal.controller';
import { CreateMealUseCase } from '../presentation/useCases/create.meal.use-case';
import { MealRepository } from './repository/meal.repository';
import { GetMealUseCase } from '../presentation/useCases/get.meal.use-case';
import { GetMealByIdUseCase } from '../presentation/useCases/get.meal.byid.use-case';
import { UpdateMealUseCase } from '../presentation/useCases/update.meal.usecase';
import { DeleteMealUseCase } from '../presentation/useCases/delete.meal.use-case';

@Module({
  controllers: [MealController],
  providers: [
    MealService,
    PrismaService,
    MealRepository,
    CreateMealUseCase,
    GetMealUseCase,
    GetMealByIdUseCase,
    UpdateMealUseCase,
    DeleteMealUseCase,
  ],
})
export class MealModule {}
