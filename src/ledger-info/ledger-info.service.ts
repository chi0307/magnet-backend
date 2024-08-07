import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateLedgerInfoDto } from './dto/create-ledger-info.dto'
import { UpdateLedgerInfoDto } from './dto/update-ledger-info.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { LedgerInfo } from './entities/ledger-info.entity'
import { Repository } from 'typeorm'

@Injectable()
export class LedgerInfoService {
  constructor(
    @InjectRepository(LedgerInfo)
    private ledgerInfoRepository: Repository<LedgerInfo>,
  ) {
    // TODO
  }

  async create(createLedgerInfoDto: CreateLedgerInfoDto): Promise<LedgerInfo> {
    const ledger = this.ledgerInfoRepository.create(createLedgerInfoDto)
    return this.ledgerInfoRepository.save(ledger)
  }

  async findAll(): Promise<LedgerInfo[]> {
    return this.ledgerInfoRepository.find()
  }

  async findOne(id: string): Promise<LedgerInfo> {
    const ledger = await this.ledgerInfoRepository.findOneBy({ id })
    if (!ledger) {
      throw new NotFoundException(`User with ID ${id} not found`)
    }
    return ledger
  }

  async update(
    id: string,
    updateLedgerInfoDto: UpdateLedgerInfoDto,
  ): Promise<LedgerInfo> {
    await this.ledgerInfoRepository.update(id, updateLedgerInfoDto)
    return this.findOne(id)
  }

  async remove(id: string): Promise<void> {
    await this.ledgerInfoRepository.delete(id)
  }
}
