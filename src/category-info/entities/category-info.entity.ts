import { LedgerInfo } from '../../ledger-info/entities/ledger-info.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('category_info')
export class CategoryInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => LedgerInfo)
  ledger_info: LedgerInfo

  @Column({ length: 100 })
  name: string

  @Column({ length: 100 })
  icon: string

  @Column({ default: 0 })
  sort_index: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
