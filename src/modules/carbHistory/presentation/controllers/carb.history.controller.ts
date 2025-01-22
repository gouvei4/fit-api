import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CreateCarbHistoryDto } from '../../domain/dto/create.carb.history.dto';
import { CarbHistory } from '../../domain/entities/carb-history.entity';
import { CarbHistoryService } from '../../application/service/carb.history.service';
import { GetCarbHistoryDto } from '../../domain/dto/get.carb.history.dto';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';

@ApiTags('CarbHistory')
@Controller('carb-history')
export class CarbHistoryController {
  constructor(private readonly carbHistoryService: CarbHistoryService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
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

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
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

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um registro de ingestão de carboidratos' })
  @ApiResponse({
    status: 200,
    description: 'Registro de ingestão de carboidratos deletado com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Registro de ingestão de carboidratos não encontrado',
  })
  @ApiResponse({
    status: 403,
    description: 'Você não tem permissão para deletar este registro',
  })
  async deleteCarb(@Param('id') id: string): Promise<void> {
    await this.carbHistoryService.deleteCarb(id);
  }
}
