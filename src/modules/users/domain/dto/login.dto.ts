import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  Matches,
  Length,
  IsEmail,
} from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Email do usuário (opcional)',
    example: 'joao.silva@example.com',
    required: false,
  })
  @IsEmail({}, { message: 'O email deve ser válido.' })
  email: string;

  @ApiProperty({
    description: 'Senha do usuário',
    example: 'Senha123',
    required: true,
  })
  @IsString()
  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  @Length(8, 30, { message: 'A senha deve ter entre 8 e 30 caracteres.' })
  @Matches(/^(?=.*[A-Z])(?=.*\d).+$/, {
    message: 'A senha deve conter pelo menos 1 letra maiúscula e 1 número.',
  })
  password: string;
}
