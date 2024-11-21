import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../domain/dto/create.user.dto';
import { User } from '@prisma/client';
import { PrismaService } from 'src/infra/database/prismaService';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        name: createUserDto.name,
        cpf: createUserDto.cpf,
        password: createUserDto.password,
        email: createUserDto.email,
      },
    });
    return user;
  }
}
