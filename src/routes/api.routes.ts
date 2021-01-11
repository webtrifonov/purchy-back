import * as express from 'express';
const router = express.Router();

import authRoutes from './auth.routes';
import shoppingRoutes from './shopping.routes';
import userRoutes from './user.routes';
import productRoutes from './product.routes';
import groupRoutes from './group.routes';

router.use('/auth', authRoutes);
router.use('/shopping', shoppingRoutes);
router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/group', groupRoutes);
export default router;
