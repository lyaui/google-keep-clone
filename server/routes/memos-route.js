const router = require('express').Router();
const { memoController } = require('../controllers');

router.post('/', memoController.createMemo);
router.patch('/:memoId', memoController.updateMemo);

module.exports = router;
