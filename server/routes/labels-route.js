const router = require('express').Router();
const { labelController } = require('../controllers');

router.get('/', labelController.getLabels);
router.post('/', labelController.createLabel);
router.patch('/:labelId', labelController.updateLabel);
router.delete('/:labelId', labelController.deleteLabel);

module.exports = router;
