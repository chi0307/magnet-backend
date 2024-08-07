import { Test, type TestingModule } from '@nestjs/testing'
import { LedgerInfoController } from './ledger-info.controller'
import { LedgerInfoService } from './ledger-info.service'

describe('LedgerInfoController', () => {
  let controller: LedgerInfoController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LedgerInfoController],
      providers: [LedgerInfoService],
    }).compile()

    controller = module.get<LedgerInfoController>(LedgerInfoController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
