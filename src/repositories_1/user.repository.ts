import { EntityRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/User';
interface CreateUser {
  name: string,
  email: string,
  password: string,
}
@EntityRepository(User)
class UserRepository extends Repository<User> {
  findById(id: number) {
    return this.createQueryBuilder('user')
      .leftJoin('user.posts', 'posts')
      .leftJoin('user.roles', 'roles')
      .select(['user.name', 'user.email', 'user.password', 'user.createdAt', 'user.updatedAt', 'posts', 'roles'])
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
  createUser(body: CreateUser) {

  }

}
export default UserRepository;