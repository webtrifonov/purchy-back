import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Group } from './Group';
import { Shopping } from './Shopping';


@Entity({
  name: 'products'
})
@Index(['shopping', 'group'])
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
  })
  title: string;

  @Column({
    type: 'boolean',
  })
  completed: boolean;

  @ManyToOne((type) => Shopping, (shopping) => shopping.products, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'shopping_id',
    referencedColumnName: 'id',
  })
  shopping: Shopping;

  @ManyToOne((type) => Group, (group) => group.products, {
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
    nullable: true,
  })
  @JoinColumn({
    name: 'group_id',
    referencedColumnName: 'id',
  })
  group: Group;

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
    this.createdAt = new Date();
  }
  @BeforeUpdate()
  beforeUpdate() {
    this.updatedAt = new Date();
  }
}
