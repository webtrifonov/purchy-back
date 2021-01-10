import * as express from 'express';
import { createGroup, getGroups } from '../controllers/group.controller';

const router = express.Router();

router.get('/groups', getGroups);
router.post('/create_group', createGroup);

export default router;
