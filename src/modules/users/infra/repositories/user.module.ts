import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prismaService';
import { UserService } from '../../application/service/userService';
import { UserController } from '../../presentation/controllers/userController';
import { CreateUserUseCase } from '../../presentation/useCases/createUser-useCase';
import { UserRepository } from './userRepository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [PrismaService, UserRepository, CreateUserUseCase, UserService],
})
export class UserModule {}
