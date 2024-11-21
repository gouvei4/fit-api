import { IsString, IsNotEmpty, Matches, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty({ message: 'O CPF é obrigatório.' })
  @Matches(/^\d{11}$/, { message: 'O CPF deve conter 11 dígitos numéricos.' })
  cpf: string;

  @IsString()
  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  @Length(8, 30, { message: 'A senha deve ter entre 8 e 30 caracteres.' })
  @Matches(/^(?=.*[A-Z])(?=.*\d).+$/, {
    message: 'A senha deve conter pelo menos 1 letra maiúscula e 1 número.',
  })
  password: string;
}
