import * as express from 'express';
import { createProduct, getProducts } from '../controllers/product.controller';

const app = express();
const router = express.Router();

router.get('/products', getProducts);
router.post('/create_product', createProduct);

export default router;