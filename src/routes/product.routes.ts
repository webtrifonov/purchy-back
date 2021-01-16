import * as express from 'express';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.controller';

const router = express.Router();

router.get('/products', getProducts);
router.post('/create', createProduct);
router.patch('/update', updateProduct);
router.delete('/delete', deleteProduct);
export default router;
