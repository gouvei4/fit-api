import { Injectable, ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { CreateUserDto } from '../../domain/dto/create.user.dto';
import { CreateUserUseCase } from '../../presentation/useCases/create.user.use-case';
import { PrismaService } from 'src/infra/database/prismaService';
import { GetUserByIdUseCase } from '../../presentation/useCases/get-user-by-id.use-case';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
  ) {}

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const existingUserByCpf = await this.prismaService.user.findUnique({
      where: { cpf: createUserDto.cpf },
    });
    if (existingUserByCpf) {
      throw new ConflictException('Já existe um usuário com esse CPF.');
    }

    if (createUserDto.email) {
      const existingUserByEmail = await this.prismaService.user.findUnique({
        where: { email: createUserDto.email },
      });
      if (existingUserByEmail) {
        throw new ConflictException('Já existe um usuário com esse email.');
      }
    }

    const hashedPassword = await this.hashPassword(createUserDto.password);

    createUserDto.password = hashedPassword;

    return this.createUserUseCase.execute(createUserDto);
  }

  async getUserById(userId: string): Promise<User> {
    return this.getUserByIdUseCase.execute(userId);
  }
}
