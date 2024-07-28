import { PartialType } from '@nestjs/mapped-types'
import { CreatePurchaseInfoDto } from './create-purchase-info.dto'

export class UpdatePurchaseInfoDto extends PartialType(CreatePurchaseInfoDto) {
  // TODO
}
