import { getCustomRepository } from 'typeorm';
import UserRepository from './../repositories/User.repository';

export default {
  getUser: async (req, res) => {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findByName('Dima3');
    res.status(200).json({
      success: 1,
      user,
    })
  },
}