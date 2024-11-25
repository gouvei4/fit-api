import { Injectable } from '@nestjs/common';
import { CreateCarbHistoryDto } from '../../domain/dto/create.carb.history.dto';
import { CarbHistory } from '../../domain/entities/carb-history.entity';
import { CreateCarbHistoryUseCase } from '../../presentation/useCases/create.carb.history.use-case';

@Injectable()
export class CarbHistoryService {
  constructor(
    private readonly createCarbHistoryUseCase: CreateCarbHistoryUseCase,
  ) {}

  async create(dto: CreateCarbHistoryDto): Promise<CarbHistory> {
    return this.createCarbHistoryUseCase.execute(dto);
  }
}
