import * as express from 'express';
import { checkSchema } from 'express-validator';
import {uploadImage} from '../utils/multer';
import { createPost } from './../controllers/post.controller';

const app = express();
const router = express.Router();

router.post('/createPost',
  checkSchema({
    title: {
      isLength: {
        options: {
          min: 2
        },
        errorMessage: '`Title must be > 2',
      },
      exists: {
        errorMessage: 'Title must be not empty',
      },
    },
    userId: {
      isNumeric: {
        options: {
          no_symbols: true,
        },
        errorMessage: 'userId must be numeric',
      }
    },
    image: {
      exists: {
        errorMessage: 'Image must be not empty',
      },
    }
  }),
  uploadImage,
  createPost
);

export default router;