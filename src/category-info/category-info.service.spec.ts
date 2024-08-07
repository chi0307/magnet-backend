import { Test, type TestingModule } from '@nestjs/testing'
import { CategoryInfoService } from './category-info.service'

describe('CategoryInfoService', () => {
  let service: CategoryInfoService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryInfoService],
    }).compile()

    service = module.get<CategoryInfoService>(CategoryInfoService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
