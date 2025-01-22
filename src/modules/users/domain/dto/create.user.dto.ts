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
  @Matches(/^[^0-9]*$/, { message: 'O nome não pode conter números.' })
  @Length(3, 50, { message: 'O nome deve ter entre 3 e 50 caracteres.' })
  name: string;

  @ApiProperty({
    description: 'The CPF of the user in the format XXX.XXX.XXX-XX',
    example: '123.321.733-38',
  })
  @IsString()
  @IsNotEmpty({ message: 'The CPF cannot be empty.' })
  @Length(11, 14, { message: 'The cpf must be between 11 and 14 character.' })
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
