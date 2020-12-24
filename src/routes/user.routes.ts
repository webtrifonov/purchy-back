import * as express from 'express';
import userController from '../controllers/user.controller';
const router = express.Router();

router.get('/getUser', userController.getUser);

export default router;
