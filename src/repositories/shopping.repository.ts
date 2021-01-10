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
interface UpdateBody {
  id: number;
  title: string;
}
@EntityRepository(Shopping)
class ShoppingRepository extends Repository<Shopping> {
  all({page = 1}) {
    return this.createQueryBuilder('shopping')
      .select(['shopping.title','shopping.createdAt', 'shopping.updatedAt'])
      .orderBy({
        id: 'ASC'
      })
      .offset((page - 1) * constants.PER_PAGE)
      .limit(constants.PER_PAGE)
      .getMany();
  }

  async createOne({ title, userId }: CreateBody) {
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
  async updateOne({id, title}: UpdateBody) {
    const shopping = await this.findOne({id});
    console.log('>>> shopping = ', shopping);
    shopping.title = title;
    await this.save(shopping);
    return shopping;
    // return await this.createQueryBuilder()
    //   .update(Shopping)
    //   .set({
    //     title: title
    //   })
    //   .where('id = :id', {id: id})
    //   .execute();
  }
  async deleteOne(id) {
    return await this.delete(id);
  }
}
export default ShoppingRepository;
