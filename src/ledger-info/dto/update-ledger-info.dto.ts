import { PartialType } from '@nestjs/mapped-types'
import { CreateLedgerInfoDto } from './create-ledger-info.dto'

export class UpdateLedgerInfoDto extends PartialType(CreateLedgerInfoDto) {
  // TODO
}
