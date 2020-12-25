import {getCustomRepository, MigrationInterface, QueryRunner} from "typeorm";
import { Post } from '../entities/Post';
import UserRepository from '../repositories/User.repository';
import PostRepository from '../repositories/Post.repository';

export class SeedPost1000000000003 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      const userRepository = getCustomRepository(UserRepository);

      const user = await userRepository.findOne({name: 'Dima3'});

      const postRepository = getCustomRepository(PostRepository);
      const post = new Post();
      post.title = 'Post 1';
      post.image = 'http://lorempixel.com';
      post.user = user;
      post.created_at = new Date();
      post.updated_at = new Date();
      await postRepository.save(post);
      // const dima = getCustomRepository();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
