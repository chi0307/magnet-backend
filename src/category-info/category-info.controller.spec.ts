import { Test, type TestingModule } from '@nestjs/testing'
import { CategoryInfoController } from './category-info.controller'
import { CategoryInfoService } from './category-info.service'

describe('CategoryInfoController', () => {
  let controller: CategoryInfoController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryInfoController],
      providers: [CategoryInfoService],
    }).compile()

    controller = module.get<CategoryInfoController>(CategoryInfoController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
