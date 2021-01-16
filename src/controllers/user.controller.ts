import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/user.repository';

export const getUser = async (req, res) => {
  const userRepository = getCustomRepository(UserRepository);
  const {id} = req.params;
  const user = await userRepository.findById(id);
  res.json({
    success: true,
    authUser: req.user,
    user,
  });
}
