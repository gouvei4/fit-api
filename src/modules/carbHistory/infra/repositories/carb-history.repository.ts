import { Injectable } from '@nestjs/common';
import { CreateCarbHistoryDto } from '../../domain/dto/create.carb.history.dto';
import { CarbHistory } from '../../domain/entities/carb-history.entity';
import { PrismaService } from 'src/infra/database/prismaService';
import { GetCarbHistoryDto } from '../../domain/dto/get.carb.history.dto';

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

  async findAll(dto: GetCarbHistoryDto): Promise<CarbHistory[]> {
    const where = {};

    if (dto.userId) {
      where['userId'] = dto.userId;
    }

    if (dto.date) {
      where['date'] = new Date(dto.date);
    }

    const carbHistories = await this.prisma.carbHistory.findMany({
      where,
    });

    return carbHistories.map(
      (history) =>
        new CarbHistory(
          history.id,
          history.userId,
          history.foodId,
          history.quantity,
          history.date,
          history.carbs,
          history.createdAt,
          history.updatedAt,
        ),
    );
  }
}
