import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn  } from 'typeorm';
import { User } from './User';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @ManyToMany((type) => User)
  @JoinTable()
  users: User[]
}