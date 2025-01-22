import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../domain/dto/create.user.dto';
import { User } from '@prisma/client';
import { PrismaService } from 'src/infra/database/prismaService';
import { cpfFormatter } from '../../shared/utils/cpf.formatter';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(createUserDto: CreateUserDto): Promise<User> {
    const formattedCpf = cpfFormatter.exec(createUserDto.cpf);
    const user = await this.prisma.user.create({
      data: {
        ...createUserDto,
        cpf: formattedCpf,
      },
    });
    return user;
  }
}
