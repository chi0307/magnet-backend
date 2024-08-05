import { Module } from '@nestjs/common'
import { CategoryInfoService } from './category-info.service'
import { CategoryInfoController } from './category-info.controller'

@Module({
  controllers: [CategoryInfoController],
  providers: [CategoryInfoService],
})
export class CategoryInfoModule {
  //TODO
}
