import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/user.repository';

export const getUser = async (req, res) => {
  const userRepository = getCustomRepository(UserRepository);
  const user = await userRepository.findById(10);

  res.status(200).json({
    success: 1,
    user,
  })
}
export const users = async (req, res) => {
  const userRepository = getCustomRepository(UserRepository);
  const users = await userRepository.findAll();

  res.status(200).json({
    success: 1,
    users,
  })
}