import { getRepository, getCustomRepository } from 'typeorm';
import * as passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import * as fs from 'fs';
import * as path from 'path';
import UserRepository from '../repositories/user.repository';

const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256']
};

passport.use(new JwtStrategy(options, async (jwtPayload, done) => {
  const userId = jwtPayload.sub;
  console.log('jwtPayload', jwtPayload);
  try {
    const userRepo = getCustomRepository(UserRepository);
    const user = await userRepo.findById(userId);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
}));
export default passport;
