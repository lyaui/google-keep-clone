const router = require('express').Router();
const { memoController } = require('../controllers');

router.post('/', memoController.createMemo);

module.exports = router;
