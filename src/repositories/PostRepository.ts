import { getCustomRepository } from 'typeorm';
import { EntityRepository, Repository } from 'typeorm';
import { Post } from '../entities/Post';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  public kek() {
    console.log(this);
    return ;
  }

}
export const postRepository = getCustomRepository(PostRepository);