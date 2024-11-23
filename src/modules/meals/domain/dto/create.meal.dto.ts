import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsString,
  IsUUID,
  ValidateNested,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

class MealEntry {
  @ApiProperty({
    description: 'Unique identifier of the food',
    example: '2f1e8d60-fc1b-11ec-b939-0242ac120002',
  })
  @IsUUID()
  @IsNotEmpty()
  foodId: string;

  @ApiProperty({
    description: 'Quantity of the food in the meal',
    example: 2,
  })
  @IsNotEmpty()
  quantity: number;
}

export class CreateMealDto {
  @ApiProperty({
    description: 'Unique identifier of the user creating the meal',
    example: '1a2b3c4d-5678-90ab-cdef-1234567890ab',
  })
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({
    description: 'Name of the meal',
    example: 'Lunch',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Date of the meal in ISO 8601 format',
    example: '2024-11-22T12:30:00Z',
  })
  @IsDateString()
  @IsNotEmpty()
  date: string;

  @ApiProperty({
    description: 'List of food entries in the meal',
    type: [MealEntry],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MealEntry)
  entries: MealEntry[];
}
