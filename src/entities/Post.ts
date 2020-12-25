import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity('posts')
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  image: string

  @ManyToOne((type) => User, (user) => user.posts)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
  })
  user: User

  @Column('timestamp', {
    nullable: true,
    default: () => 'NULL',
    name: 'created_at',
  })
  created_at: Date

  @Column('timestamp', {
    nullable: true,
    default: () => 'NULL',
    name: 'updated_at',
  })
  updated_at: Date
}