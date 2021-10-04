const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { userController } = require('../controllers');

router.post('/signup', passport.authenticate('jwt', { session: false }), userController.signup);
router.post('/login', passport.authenticate('jwt', { session: false }), userController.login);
router.get(
  '/google',
  passport.authenticate('google', { session: false, scope: ['profile', 'email'] }),
);
router.get('/google/redirect', passport.authenticate('google', { session: false }), (req, res) => {
  const { user } = req;
  const tokenObj = { id: user._id, email: user.email };
  const token = jwt.sign(tokenObj, process.env.TOKEN_SECRET, { expiresIn: '30d' });
  res.status(200).json({
    success: true,
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    },
    message: 'Logined in!',
  });
});
router.get('/settings/:userId', userController.getUserSettings);
router.patch('/settings/:userId', userController.updateUserSettings);

module.exports = router;
