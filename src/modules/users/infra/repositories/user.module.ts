import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prismaService';
import { UserService } from '../../application/service/user.service';
import { UserController } from '../../presentation/controllers/user.controller';
import { CreateUserUseCase } from '../../presentation/useCases/create.user.use-case';
import { UserRepository } from './user.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [PrismaService, UserRepository, CreateUserUseCase, UserService],
})
export class UserModule {}
