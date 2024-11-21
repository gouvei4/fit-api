import {
  IsString,
  IsOptional,
  IsEmail,
  Length,
  IsNotEmpty,
  Matches,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @Length(3, 50, { message: 'O nome deve ter entre 3 e 50 caracteres.' })
  name?: string;

  @IsEmail({}, { message: 'O email deve ser válido.' })
  @IsOptional()
  email?: string;

  @IsString()
  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  @Length(8, 30, { message: 'A senha deve ter entre 8 e 30 caracteres.' })
  @Matches(/^(?=.*[A-Z])(?=.*\d).+$/, {
    message: 'A senha deve conter pelo menos 1 letra maiúscula e 1 número.',
  })
  password: string;
}
