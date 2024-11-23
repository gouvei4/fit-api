import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prismaService';
import { MealService } from '../application/service/meal.service';
import { MealController } from '../presentation/controllers/meal.controller';
import { CreateMealUseCase } from '../presentation/useCases/create-meal.use-case';
import { MealRepository } from './repository/meal.repository';
import { GetMealUseCase } from '../presentation/useCases/get.meal.use-case';
import { GetMealByIdUseCase } from '../presentation/useCases/get.meal.byid.use-case';

@Module({
  controllers: [MealController],
  providers: [
    MealService,
    PrismaService,
    MealRepository,
    CreateMealUseCase,
    GetMealUseCase,
    GetMealByIdUseCase,
  ],
})
export class MealModule {}
