import { getCustomRepository } from 'typeorm';
import { EntityRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/Product';
import { Shopping } from '../entities/Shopping';
import constants from '../utils/constants';
import GroupRepository from './group.repository';
import ShoppingRepository from './shopping.repository';

interface CreateBody {
  title: string;
  shoppingId: number;
  completed: boolean;
  groupId: number;
  // userId: number;
}
interface UpdateBody {
  id: number;
  title: string;
  completed: boolean;
}
@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
  async createOneWithGroup(body: CreateBody) {
    const {title, completed, shoppingId, groupId} = body;
    const shoppingRepo = getCustomRepository(ShoppingRepository);
    const groupRepo = getCustomRepository(GroupRepository);

    const shopping = await shoppingRepo.createQueryBuilder()
      .select('shoppings.id')
      .from(Shopping, 'shoppings')
      .where({id: shoppingId})
      .getOne();
    if (!shopping) throw new Error('Shopping not found');

    const group = await groupRepo.findOne(groupId);

    const newProduct = new Product();
    newProduct.title = title;
    newProduct.completed = Boolean(completed);
    newProduct.shopping = shopping;
    newProduct.group = group;
    await this.save(newProduct);
    return newProduct;
  }
  async updateOne({id, title}: UpdateBody) {
    const product = await this.findOne({id});
    product.title = title;
    await this.save(product);
    return product;
  }
  async deleteOne(id) {
    return await this.delete(id);
  }
  async all({page}) {
    return this.createQueryBuilder('product')
      .leftJoin('product.group', 'group')
      .select(['product.id', 'product.title', 'product.completed', 'product.createdAt', 'product.updatedAt', 'group'])
      .orderBy({
        'product.id': 'ASC'
      })
      .offset((page - 1) * constants.PER_PAGE)
      .limit(constants.PER_PAGE)
      .getMany();
  }
}
export default ProductRepository;
