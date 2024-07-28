import { Test, type TestingModule } from '@nestjs/testing'
import { LedgerInfoService } from './ledger-info.service'

describe('LedgerInfoService', () => {
  let service: LedgerInfoService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LedgerInfoService],
    }).compile()

    service = module.get<LedgerInfoService>(LedgerInfoService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
