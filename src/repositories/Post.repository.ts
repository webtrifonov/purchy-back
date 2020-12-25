import { getCustomRepository } from 'typeorm';
import { EntityRepository, Repository } from 'typeorm';
import { Post } from '../entities/Post';

@EntityRepository(Post)
class PostRepository extends Repository<Post> {

}
export default PostRepository;