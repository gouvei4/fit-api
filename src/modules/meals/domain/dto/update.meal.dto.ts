import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsOptional,
  IsString,
  ValidateNested,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

class MealEntry {
  @ApiProperty({
    description: 'Unique identifier of the food',
    example: '2f1e8d60-fc1b-11ec-b939-0242ac120002',
  })
  @IsOptional()
  foodId?: string;

  @ApiProperty({
    description: 'Quantity of the food in the meal',
    example: 2,
  })
  @IsOptional()
  quantity?: number;
}

export class UpdateMealDto {
  @ApiProperty({
    description: 'Name of the meal',
    example: 'Lunch',
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'Date of the meal in ISO 8601 format',
    example: '2024-11-22T12:30:00Z',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  date?: string;

  @ApiProperty({
    description: 'List of food entries in the meal',
    type: [MealEntry],
    required: false,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MealEntry)
  @IsOptional()
  entries?: MealEntry[];
}
