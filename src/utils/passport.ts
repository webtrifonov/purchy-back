import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt'
import {getCustomRepository} from 'typeorm';
import UserRepository from '../repositories/user.repository';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret',
  //algorithms: ['RSA256'],
};

passport.use(new JwtStrategy(options, async (jwt_payload, done) => {
  console.log('jwt_payload = ', jwt_payload);
  const userRepo = getCustomRepository(UserRepository);
  const user = await userRepo.findById(jwt_payload.sub);
  if (user) {

  }
}))
