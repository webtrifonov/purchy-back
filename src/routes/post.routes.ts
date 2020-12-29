import * as express from 'express';
import { checkSchema } from 'express-validator';
import upload from '../utils/multer';
import { createPost } from './../controllers/post.controller';

const app = express();
const router = express.Router();

router.post('/createPost',
  // checkSchema({
  //   title: {
  //     isLength: {
  //       options: {
  //         min: 2
  //       },
  //       errorMessage: 'Role must be > 2',
  //     },
  //     exists: {
  //       errorMessage: 'Role must be not empty',
  //     },
  //   }
  // }),
  upload.single('image'),
  createPost
);

export default router;