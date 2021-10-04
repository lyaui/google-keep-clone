const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const { userRoute, labelRoute, memoRoute } = require('./routes');
require('dotenv').config();
require('./config/passport');
const { HttpError } = require('./models');
const cors = require('cors');

const authCheck = require('./middleware/check-auth');

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    app.listen(5000, () => {
      console.log('Server running on port 5000.');
    });
  })
  .catch((err) => console.log(err));

// middlewarecle
app.use(bodyParser.json());
app.use(cors());
app.use('/api/user', userRoute);
app.use('/api/labels', authCheck, labelRoute);
app.use('/api/memos', authCheck, memoRoute);

app.use((req, res, next) => {
  return next(new HttpError('Could not find this route', 404));
});

app.use((error, req, res, next) => {
  if (res.headerSent) return next(error);
  res.status(error.code || 500);
  res.json({ success: false, message: error.message || 'An known error occurred!' });
});
