const router = require('express').Router();
const { memoController } = require('../controllers');

router.get('/', memoController.getUserMemos);
router.get('/label/:labelName', memoController.getUserMemosByLabelName);
router.get('/:memoId', memoController.getUserMemoByMemoId);
router.post('/', memoController.createMemo);
router.patch('/:memoId', memoController.updateMemo);
router.delete('/:memoId', memoController.deleteMemo);
router.post('/linksInfo', memoController.getLinksInfo);

module.exports = router;
