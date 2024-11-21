import { Injectable, ConflictException } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from '../../domain/dto/create.user.dto';
import { CreateUserUseCase } from '../../presentation/useCases/create.user.use-case';
import { PrismaService } from 'src/infra/database/prismaService';
import { GetUserByIdUseCase } from '../../presentation/useCases/get-user-by-id.use-case';
import { UpdateUserDto } from '../../domain/dto/update.user.dto';
import { UpdateUserUseCase } from '../../presentation/useCases/update.user.use-case';

@Injectable()
export class UserService {
  userRepository: any;
  hashingService: any;
  constructor(
    private readonly prismaService: PrismaService,
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const existingUserByCpf = await this.userRepository.findByCpf(
      createUserDto.cpf,
    );
    if (existingUserByCpf) {
      throw new ConflictException('Já existe um usuário com esse CPF.');
    }

    if (createUserDto.email) {
      const existingUserByEmail = await this.userRepository.findByEmail(
        createUserDto.email,
      );
      if (existingUserByEmail) {
        throw new ConflictException('Já existe um usuário com esse email.');
      }
    }

    const hashedPassword = await this.hashingService.hashPassword(
      createUserDto.password,
    );
    createUserDto.password = hashedPassword;

    return this.createUserUseCase.execute(createUserDto);
  }

  async getUserById(userId: string): Promise<User> {
    return this.getUserByIdUseCase.execute(userId);
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.updateUserUseCase.execute(id, updateUserDto);
  }
}
