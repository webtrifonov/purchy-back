import { EntityRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  findByName(name: string) {
    return this.createQueryBuilder('user')
      .where('user.name = :name', { name })
      .getOne();
  }
}
export default UserRepository;