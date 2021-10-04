const router = require('express').Router();
const passport = require('passport');
const { userController } = require('../controllers');

router.post('/signup', passport.authenticate('jwt', { session: false }), userController.signup);
router.post('/login', passport.authenticate('jwt', { session: false }), userController.login);
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get(
  '/google/redirect',
  passport.authenticate('google', { session: false }),
  userController.googleLogin,
);
router.get('/logout', userController.logout);
router.get('/settings/:userId', userController.getUserSettings);
router.patch('/settings/:userId', userController.updateUserSettings);

module.exports = router;
