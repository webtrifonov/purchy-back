import * as express from 'express';
import { signIn, signUp, forgotPassword, emailConfirm } from '../controllers/auth.controller';

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/forgot_password', forgotPassword);
router.get('/email_confirm/:emailConfirmationToken', emailConfirm);

export default router;
