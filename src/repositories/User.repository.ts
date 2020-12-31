import { getCustomRepository } from 'typeorm';
import { EntityRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { Shopping } from '../entities/Shopping';
import { User } from '../entities/User';
import ShoppingRepository from './shopping.repository';

interface CreateBody {
  name: string,
  email: string,
  password: string,
}
@EntityRepository(User)
class UserRepository extends Repository<User> {
  findById(id: number) {
    return this.createQueryBuilder('user')
      .leftJoin('user.shoppings', 'shoppings')
      .select(['user.name', 'user.email', 'user.password', 'user.createdAt', 'user.updatedAt', 'shoppings'])
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
  async createOne(body: CreateBody) {
    const {name, email, password} = body;
    const shoppingRepo = getCustomRepository(ShoppingRepository);
    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.password = password;

    await this.save(newUser);
    return newUser;
  }
  async seedRevert() {
    return this.createQueryBuilder()
    .delete()
    .from(User)
    .where("email = :email", { email: 'dima1@mail.ru' })
    .where("email = :email", { email: 'lena2@mail.ru' })
    .where("email = :email", { email: 'petr3@mail.ru' })
    .execute();
  }
}
export default UserRepository;