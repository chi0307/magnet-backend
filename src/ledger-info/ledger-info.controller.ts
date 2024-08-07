import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { LedgerInfoService } from './ledger-info.service'
import { CreateLedgerInfoDto } from './dto/create-ledger-info.dto'
import { UpdateLedgerInfoDto } from './dto/update-ledger-info.dto'
import { LedgerInfo } from './entities/ledger-info.entity'

@Controller('ledger-info')
export class LedgerInfoController {
  constructor(private readonly ledgerInfoService: LedgerInfoService) {
    // TODO
  }

  @Post()
  async create(
    @Body() createLedgerInfoDto: CreateLedgerInfoDto,
  ): Promise<LedgerInfo> {
    return this.ledgerInfoService.create(createLedgerInfoDto)
  }

  @Get()
  async findAll(): Promise<LedgerInfo[]> {
    return this.ledgerInfoService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<LedgerInfo> {
    return this.ledgerInfoService.findOne(id)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLedgerInfoDto: UpdateLedgerInfoDto,
  ): Promise<LedgerInfo> {
    return this.ledgerInfoService.update(id, updateLedgerInfoDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.ledgerInfoService.remove(id)
  }
}
