import { Module } from '@nestjs/common'
import { LedgerInfoService } from './ledger-info.service'
import { LedgerInfoController } from './ledger-info.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { LedgerInfo } from './entities/ledger-info.entity'

@Module({
  imports: [TypeOrmModule.forFeature([LedgerInfo])],
  controllers: [LedgerInfoController],
  providers: [LedgerInfoService],
})
export class LedgerInfoModule {
  // TODO
}
