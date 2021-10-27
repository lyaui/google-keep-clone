const router = require('express').Router();
const fileUpload = require('../middleware/file-upload.js');

router.post('/image', fileUpload.single('image'), (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      image: req.file.path,
    });
  } catch (err) {
    next(new HttpError(err));
  }
});

module.exports = router;
