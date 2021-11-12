const multer = require('multer');

const FILE_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
  'image/gif': 'gif',
};

const fileUpload = multer({
  limits: 500000,
  storage: multer.diskStorage({}),
  function(req, file, cb) {
    const isValid = !!FILE_TYPE[file.mimetype];
    let error = isValid ? null : new Error('Invalid file type.');
    cb(error, isValid);
  },
});

module.exports = fileUpload;
