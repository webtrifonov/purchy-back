import * as express from 'express';
import { getUser } from '../controllers/user.controller';

const router = express.Router();

router.get('/users/:id', getUser);

export default router;
