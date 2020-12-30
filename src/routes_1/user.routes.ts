import * as express from 'express';
import { getUser, users, createUser } from '../controllers/user.controller';
const router = express.Router();

router.get('/getUser', getUser);
router.get('/users', users);
router.post('/createUser', createUser)
export default router;
