import * as express from 'express';
import { signIn, signUp } from '../controllers/auth.controller';

const router = express.Router();

router.get('/signup', signUp);
router.get('/signin', signIn);

export default router;
