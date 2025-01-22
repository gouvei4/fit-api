import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsOptional,
  IsString,
  ValidateNested,
  IsUUID,
  IsNumber,
  Min,
  Max,
  IsISO8601,
} from 'class-validator';
import { Type } from 'class-transformer';

class MealEntry {
  @ApiProperty({
    description: 'Unique identifier of the food',
    example: '2f1e8d60-fc1b-11ec-b939-0242ac120002',
    required: false,
  })
  @IsOptional()
  @IsUUID('all', { message: 'foodId must be a valid UUID.' })
  foodId?: string;

  @ApiProperty({
    description: 'Quantity of the food in the meal',
    example: 2,
    required: false,
  })
  @IsOptional()
  @IsNumber({}, { message: 'quantity must be a number.' })
  @Min(1, { message: 'quantity must be at least 1.' })
  @Max(1000, { message: 'quantity must not exceed 1000.' })
  quantity?: number;
}

export class UpdateMealDto {
  @ApiProperty({
    description: 'Name of the meal',
    example: 'Lunch',
    required: false,
  })
  @IsString({ message: 'name must be a string.' })
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'Date of the meal in ISO 8601 format',
    example: '2024-11-22T12:30:00Z',
    required: false,
  })
  @IsISO8601(
    {},
    { message: 'startDate deve ser uma data válida no formato ISO.' },
  )
  @IsOptional()
  date?: string;

  @ApiProperty({
    description: 'List of food entries in the meal',
    type: [MealEntry],
    required: false,
  })
  @IsArray({ message: 'entries must be an array of food entries.' })
  @ValidateNested({ each: true, message: 'Each food entry must be valid.' })
  @Type(() => MealEntry)
  @IsOptional()
  entries?: MealEntry[];
}
