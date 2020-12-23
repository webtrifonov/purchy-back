import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Role0000000000001 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.createTable(new Table({
        name: 'roles',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'varchar',
          }
        ]

      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.query(`DROP TABLE roles`)
    }

}
