// import * as bcryptjs from 'bcryptjs';
import { getRepository, MigrationInterface, QueryRunner, getConnection } from 'typeorm';
import { Role } from '../entities/Role';
import { User } from '../entities/User';

export class SeedRole1000000000001 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      const userRepository  = getRepository(User);
      const roleRepository = getRepository(Role);

      // const connection = getConnection()

      const newUser1 = new User();
      newUser1.name = 'Dima3';
      newUser1.email = 'dima@mail3.ru';
      newUser1.password = '111'; //bcryptjs.hashSync('123456', 6);
      newUser1.createdAt = new Date();
      newUser1.updatedAt = new Date();
      await userRepository.save(newUser1);

      await userRepository.save(newUser1);

      const role = new Role();
      role.title = 'Admin';
      role.users = [newUser1];
      await roleRepository.save(role);

      // const roles = await roleRepository.save(RolesSeed);

      // await getConnection()
      //   .createQueryBuilder()
      //   .insert()
      //   .into('roles')
      //   .values(RolesSeed)
      //   .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }
}
