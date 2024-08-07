import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm'
import { LedgerInfo } from '../../ledger-info/entities/ledger-info.entity'
import { CategoryInfo } from '../../category-info/entities/category-info.entity'

@Entity('purchase_info')
export class PurchaseInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => LedgerInfo)
  ledger_info: LedgerInfo

  @ManyToOne(() => CategoryInfo)
  category_info: CategoryInfo

  @Column({ length: 100, nullable: true })
  name: string

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number

  @Column('timestamptz')
  purchase_date: Date

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
