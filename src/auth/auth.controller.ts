import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginDto } from 'src/modules/users/domain/dto/login.dto';
import { AuthService } from './auth.service';

@ApiTags('login')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login with CPF and password' })
  @ApiBody({
    description: 'Login credentials',
    type: LoginDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Login successful',
    schema: {
      example: {
        access_token: 'string',
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async login(@Body() loginDto: LoginDto): Promise<{ access_token: string }> {
    return await this.authService.login(loginDto.email, loginDto.password);
  }
}
