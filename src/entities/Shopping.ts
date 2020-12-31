import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, Index, BeforeInsert, BeforeUpdate } from "typeorm";
import { Product } from './Product';
import { User } from './User';

@Entity({
  name: 'shoppings',
})
@Index(['user'])
export class Shopping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
  })
  title: string;

  @ManyToOne(() => User, (user) => user.shoppings, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
  })
  user: User;

  @OneToMany(() => Product, (product) => product.shopping)
  @JoinColumn({
    name: 'shopping_id',
    referencedColumnName: 'id',
  })
  products: Product[];

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
