import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsString,
  IsUUID,
  ValidateNested,
  IsNumber,
  Max,
  Min,
  IsISO8601,
} from 'class-validator';
import { Type } from 'class-transformer';

class MealEntry {
  @ApiProperty({
    description: 'Unique identifier of the food',
    example: '2f1e8d60-fc1b-11ec-b939-0242ac120002',
  })
  @IsUUID()
  @IsNotEmpty({ message: 'foodId is required and must be a valid UUID.' })
  foodId: string;

  @ApiProperty({
    description: 'Quantity of the food in the meal',
    example: 2,
  })
  @IsNotEmpty({ message: 'quantity is required.' })
  @IsNumber({}, { message: 'quantity must be a number.' })
  @Min(1, { message: 'quantity must be at least 1.' })
  @Max(1000, { message: 'quantity must not exceed 1000.' })
  quantity: number;
}

export class CreateMealDto {
  @ApiProperty({
    description: 'Unique identifier of the user creating the meal',
    example: '1a2b3c4d-5678-90ab-cdef-1234567890ab',
  })
  @IsUUID()
  @IsNotEmpty({ message: 'userId is required and must be a valid UUID.' })
  userId: string;

  @ApiProperty({
    description: 'Name of the meal',
    example: 'Lunch',
  })
  @IsString({ message: 'name must be a string.' })
  @IsNotEmpty({ message: 'name is required.' })
  name: string;

  @ApiProperty({
    description: 'Date of the meal in ISO 8601 format',
    example: '2024-11-22T12:30:00Z',
  })
  @IsISO8601(
    {},
    { message: 'startDate deve ser uma data válida no formato ISO.' },
  )
  @IsNotEmpty({ message: 'date is required.' })
  date: string;

  @ApiProperty({
    description: 'List of food entries in the meal',
    type: [MealEntry],
  })
  @IsArray({ message: 'entries must be an array of food entries.' })
  @ValidateNested({ each: true, message: 'Each food entry must be valid.' })
  @Type(() => MealEntry)
  entries: MealEntry[];
}
