import { Injectable } from '@nestjs/common';
import { CarbHistoryRepository } from '../../infra/repositories/carb-history.repository';

@Injectable()
export class DeleteCarbHistoryUseCase {
  constructor(private readonly carbRepository: CarbHistoryRepository) {}

  async execute(id: string): Promise<void> {
    await this.carbRepository.delete(id);
  }
}
