import { Shopping } from './Shopping';
import { Column, Entity, PrimaryGeneratedColumn, BeforeUpdate, BeforeInsert, OneToMany, Index } from 'typeorm';

@Entity({
  name: 'users'
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
    type: 'varchar',
  })
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 255
  })
  password: string;

  @OneToMany(() => Shopping, (shopping) => shopping.user)
  shoppings: Shopping[]

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  createdAt: Date;

  @Column('timestamp', {
    nullable: true,
    default: () => 'NULL',
    name: 'updated_at',
  })
  updatedAt: Date;

  @Column('timestamp', {
    nullable: true,
    default: () => 'NULL',
    name: 'deleted_at',
  })
  deletedAt: Date;
  @BeforeInsert()
  @BeforeUpdate()
  beforeUpdate() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
