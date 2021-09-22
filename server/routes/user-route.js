const router = require('express').Router();
const { userController } = require('../controllers');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/settings/:userId', userController.getUserSettings);
router.patch('/settings/:userId', userController.updateUserSettings);

module.exports = router;
