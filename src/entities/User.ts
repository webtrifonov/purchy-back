import * as bcryptjs from 'bcryptjs';
import { Shopping } from './Shopping';
import { Column, Entity, PrimaryGeneratedColumn, BeforeUpdate, BeforeInsert, OneToMany } from 'typeorm';

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
  beforeInsert() {
    console.log(this.password)
    this.password = bcryptjs.hashSync(this.password, 6);
    this.createdAt = new Date();
  }
  @BeforeUpdate()
  beforeUpdate() {
    this.password = bcryptjs.hashSync(this.password, 6);
    this.updatedAt = new Date();
  }
}
