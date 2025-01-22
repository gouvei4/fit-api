import { Injectable } from '@nestjs/common';
import { CreateCarbHistoryDto } from '../../domain/dto/create.carb.history.dto';
import { CarbHistory } from '../../domain/entities/carb-history.entity';
import { CarbHistoryRepository } from '../../infra/repositories/carb-history.repository';

@Injectable()
export class CreateCarbHistoryUseCase {
  constructor(private readonly carbHistoryRepository: CarbHistoryRepository) {}

  async execute(dto: CreateCarbHistoryDto): Promise<CarbHistory> {
    return this.carbHistoryRepository.create(dto);
  }
}
