const router = require('express').Router();
const { memoController } = require('../controllers');

router.get('/', memoController.getMemos);
router.get('/label/:labelId', memoController.getMemosByLabelId);
router.post('/', memoController.createMemo);
router.patch('/:memoId', memoController.updateMemo);
router.delete('/:memoId', memoController.deleteMemo);

module.exports = router;
