import { Injectable } from '@nestjs/common';
import { CreateCarbHistoryDto } from '../../domain/dto/create.carb.history.dto';
import { CarbHistory } from '../../domain/entities/carb-history.entity';
import { PrismaService } from 'src/infra/database/prismaService';

@Injectable()
export class CarbHistoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCarbHistoryDto): Promise<CarbHistory> {
    const carbHistory = await this.prisma.carbHistory.create({
      data: {
        userId: dto.userId,
        foodId: dto.foodId,
        quantity: dto.quantity,
        date: new Date(dto.date),
        carbs: dto.carbs,
      },
    });

    return new CarbHistory(
      carbHistory.id,
      carbHistory.userId,
      carbHistory.foodId,
      carbHistory.quantity,
      carbHistory.date,
      carbHistory.carbs,
      carbHistory.createdAt,
      carbHistory.updatedAt,
    );
  }
}
