import { Injectable } from '@nestjs/common';
import { CarbHistory } from '../../domain/entities/carb-history.entity';
import { CarbHistoryRepository } from '../../infra/repositories/carb-history.repository';
import { CreateCarbHistoryDto } from '../../domain/dto/create.carb.history.dto';

@Injectable()
export class GetCarbHistoryUseCase {
  constructor(private readonly carbHistoryRepository: CarbHistoryRepository) {}

  async execute(dto: CreateCarbHistoryDto): Promise<CarbHistory[]> {
    return this.carbHistoryRepository.findAll(dto);
  }
}
