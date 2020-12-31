import * as express from 'express';
import { getShoppings } from '../controllers/shopping.controller';

const app = express();
const router = express.Router();

router.get('/shoppings', getShoppings);

export default router;