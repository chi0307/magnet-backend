import { Test, type TestingModule } from '@nestjs/testing'
import { PurchaseInfoController } from './purchase-info.controller'
import { PurchaseInfoService } from './purchase-info.service'

describe('PurchaseInfoController', () => {
  let controller: PurchaseInfoController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseInfoController],
      providers: [PurchaseInfoService],
    }).compile()

    controller = module.get<PurchaseInfoController>(PurchaseInfoController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
