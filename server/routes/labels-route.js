const router = require('express').Router();
const { labelController } = require('../controllers');

router.post('/', labelController.createLabel);
router.patch('/:labelId', labelController.updateLabel);

module.exports = router;
