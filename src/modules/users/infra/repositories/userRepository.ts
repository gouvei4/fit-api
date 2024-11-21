import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from '../../domain/dto/createUser.dto';
import { PrismaService } from 'src/infra/database/prismaService';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByCpf(cpf: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { cpf },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }
}
