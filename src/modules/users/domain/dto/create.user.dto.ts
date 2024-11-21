import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Length,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome completo do usuário',
    example: 'João Silva',
    required: true,
  })
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @Length(3, 50, { message: 'O nome deve ter entre 3 e 50 caracteres.' })
  name: string;

  @ApiProperty({
    description: 'CPF do usuário',
    example: '12345678900',
    required: true,
  })
  @IsString()
  @IsNotEmpty({ message: 'O CPF é obrigatório.' })
  @Matches(/^\d{11}$/, { message: 'O CPF deve conter 11 dígitos numéricos.' })
  cpf: string;

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

  @ApiProperty({
    description: 'Email do usuário (opcional)',
    example: 'joao.silva@example.com',
    required: false,
  })
  @IsEmail({}, { message: 'O email deve ser válido.' })
  email: string;
}
