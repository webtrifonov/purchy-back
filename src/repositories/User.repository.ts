import { deepStrictEqual } from 'assert';
import { EntityRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  findById(id: number) {
    const postId = 5;
    return this.createQueryBuilder('user')
      .leftJoin('user.posts', 'posts')
      .leftJoin('user.roles', 'roles')
      .select(['user.name', 'user.email', 'user.createdAt', 'posts.title', 'roles'])
      .where('user.id = :id', { id })
      .getOne();
  }
  findAll() {
    return this.createQueryBuilder('user')
      .leftJoin('user.posts', 'posts')
      .leftJoin('user.roles', 'roles')
      .select(['user.name', 'user.email', 'user.password', 'user.createdAt', 'user.updatedAt'])
      .getMany();

  }
  findByName(name: string) {
    return this.createQueryBuilder('user')
      .where('user.name = :name', { name })
      .getOne();
  }
}
export default UserRepository;