import { validationResult } from 'express-validator';
import { getCustomRepository } from 'typeorm';
import PostRepository from '../repositories/post.repository';

export const createPost = async (req, res) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.json({ success: 0, errors: errors.array() });
  // }
  const postRepository = getCustomRepository(PostRepository);

  const newPost = await postRepository.createPost({...req.body, imagePath: req.file.path});

  res.status(200).json({
    success: 1,
    post: newPost,
  });
}