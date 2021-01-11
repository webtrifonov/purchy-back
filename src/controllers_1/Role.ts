import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn  } from 'typeorm';
import { User } from '../entities/User';

@Entity('roles')
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @ManyToMany((type) => User, (user) => user.roles)
  @JoinColumn()
  users: User[]
}
