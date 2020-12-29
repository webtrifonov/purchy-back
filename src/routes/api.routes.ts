import * as express from 'express';
const router = express.Router();

import userRoutes from './user.routes';
import roleRoutes from './role.routes';
import postRoutes from './post.routes';

router.use('/post', postRoutes);
router.use('/user', userRoutes);
router.use('/role', roleRoutes);

export default router;