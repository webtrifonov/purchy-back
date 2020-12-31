import {getCustomRepository, MigrationInterface, QueryRunner} from "typeorm";
import ProductRepository from '../repositories/product.repository';
import ShoppingRepository from '../repositories/shopping.repository';

export class ProductSeed0000000000002 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      const productRepo = getCustomRepository(ProductRepository);
      const shoppingRepo = getCustomRepository(ShoppingRepository);
      const newUser1 = await productRepo.createOne({
        title: 'банан',
        completed: false,
        shoppingId: 2,
        groupId: null
      });
      const newUser2 = await productRepo.createOne({
        title: 'сироп',
        completed: true,
        shoppingId: 2,
        groupId: null
      });
      // if (newUser.id) {
      //   shoppingRepo.createOne({
      //     title: 'Пятерочка',
      //     userId: newUser.id,
      //   });
      // }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      console.log(22);
    }

}
