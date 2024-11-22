import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  Max,
  Length,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFoodDto {
  @ApiProperty({ description: 'Nome do alimento', example: 'Omelete' })
  @IsString()
  @IsNotEmpty({ message: 'O nome do alimento não pode estar vazio.' })
  @Length(3, 50, { message: 'O nome deve ter entre 3 e 50 caracteres.' })
  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'O nome deve conter apenas letras e espaços.',
  })
  name: string;

  @ApiProperty({ description: 'Quantidade de carboidratos (g)', example: 5 })
  @IsNumber({}, { message: 'Os carboidratos devem ser um número válido.' })
  @IsNotEmpty({ message: 'A quantidade de carboidratos é obrigatória.' })
  @Min(0, { message: 'Os carboidratos devem ser maior ou igual a 0.' })
  @Max(1000, {
    message: 'Os carboidratos não podem exceder 1000g.',
  })
  carbs: number;

  @ApiProperty({ description: 'Quantidade de proteínas (g)', example: 12 })
  @IsNumber({}, { message: 'As proteínas devem ser um número válido.' })
  @IsNotEmpty({ message: 'A quantidade de proteínas é obrigatória.' })
  @Min(0, { message: 'As proteínas devem ser maior ou igual a 0.' })
  @Max(500, {
    message: 'As proteínas não podem exceder 500g.',
  })
  protein: number;

  @ApiProperty({ description: 'Quantidade de gordura (g)', example: 10 })
  @IsNumber({}, { message: 'A gordura deve ser um número válido.' })
  @IsNotEmpty({ message: 'A quantidade de gordura é obrigatória.' })
  @Min(0, { message: 'A gordura deve ser maior ou igual a 0.' })
  @Max(500, {
    message: 'A gordura não pode exceder 500g.',
  })
  fat: number;

  @ApiProperty({ description: 'Quantidade de calorias (kcal)', example: 150 })
  @IsNumber({}, { message: 'As calorias devem ser um número válido.' })
  @IsNotEmpty({ message: 'A quantidade de calorias é obrigatória.' })
  @Min(0, { message: 'As calorias devem ser maior ou igual a 0.' })
  @Max(10000, {
    message: 'As calorias não podem exceder 10.000 kcal.',
  })
  calories: number;
}
