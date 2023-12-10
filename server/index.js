const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const { userRoute, labelRoute, memoRoute, uploadRoute } = require('./routes');
require('dotenv').config();
const passport = require('passport');
require('./config/passport');

const { HttpError } = require('./models');
const cors = require('cors');

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on ${process.env.PORT || 5000}.`);
    });
  })
  .catch((err) => console.log(err));

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api/user', userRoute);
app.use(
  '/api/labels',
  passport.authenticate('jwt', { session: false }),
  labelRoute,
);
app.use(
  '/api/memos',
  passport.authenticate('jwt', { session: false }),
  memoRoute,
);
app.use('/api/upload', uploadRoute);

// request for the folder will be returned
const dirname = path.resolve();
app.use('/uploads', express.static(path.join(dirname, '/uploads')));

app.use((req, res, next) => {
  return next(new HttpError('Could not find this route', 404));
});

app.use((error, req, res, next) => {
  if (res.headerSent) return next(error);
  res.status(error.code || 500);
  res.json({
    success: false,
    message: error.message || 'An known error occurred!',
  });
});
