import { EntityRepository, getCustomRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public findByName(name: string) {
    return this.createQueryBuilder()
      .where('user.name = :name', { name })
      .getMany();
  }
}
export const userRepository = getCustomRepository(UserRepository);