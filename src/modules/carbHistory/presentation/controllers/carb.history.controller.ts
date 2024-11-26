import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { CreateCarbHistoryDto } from '../../domain/dto/create.carb.history.dto';
import { CarbHistory } from '../../domain/entities/carb-history.entity';
import { CarbHistoryService } from '../../application/service/carb.history.service';
import { GetCarbHistoryDto } from '../../domain/dto/get.carb.history.dto';

@ApiTags('CarbHistory')
@Controller('carb-history')
export class CarbHistoryController {
  constructor(private readonly carbHistoryService: CarbHistoryService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar a ingestão de carboidratos' })
  @ApiResponse({
    status: 201,
    description: 'Histórico de carboidratos registrado',
    type: CarbHistory,
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  async create(
    @Body() createCarbHistoryDto: CreateCarbHistoryDto,
  ): Promise<CarbHistory> {
    return this.carbHistoryService.create(createCarbHistoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obter o histórico de ingestão de carboidratos' })
  @ApiResponse({
    status: 200,
    description: 'Histórico de carboidratos encontrado',
    type: [CarbHistory],
  })
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos' })
  async findAll(@Query() query: GetCarbHistoryDto): Promise<CarbHistory[]> {
    return this.carbHistoryService.findAll(query);
  }
}
