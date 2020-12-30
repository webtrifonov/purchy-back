import * as express from 'express';
import {createRole} from '../controllers/role.controller';
import {body, checkSchema} from 'express-validator';

const router = express.Router();

router.post('/createRole',
  checkSchema({
    title: {
      isLength: {
        options: {
          min: 2
        },
        errorMessage: 'Role must be > 2',
      },
      exists: {
        errorMessage: 'Role must be not empty',
      },
    }
  }),
  createRole
);

export default router;