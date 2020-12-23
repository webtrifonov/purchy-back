import { Column, Entity, ManyToOne, PrimaryGeneratedColumn  } from 'typeorm';
import { User } from './User';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  image: string

  @ManyToOne((type) => User, (user) => user.name)
  user: User

  @Column()
  created_at: string

  @Column()
  updated_at: string
}