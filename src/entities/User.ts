import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, CreateDateColumn, BaseEntity, JoinTable} from 'typeorm';
import { Post } from './Post';
import { Role } from './Role';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[]

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({
    name: 'user_roles',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    }
  })
  roles: Role[]

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date | string;

  @CreateDateColumn({ type: 'timestamptz' })
  updatedAt: Date | string;

}
