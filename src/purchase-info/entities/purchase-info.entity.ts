import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm'
import { LedgerInfo } from '../../ledger-info/entities/ledger-info.entity'
import { UserInfo } from '../../user-info/entities/user-info.entity'

@Entity('purchase_info')
export class PurchaseInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => LedgerInfo, { onDelete: 'CASCADE' })
  ledger_info: LedgerInfo

  @ManyToOne(() => UserInfo, { onDelete: 'CASCADE' })
  user_info: UserInfo

  @Column({ length: 255 })
  description: string

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number

  @Column('timestamptz')
  purchase_date: Date

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
