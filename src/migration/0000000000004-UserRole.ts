import {MigrationInterface, QueryRunner} from "typeorm";

export class UserRole0000000000004 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.query(`CREATE TABLE user_roles ("id" SERIAL PRIMARY KEY, "user_id" INTEGER, "role_id" INTEGER, FOREIGN KEY ("user_id") REFERENCES users("id") ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY ("role_id") REFERENCES roles("id") ON DELETE CASCADE ON UPDATE CASCADE)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.query(`DROP TABLE user_roles`)
    }

}
