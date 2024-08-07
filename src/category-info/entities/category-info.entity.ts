import { LedgerInfo } from '../../ledger-info/entities/ledger-info.entity'
import {
  Column,
  CreateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

export class CategoryInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => LedgerInfo)
  ledger_info: LedgerInfo

  @Column({ length: 100 })
  name: string

  @Column({ length: 2, default: '0' })
  currency: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
