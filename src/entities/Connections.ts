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

@Entity('connections')
export class Connections {
  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;

  // references to user entity (1 Connection -> 1 User)
  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => Users)
  user: Users;

  @Column()
  user_id: string;

  @Column()
  socket_id: string;

  @CreateDateColumn()
  created_at: string;

  @CreateDateColumn()
  updated_at: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
