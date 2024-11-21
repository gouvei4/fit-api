import { Injectable, ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { CreateUserDto } from '../../domain/dto/createUser.dto';
import { CreateUserUseCase } from '../../presentation/useCases/createUser-useCase';
import { PrismaService } from 'src/infra/database/prismaService';

@Injectable()
export class UserService {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly prismaService: PrismaService,
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
}
