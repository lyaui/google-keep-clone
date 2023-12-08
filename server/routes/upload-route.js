const router = require('express').Router();
const cloudinary = require('cloudinary').v2;
const fileUpload = require('../middleware/file-upload.js');
const { HttpError, Label, Memo, User } = require('../models');

router.post('/image', fileUpload.single('image'), async (req, res, next) => {
  try {
    cloudinary.config({
      cloud_name: import.meta.env.CLOUDINARY_NAME,
      api_key: import.meta.env.CLOUDINARY_API_KEY,
      api_secret: import.meta.env.CLOUDINARY_API_SECRET,
    });
    const cloudinaryRes = await cloudinary.uploader.upload(req.file.path);

    res.status(200).json({
      success: true,
      image: cloudinaryRes.secure_url,
    });
  } catch (err) {
    next(new HttpError(err));
  }
});

module.exports = router;
