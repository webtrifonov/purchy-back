import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { RolesSeed1 } from '../seeds/role.seed';
import { Role } from '../entities/Role';
import {getConnection} from 'typeorm';

export class SeedRole1000000000001 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      // const roles = await getRepository('roles').save(RolesSeed);
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into('roles')
        .values(RolesSeed1)
        .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}