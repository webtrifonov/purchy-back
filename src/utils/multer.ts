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
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('destination');
    // console.log('req', req);
    if (!fs.existsSync(constants.PATH_TO_UPLOADS)) {
      fs.mkdirSync(constants.PATH_TO_UPLOADS);
    }
    cb(null, constants.PATH_TO_UPLOADS);
  },
  filename: (req, file: File, cb) => {
    console.log('file', file);
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})
const upload = multer({
  storage,
  limits: {
    fileSize: constants.IMAGE_FILE_LIMIT,
  },
  fileFilter: checkFileType,
})
export default upload;