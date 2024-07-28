import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { PurchaseInfoService } from './purchase-info.service'
import { CreatePurchaseInfoDto } from './dto/create-purchase-info.dto'
import { UpdatePurchaseInfoDto } from './dto/update-purchase-info.dto'
import { PurchaseInfo } from './entities/purchase-info.entity'

@Controller('purchase-info')
export class PurchaseInfoController {
  constructor(private readonly purchaseInfoService: PurchaseInfoService) {
    // TODO
  }

  @Post()
  async create(
    @Body() createPurchaseInfoDto: CreatePurchaseInfoDto,
  ): Promise<PurchaseInfo> {
    return this.purchaseInfoService.create(createPurchaseInfoDto)
  }

  @Get()
  async findAll(): Promise<PurchaseInfo[]> {
    return this.purchaseInfoService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PurchaseInfo> {
    return this.purchaseInfoService.findOne(id)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePurchaseInfoDto: UpdatePurchaseInfoDto,
  ): Promise<PurchaseInfo> {
    return this.purchaseInfoService.update(id, updatePurchaseInfoDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.purchaseInfoService.remove(id)
  }
}
