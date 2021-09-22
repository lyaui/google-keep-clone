const { HttpError, User } = require('../models');

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    // check if user exists
    const user = await User.findOne({ email });
    if (user) return next(new HttpError('Email has already been registered.', 422));

    const createdUser = await new User({ name: name.trim(), email: email.trim(), password }).save();
    res.status(201).json({
      success: true,
      data: createdUser,
      message: 'Signed up successfully.',
    });
  } catch (err) {
    return next(new HttpError(err));
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // check if user exists
    const user = await User.findOne({ email });
    if (!user) return next(new HttpError('User not found.', 404));

    // check is correct password
    if (user.password !== password)
      return next(new HttpError('Invalid credential, please try again.', 401));

    res.json({ success: true, message: 'Logined in!' });
  } catch (err) {}
};

module.exports = { signup, login };
