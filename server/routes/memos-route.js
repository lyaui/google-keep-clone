const router = require('express').Router();
const { memoController } = require('../controllers');
const fileUpload = require('../middleware/file-upload.js');

router.get('/', memoController.getUserMemos);
router.get('/label/:labelName', memoController.getUserMemosByLabelName);
router.get('/:memoId', memoController.getUserMemoByMemoId);
router.post('/', memoController.createMemo);
router.patch('/:memoId', memoController.updateMemo);
router.delete('/:memoId', memoController.deleteMemo);
router.post('/singleImage', fileUpload.single('image'), memoController.uploadImage);
router.post('/multipleImages', fileUpload.array('images'), memoController.uploadImages);
router.post('/linksInfo', memoController.getLinksInfo);

module.exports = router;
