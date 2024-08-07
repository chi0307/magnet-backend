import { Test, type TestingModule } from '@nestjs/testing'
import { UserInfoController } from './user-info.controller'
import { UserInfoService } from './user-info.service'

describe('UserInfoController', () => {
  let controller: UserInfoController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserInfoController],
      providers: [UserInfoService],
    }).compile()

    controller = module.get<UserInfoController>(UserInfoController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
