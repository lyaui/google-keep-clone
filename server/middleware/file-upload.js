const multer = require('multer');
import { v4 as uuid } from 'uuid';

const FILE_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
  'image/gif': 'gif',
};

const fileUpload = multer({
  limits: 500000,
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'uploads/images');
    },
    filename(req, file, cb) {
      const extension = FILE_TYPE[file.mimetype];
      cb(null, `${uuid()}.${extension}`);
    },
  }),
  function(req, file, cb) {
    const isValid = !!FILE_TYPE[file.mimetype];
    let error = isValid ? null : new Error('Invalid file type.');
    cb(error, isValid);
  },
});

module.exports = fileUpload;
