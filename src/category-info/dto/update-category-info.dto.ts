import { PartialType } from '@nestjs/mapped-types'
import { CreateCategoryInfoDto } from './create-category-info.dto'

export class UpdateCategoryInfoDto extends PartialType(CreateCategoryInfoDto) {
  // TODO
}
