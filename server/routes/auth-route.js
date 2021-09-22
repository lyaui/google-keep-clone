const router = require('express').Router();
const { userController } = require('../controllers');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/settings/:userId', userController.getUserSettings);

module.exports = router;
