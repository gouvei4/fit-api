import { Injectable } from '@nestjs/common';
import { CreateCarbHistoryDto } from '../../domain/dto/create.carb.history.dto';
import { CarbHistory } from '../../domain/entities/carb-history.entity';
import { CreateCarbHistoryUseCase } from '../../presentation/useCases/create.carb.history.use-case';
import { GetCarbHistoryUseCase } from '../../presentation/useCases/get.carb.history.use-case';
import { GetCarbHistoryDto } from '../../domain/dto/get.carb.history.dto';
import { DeleteCarbHistoryUseCase } from '../../presentation/useCases/delete.carb.use-case';

@Injectable()
export class CarbHistoryService {
  constructor(
    private readonly createCarbHistoryUseCase: CreateCarbHistoryUseCase,
    private readonly getCarbHistoryUseCase: GetCarbHistoryUseCase,
    private readonly deleteCarbHistoryUseCase: DeleteCarbHistoryUseCase,
  ) {}

  async create(dto: CreateCarbHistoryDto): Promise<CarbHistory> {
    return this.createCarbHistoryUseCase.execute(dto);
  }

  async findAll(dto: GetCarbHistoryDto): Promise<CarbHistory[]> {
    return this.getCarbHistoryUseCase.execute(dto);
  }

  async deleteCarb(id: string): Promise<void> {
    await this.deleteCarbHistoryUseCase.execute(id);
  }
}
