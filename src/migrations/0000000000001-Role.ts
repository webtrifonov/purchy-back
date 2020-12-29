import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Role0000000000001 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.query(`CREATE TABLE roles ("id" SERIAL PRIMARY KEY, "title" VARCHAR(255))`);
      // queryRunner.createTable(new Table({
      //   name: 'roles',
      //   columns: [
      //     {
      //       name: 'id',
      //       type: 'int',
      //       isPrimary: true,
      //       isGenerated: true,
      //       generationStrategy: "increment",
      //     },
      //     {
      //       name: 'title',
      //       type: 'varchar',
      //     }
      //   ]

      // }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.query(`DROP TABLE roles`)
    }

}
