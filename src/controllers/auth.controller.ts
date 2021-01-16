import { getCustomRepository } from 'typeorm';
import { User } from '../entities/User';
import UserRepository from '../repositories/user.repository';
import constants from '../utils/constants';
import * as bcryptjs from 'bcryptjs';
import { issueJWT } from '../utils/auth';


export const signIn = async (req, res) => {
  const userRepo = getCustomRepository(UserRepository);
  const {email, password} = req.body;

  const user = await userRepo.findOne({where: {
    email,
  }});
  if (!user) throw new Error('Email wrong');
  if (!bcryptjs.compareSync(password, user.password)) throw new Error('Password wrong');
  if (user.emailConfirmationToken) throw new Error('User not confirmed. Try to check your email');

  const tokenObject = issueJWT(user);

  res.json({
    success: true,
    token: tokenObject.token,
    expiresIn: tokenObject.expires,
  })
}

export const signUp = async (req, res) => {
  const {email, password} = req.body;
  const userRepo = getCustomRepository(UserRepository);
  try {
    const user = new User();
    user.email = email;
    user.password = bcryptjs.hashSync(password, 6);
    const emailConfirmationToken = String(Date.now())
    user.emailConfirmationToken = emailConfirmationToken;
    await userRepo.save(user);

    // TODO --- email send token ---
    // email.sendTemplate(template, {
    //   path: `http://localhost:${PORT}/api/auth/email_confirm/${emailConfirmationToken}`
    // })
    res.json({
      success: true,
      message: 'You was been successfully registered',
      // user,
      confirmToken: user.emailConfirmationToken,
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

export const emailConfirm = async (req, res) => {
  try {
    const userRepo = getCustomRepository(UserRepository);
    const {emailConfirmationToken} = req.params;
    console.log('emailConfirmationToken', emailConfirmationToken);

    const user = await userRepo.findOne({where: { emailConfirmationToken }});
    if (!user) throw new Error('Pass correct parameter to the path');
    user.emailConfirmationToken = null;
    await userRepo.save(user);

    res.status(200).json({
      success: true
    })
  } catch(error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
}
export const forgotPassword = async (req, res) => {
  const {email} = req.body
  // send email
  res.json({
    success: false,
  });
}
