import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEmail,
  Length,
  IsNotEmpty,
  Matches,
} from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    description: 'Nome completo do usuário',
    example: 'João Silva Teste',
    required: true,
  })
  @IsString()
  @IsOptional()
  @Matches(/^[^0-9]*$/, { message: 'O nome não pode conter números.' })
  @Length(3, 50, { message: 'O nome deve ter entre 3 e 50 caracteres.' })
  name?: string;

  @ApiProperty({
    description: 'Email do usuário (opcional)',
    example: 'joao.silva99@example.com',
    required: false,
  })
  @IsEmail({}, { message: 'O email deve ser válido.' })
  @IsOptional()
  email?: string;

  @ApiProperty({
    description: 'Senha do usuário',
    example: 'Senha222',
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
