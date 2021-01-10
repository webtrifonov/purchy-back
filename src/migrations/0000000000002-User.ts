import {MigrationInterface, QueryRunner} from "typeorm";

export class User0000000000002 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.query(`CREATE TABLE users ("id" SERIAL PRIMARY KEY, "name" VARCHAR(255), "email" VARCHAR(255) UNIQUE NOT NULL, "password" VARCHAR(50) NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL )`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.query(`DROP TABLE users`)
    }

}
