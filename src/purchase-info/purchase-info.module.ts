import { Module } from '@nestjs/common'
import { PurchaseInfoService } from './purchase-info.service'
import { PurchaseInfoController } from './purchase-info.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PurchaseInfo } from './entities/purchase-info.entity'

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseInfo])],
  controllers: [PurchaseInfoController],
  providers: [PurchaseInfoService],
})
export class PurchaseInfoModule {
  // TODO
}
