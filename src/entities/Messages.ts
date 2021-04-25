import { v4 as uuid } from 'uuid';
import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Users } from './Users';

@Entity('messages')
export class Messages {
  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;

  @Column()
  text: string;

  // references to user entity (N Messages -> 1 User)
  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => Users)
  user: Users;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
