const router = require('express').Router();
const { memoController } = require('../controllers');

router.get('/', memoController.getMemos);
router.post('/', memoController.createMemo);
router.patch('/:memoId', memoController.updateMemo);
router.delete('/:memoId', memoController.deleteMemo);

module.exports = router;
