import * as express from 'express';
import { getShoppings } from '../controllers/shopping.controller';

const app = express();
const router = express.Router();

router.post('/get_shoppings', getShoppings);

export default router;