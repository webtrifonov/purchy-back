import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/user.repository';

export const getUser = async (req, res) => {
  const {id} = req.query;
  const userRepository = getCustomRepository(UserRepository);
  const user = await userRepository.findById(1);

  res.json({
    success: true,
  })
}