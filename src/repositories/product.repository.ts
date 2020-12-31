import { getCustomRepository } from 'typeorm';
import { EntityRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/Product';
import constants from '../utils/constants';
import GroupRepository from './group.repository';
import ShoppingRepository from './shopping.repository';

interface CreateBody {
  title: string;
  completed: boolean;
  shoppingId: number;
  groupId: number;
  // userId: number;
}

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
  async createOne(body: CreateBody) {
    const {title, completed, shoppingId, groupId} = body;
    const shoppingRepo = getCustomRepository(ShoppingRepository);
    const groupRepo = getCustomRepository(GroupRepository);
    const shopping = await shoppingRepo.findOne(shoppingId);
    const group = await groupRepo.findOne(groupId);

    const newProduct = new Product();
    newProduct.title = title;
    newProduct.completed = completed;
    newProduct.shopping = shopping;
    newProduct.group = group;
    await this.save(newProduct);
    return newProduct;
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