import { Body, Controller, Post } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { UserService } from '../../application/service/userService';
import { CreateUserDto } from '../../domain/dto/createUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }
}
