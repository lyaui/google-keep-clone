const router = require('express').Router();
const { labelController } = require('../controllers');

router.post('/', labelController.createLabel);

module.exports = router;
