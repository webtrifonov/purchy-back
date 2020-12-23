import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany, CreateDateColumn} from 'typeorm';
import { Post } from './Post';
import { Role } from './Role';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  image: string;

  @Column()
  password: string;

  @Column()
  postId: number;

  @OneToMany(() => Post, (post) => post)
  posts: Post[]

  @ManyToMany(() => Role)
  roles: Role[]

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

}
