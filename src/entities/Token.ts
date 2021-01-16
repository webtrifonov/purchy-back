import { Column, Entity, PrimaryGeneratedColumn, BeforeUpdate, BeforeInsert, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity({
  name: 'tokens'
})
export class Token {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  refreshJWTToken: string;

  @Column({ nullable: true })
  refreshJWTTokenExpiredDate: Date;

  @ManyToOne((type) => User, (user) => user.tokens, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
  })
  user: User;

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

  @BeforeInsert()
  beforeInsert() {
    this.createdAt = new Date();
  }
  @BeforeUpdate()
  beforeUpdate() {
    this.updatedAt = new Date();
  }
}
