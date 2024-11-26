import { Injectable } from '@nestjs/common';
import { CarbHistory } from '../../domain/entities/carb-history.entity';
import { CarbHistoryRepository } from '../../infra/repositories/carb-history.repository';
import { GetCarbHistoryDto } from '../../domain/dto/get.carb.history.dto';

@Injectable()
export class GetCarbHistoryUseCase {
  constructor(private readonly carbHistoryRepository: CarbHistoryRepository) {}

  async execute(dto: GetCarbHistoryDto): Promise<CarbHistory[]> {
    return this.carbHistoryRepository.findAll(dto);
  }
}
