import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from '../../domain/dto/create-food.dto';
import { PrismaService } from 'src/infra/database/prismaService';
import { Food } from '../../domain/entities/food.entity';
import { UpdateFoodDto } from '../../domain/dto/update-food.dto';

@Injectable()
export class FoodRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFoodDto: CreateFoodDto, userId: string) {
    if (!userId) {
      throw new Error('User ID is required');
    }

    return this.prisma.food.create({
      data: {
        name: createFoodDto.name,
        carbs: createFoodDto.carbs,
        protein: createFoodDto.protein,
        fat: createFoodDto.fat,
        calories: createFoodDto.calories,
        user: {
          connect: { id: userId },
        },
      },
    });
  }

  async findAll(): Promise<Food[]> {
    return this.prisma.food.findMany();
  }

  async findById(id: string): Promise<Food | null> {
    return this.prisma.food
      .findUnique({
        where: { id },
        include: {
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      })
      .then((food) =>
        food
          ? new Food(
              food.id,
              food.name,
              food.carbs,
              food.protein,
              food.fat,
              food.calories,
              food.createdAt,
              food.updatedAt,
              { id: food.user.id, name: food.user.name },
            )
          : null,
      );
  }

  async updateFood(
    id: string,
    updateFoodDto: UpdateFoodDto,
  ): Promise<CreateFoodDto> {
    const updatedFood = await this.prisma.food.update({
      where: { id },
      data: updateFoodDto,
    });
    return updatedFood;
  }
}
