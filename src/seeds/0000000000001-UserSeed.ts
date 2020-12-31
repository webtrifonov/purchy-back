import {getCustomRepository, MigrationInterface, QueryRunner} from "typeorm";
import ShoppingRepository from '../repositories/shopping.repository';
import UserRepository from '../repositories/user.repository';

export class UserSeed0000000000001 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      const userRepo = getCustomRepository(UserRepository);
      const shoppingRepo = getCustomRepository(ShoppingRepository);
      const newUser = await userRepo.createOne({
        name: 'Dima2',
        email: 'dima2@mail.ru',
        password: '123456',
      });
      if (newUser.id) {
        shoppingRepo.createOne({
          title: 'Пятерочка',
          userId: newUser.id,
        });
      }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

      // userRepo.seedRevert();
    }

}
