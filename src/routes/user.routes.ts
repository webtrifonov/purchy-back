import * as express from 'express';
import { getUser, users } from '../controllers/user.controller';
const router = express.Router();

router.get('/getUser', getUser);
router.get('/users', users);

export default router;
