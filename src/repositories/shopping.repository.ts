import { getCustomRepository } from 'typeorm';
import { EntityRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { Shopping } from '../entities/Shopping';
import constants from '../utils/constants';
import UserRepository from './user.repository';

interface CreateBody {
  title: string;
  userId: number;
}

@EntityRepository(Shopping)
class ShoppingRepository extends Repository<Shopping> {
  all({page}) {
    return this.createQueryBuilder('shopping')
      .select(['shopping.title','shopping.createdAt', 'shopping.updatedAt'])
      .orderBy({
        id: 'ASC'
      })
      .offset((page - 1) * constants.PER_PAGE)
      .limit(constants.PER_PAGE)
      .getMany();
  }

  async createOne(body: CreateBody) {
    const { title, userId } = body;
    const userRepo = getCustomRepository(UserRepository);
    const user = await userRepo.findOne(userId);
    if (user.id) {
      const newShopping = new Shopping();
      newShopping.title = title;
      newShopping.user = user;
      await this.save(newShopping);
      return newShopping;
    }
  }
}
export default ShoppingRepository;