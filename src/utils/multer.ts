import * as multer from 'multer';
import * as fs from 'fs';
import constants from './constants';
import * as path from 'path';

interface File {
  fieldname: string,    //'image',
  originalname: string, //'sample1.jpg',
  encoding: string,     //'7bit',
  mimetype: string,     //'image/jpeg'
}

const checkFileType = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    return cb(new Error('images only!'), false);
  }
}
export const imageUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      if (!fs.existsSync(constants.PATH_TO_UPLOADS)) {
        fs.mkdirSync(constants.PATH_TO_UPLOADS);
      }
      cb(null, constants.PATH_TO_UPLOADS);
    },
    filename: (req, file: File, cb) => {
      console.log('file', file);
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  }),
  limits: {
    fileSize: constants.IMAGE_FILE_LIMIT,
  },
  fileFilter: checkFileType,
}).single('image');

export const uploadImage = async (req, res, next) => {
  imageUpload(req, res, (error) => {
    if (error instanceof multer.MulterError) {
      return res.json({
        error: 'Multer error',
      });
    } else if (error) {
      return res.json({
        error: error.message,
      })
    }
    return next();
  });
};
