import * as express from 'express';
const router = express.Router();

import shoppingRoutes from './shopping.routes';
import userRoutes from './user.routes';
import productRoutes from './product.routes';

router.use('/shopping', shoppingRoutes);
router.use('/user', userRoutes);
router.use('/product', productRoutes);

export default router;