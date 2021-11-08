const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { HttpError, User } = require('../models');

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    // check if user exists
    const user = await User.findOne({ email });
    if (user) return next(new HttpError('Email has already been registered.', 422));

    // hash the password
    const saultRound = 12;
    const hashedPassword = await bcrypt.hash(password, saultRound);

    const createdUser = await new User({
      name: name.trim(),
      email: email.trim(),
      password: hashedPassword,
    }).save();

    // token
    const tokenObj = { id: createdUser._id, email: createdUser.email };
    const token = jwt.sign(tokenObj, process.env.TOKEN_SECRET, { expiresIn: '30d' });

    res.status(201).json({
      success: true,
      user: {
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        token,
      },
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
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return next(new HttpError('Invalid credential, please try again.', 401));

    // token
    const tokenObj = { id: user._id, email: user.email };
    const token = jwt.sign(tokenObj, process.env.TOKEN_SECRET, { expiresIn: '30d' });

    res.status(200).json({
      success: true,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        token,
      },
      message: 'logged in!',
    });
  } catch (err) {
    return next(new HttpError(err));
  }
};

const googleLogin = async (req, res) => {
  const { user } = req;
  const tokenObj = { id: user._id, email: user.email };
  const token = jwt.sign(tokenObj, process.env.TOKEN_SECRET, { expiresIn: '30d' });

  const storedData = JSON.stringify({
    userId: user._id,
    userName: user.name,
    userEmail: user.email,
    token: token,
    isLoggedIn: true,
  });

  const url = 'http://localhost:3000/login';

  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Authenticated</title>
    </head>
    <body>
      Google 登入授權成功！.
      <script type="text/javascript">      
        setTimeout(()=>{
          opener.postMessage({ command: "token-ready", info: ${storedData}}, "${url}");
          window.close()},1000);
      </script>
    </body>
  </html>
`;
  return res.send(html);
};

const logout = (req, res) => {
  req.logout();
  res.status(200).json({
    success: true,
    message: 'Logout successfully!',
  });
};

const getUserSettings = async (req, res, next) => {
  const { id: userId } = req.user;
  try {
    // check if user exists
    const user = await User.findById(userId, 'settings');
    if (!user) return next(new HttpError('User not found.', 404));

    res.status(200).json({ success: true, settings: user.settings });
  } catch (err) {
    return next(new HttpError(err));
  }
};

const updateUserSettings = async (req, res, next) => {
  const { id: userId } = req.user;
  const updatedData = req.body;

  try {
    // check if user exists
    const user = await User.findById(userId, 'settings');
    if (!user) return next(new HttpError('User not found.', 404));
    user.settings = { ...user.settings, ...updatedData };
    await user.save();
    res.status(200).json({ success: true, settings: user.settings });
  } catch (err) {
    return next(new HttpError(err));
  }
};

module.exports = { signup, login, googleLogin, logout, getUserSettings, updateUserSettings };
