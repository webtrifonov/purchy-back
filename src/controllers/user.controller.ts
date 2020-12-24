import { User } from '../entities/User';
import { userRepository } from './../repositories/User.repository';

export default {
  getUser: async (req, res) => {
    res.status(200).json({
      success: 1,
    })
  },
}