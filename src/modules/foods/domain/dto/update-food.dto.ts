import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsNumber,
  IsString,
  Min,
  IsPositive,
  Length,
} from 'class-validator';

export class UpdateFoodDto {
  @ApiProperty({ description: 'Nome do alimento', required: false })
  @IsOptional()
  @IsString({ message: 'O nome deve ser uma string' })
  @Length(3, 100, { message: 'O nome deve ter entre 3 e 100 caracteres' })
  name?: string;

  @ApiProperty({ description: 'Quantidade de carboidratos', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'Os carboidratos devem ser um número' })
  @IsPositive({ message: 'A quantidade de carboidratos deve ser positiva' })
  @Min(0, { message: 'Os carboidratos não podem ser negativos' })
  carbs?: number;

  @ApiProperty({ description: 'Quantidade de proteínas', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'A proteína deve ser um número' })
  @IsPositive({ message: 'A quantidade de proteína deve ser positiva' })
  @Min(0, { message: 'A proteína não pode ser negativa' })
  protein?: number;

  @ApiProperty({ description: 'Quantidade de gordura', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'A gordura deve ser um número' })
  @IsPositive({ message: 'A quantidade de gordura deve ser positiva' })
  @Min(0, { message: 'A gordura não pode ser negativa' })
  fat?: number;

  @ApiProperty({ description: 'Quantidade de calorias', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'As calorias devem ser um número' })
  @IsPositive({ message: 'A quantidade de calorias deve ser positiva' })
  @Min(0, { message: 'As calorias não podem ser negativas' })
  calories?: number;
}
