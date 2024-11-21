import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { UpdateUserDto } from '../../domain/dto/update.user.dto';
import { UserRepository } from '../../infra/repositories/user.repository';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return this.userRepository.update(id, updateUserDto);
  }
}
