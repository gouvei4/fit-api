import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../infra/repositories/user.repository';

@Injectable()
export class DeleteUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    await this.userRepository.deleteById(id);
  }
}
