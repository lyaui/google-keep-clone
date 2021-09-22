const { HttpError, User } = require('../models');

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    // check if user exists
    const user = await User.findOne({ email });
    if (user) return next(new HttpError('Email has already been registered.', 422));

    const createdUser = await new User({ name, email, password }).save();
    res.status(201).json({
      success: true,
      data: createdUser,
      message: 'Sign up successfully.',
    });
  } catch (err) {
    return next(new HttpError(err));
  }
};

const login = (req, res, next) => {};

module.exports = { signup, login };
