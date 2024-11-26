import { IsUUID, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetCarbHistoryDto {
  @ApiProperty({
    description: 'ID do usuário',
    example: 'd0b0d7e8-7adb-49c4-bf3e-e7fde8117af4',
  })
  @IsOptional()
  @IsUUID()
  userId?: string;

  @ApiProperty({
    description: 'ID do alimento',
    example: 'c112d863-8da5-49e4-9443-5426ec92dde7',
  })
  @IsOptional()
  @IsUUID()
  foodId?: string;
}
