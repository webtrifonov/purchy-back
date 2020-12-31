import { EntityRepository, Repository, getCustomRepository } from 'typeorm';
import { Post } from '../entities/Post';
import UserRepository from '../repositories/user.repository';
interface createPostParams {
  userId: number,
  title: string,
  imagePath?: string,
}
@EntityRepository(Post)
class PostRepository extends Repository<Post> {
  public async createPost(body: createPostParams) {
    const {title, userId, imagePath} = body;
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findOne(userId);

    const newPost = new Post();
    newPost.title = title;
    newPost.image = imagePath;
    newPost.user = user;
    newPost.createdAt = new Date();
    newPost.updatedAt = new Date();
    await this.save(newPost);

    return newPost;
  }
}
export default PostRepository;