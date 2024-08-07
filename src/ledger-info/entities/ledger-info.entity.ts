import { UserInfo } from '../../user-info/entities/user-info.entity'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm'

@Entity('ledger_info')
export class LedgerInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => UserInfo)
  user_info: UserInfo

  @Column({ length: 100 })
  name: string

  @Column({ default: false })
  is_default: boolean

  @Column({ default: true })
  is_visible_in_general: boolean

  @Column({ length: 3 })
  currency: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
