import { Test, type TestingModule } from '@nestjs/testing'
import { PurchaseInfoService } from './purchase-info.service'

describe('PurchaseInfoService', () => {
  let service: PurchaseInfoService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseInfoService],
    }).compile()

    service = module.get<PurchaseInfoService>(PurchaseInfoService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
