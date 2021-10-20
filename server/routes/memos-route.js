const router = require('express').Router();
const { memoController } = require('../controllers');
const fileUpload = require('../middleware/file-upload.js');

router.get('/', memoController.getUserMemos);
router.get('/label/:labelName', memoController.getUserMemosByLabelName);
router.post('/', memoController.createMemo);
router.patch('/:memoId', memoController.updateMemo);
router.delete('/:memoId', memoController.deleteMemo);
router.post('/singleImage', fileUpload.single('image'), memoController.uploadImage);
router.post('/multipleImages', fileUpload.array('images', 5), memoController.uploadImages);

module.exports = router;
