const mongoose = require('mongoose');
const { HttpError, Label, User } = require('../models');

const createLabel = async (req, res, next) => {
  const { name, creator } = req.body;

  try {
    // check if user exists
    const user = await User.findById(creator);
    if (!user) return next(new HttpError('Could not find user for provided id', 404));

    // check if label name exists
    const label = await Label.findOne({ $and: [{ creator }, { name: name.trim() }] });
    if (label) return next(new HttpError('Label name has existed, please try new one.', 422));

    // create label add to user labels
    const session = await mongoose.startSession();
    session.startTransaction();
    const createdLabel = await new Label({ creator, name: name.trim() }).save({ session });
    user.labels.push(createdLabel);
    await user.save({ session });
    await session.commitTransaction();

    res.status(201).json({
      success: true,
      data: createdLabel,
      message: 'Create new label successfully.',
    });
  } catch (err) {
    return next(new HttpError(err));
  }
};

const updateLabel = async (req, res, next) => {
  const { name, creator } = req.body;
  const { labelId } = req.params;

  try {
    // check if user exists
    const user = await User.findById(creator);
    if (!user) return next(new HttpError('Could not find user for provided id', 404));

    // check if label exists
    const label = await Label.findOne({ $and: [{ creator }, { _id: labelId }] });
    if (!label) return next(new HttpError('Could not find label for provided id.', 404));

    // check if updated label name exists, and update label name
    label.name = name.trim();
    const hasSameLabel = await Label.findOne({ $and: [{ creator }, { name: name.trim() }] });
    if (hasSameLabel)
      return next(new HttpError('Label name has existed, please try new one.', 422));
    await label.save();

    res.status(201).json({
      success: true,
      data: label,
      message: 'Update label successfully.',
    });
  } catch (err) {
    return next(new HttpError(err));
  }
};

const deleteLabel = async (req, res, next) => {};

module.exports = { createLabel, updateLabel };
