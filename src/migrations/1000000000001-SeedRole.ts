import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { RolesSeed } from '../seeds/role.seed';

export class SeedRole1000000000001 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      const roles = await getRepository('roles').save(RolesSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}