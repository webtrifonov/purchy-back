import {MigrationInterface, QueryRunner} from "typeorm";

export class Post0000000000003 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.query(`CREATE TABLE posts ("id" SERIAL PRIMARY KEY, "title" VARCHAR(255) NOT NULL, "image" TEXT, "user_id" INTEGER, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.query(`DROP TABLE posts`);
    }
}
