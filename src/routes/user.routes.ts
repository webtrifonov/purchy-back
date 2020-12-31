import * as express from 'express';
import { getUser } from '../controllers/user.controller';

const app = express();
const router = express.Router();

router.get('/get_user', getUser);

export default router;