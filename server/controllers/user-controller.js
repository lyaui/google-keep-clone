const { HttpError, User } = require('../models');

// TODO 等加入 user auth 直接確認 cretor 是否等於 req.user 並移除 check if user exists
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

    res.status(200).json({ success: true, message: 'Logined in!' });
  } catch (err) {
    return next(new HttpError(err));
  }
};

const getUserSettings = async (req, res, next) => {
  const { userId } = req.params;
  try {
    // check if user exists
    const user = await User.findById(userId, 'settings');
    if (!user) return next(new HttpError('User not found.', 404));

    res.status(200).json({ success: true, data: user.settings });
  } catch (err) {
    return next(new HttpError(err));
  }
};

const updateUserSettings = async (req, res, next) => {
  const { userId } = req.params;
  const { theme, layout, sort } = req.body;
  try {
    // check if user exists
    const user = await User.findById(userId, 'settings');
    if (!user) return next(new HttpError('User not found.', 404));

    user.settings = { theme, layout, sort };
    await user.save();
    res.status(200).json({ success: true, data: user.settings });
  } catch (err) {
    return next(new HttpError(err));
  }
};

module.exports = { signup, login, getUserSettings, updateUserSettings };
