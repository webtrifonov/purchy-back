import { getCustomRepository } from 'typeorm';
import { User } from '../entities/User';
import UserRepository from '../repositories/user.repository';
import constants from '../utils/constants';

export const signIn = async (req, res) => {
  const {id} = req.query;
  const userRepository = getCustomRepository(UserRepository);
  const user = await userRepository.findById(1);

  res.json({
    success: true,
  })
}

export const signUp = async (req, res) => {
  const {email, password} = req.body;
  const userRepository = getCustomRepository(UserRepository);
  try {
    const user = new User();
    user.email = email;
    user.password = password; // bcryptjs.hashSync(req.body.password, 6);
    await userRepository.save(user);
    res.json({
      success: true,
      user
    });
  } catch(error) {
    let errorMessage = error.message;
    if (error.code === constants.errorCodes.PG_UNIQUE_CONSTRAINT_VIOLATION) {
      errorMessage = 'Email must be unique';
    }
    res.json({
      success: false,
      error: errorMessage,
    });
  }

}
