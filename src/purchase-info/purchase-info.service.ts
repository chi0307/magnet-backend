import { Injectable, NotFoundException } from '@nestjs/common'
import { CreatePurchaseInfoDto } from './dto/create-purchase-info.dto'
import { UpdatePurchaseInfoDto } from './dto/update-purchase-info.dto'
import { PurchaseInfo } from './entities/purchase-info.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class PurchaseInfoService {
  constructor(
    @InjectRepository(PurchaseInfo)
    private purchaseInfoRepository: Repository<PurchaseInfo>,
  ) {
    // TODO
  }

  async create(
    createPurchaseInfoDto: CreatePurchaseInfoDto,
  ): Promise<PurchaseInfo> {
    const purchase = this.purchaseInfoRepository.create(createPurchaseInfoDto)
    return this.purchaseInfoRepository.save(purchase)
  }

  async findAll(): Promise<PurchaseInfo[]> {
    return this.purchaseInfoRepository.find()
  }

  async findOne(id: string): Promise<PurchaseInfo> {
    const purchase = await this.purchaseInfoRepository.findOneBy({ id })
    if (!purchase) {
      throw new NotFoundException(`User with ID ${id} not found`)
    }
    return purchase
  }

  async update(
    id: string,
    updatePurchaseInfoDto: UpdatePurchaseInfoDto,
  ): Promise<PurchaseInfo> {
    await this.purchaseInfoRepository.update(id, updatePurchaseInfoDto)
    return this.findOne(id)
  }

  async remove(id: string): Promise<void> {
    await this.purchaseInfoRepository.delete(id)
  }
}
