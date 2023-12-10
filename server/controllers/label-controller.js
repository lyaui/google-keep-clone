const mongoose = require('mongoose');
const { HttpError, Label, Memo, User } = require('../models');

const getUserLabels = async (req, res, next) => {
  const { id: userId } = req.user;

  try {
    // check if user exists
    const user = await User.findById(userId);
    if (!user)
      return next(new HttpError('Could not find user for provided id', 404));

    const { labels } = await user.populate('labels', ['_id', 'name']);
    res.status(200).json({
      success: true,
      labels,
    });
  } catch (err) {
    return next(new HttpError(err));
  }
};

const createLabel = async (req, res, next) => {
  const { id: userId } = req.user;
  const { name } = req.body;

  try {
    // check if user exists
    const user = await User.findById(userId);
    if (!user)
      return next(new HttpError('Could not find user for provided id', 404));

    // check if label name exists
    const label = await Label.findOne({ creator: userId, name: name.trim() });
    if (label)
      return next(
        new HttpError('Label name has existed, please try new one.', 422)
      );

    // create label add to user labels
    const session = await mongoose.startSession();
    session.startTransaction();
    const createdLabel = await new Label({
      creator: userId,
      name: name.trim(),
    }).save({ session });
    user.labels.push(createdLabel);
    await user.save({ session });
    await session.commitTransaction();

    res.status(201).json({
      success: true,
      labels: { name: createdLabel.name, _id: createdLabel._id },
      message: 'Create new label successfully.',
    });
  } catch (err) {
    return next(new HttpError(err));
  }
};

const updateLabel = async (req, res, next) => {
  const { id: userId } = req.user;
  const { name } = req.body;
  const { labelId } = req.params;

  try {
    // check if user exists
    const user = await User.findById(userId);
    if (!user)
      return next(new HttpError('Could not find user for provided id', 404));

    // check if label exists
    const label = await Label.findOne({ creator: userId, _id: labelId }, [
      '_id',
      'name',
    ]);
    if (!label)
      return next(new HttpError('Could not find label for provided id.', 404));

    // check if updated label name exists, and update label name
    label.name = name.trim();
    const hasSameLabel = await Label.findOne({
      $and: [{ creator: userId }, { name: name.trim() }],
    });
    if (hasSameLabel)
      return next(
        new HttpError('Label name has existed, please try new one.', 422)
      );
    await label.save();

    res.status(200).json({
      success: true,
      labels: label,
      message: 'Update label successfully.',
    });
  } catch (err) {
    return next(new HttpError(err));
  }
};

const deleteLabel = async (req, res, next) => {
  const { id: userId } = req.user;
  const { labelId } = req.params;

  try {
    // check if label exists
    const label = await Label.findOne({ _id: labelId, creator: userId });
    if (!label)
      return next(
        new HttpError('Could not find label for the provided id.', 404)
      );
    await label.populate('creator');

    const session = await mongoose.startSession();
    session.startTransaction();
    // remove label
    await label.remove({ session });
    // remove label from memos
    await Memo.updateMany({ labels: labelId }, { $pull: { labels: labelId } });
    // remove label from user
    label.creator.labels.pull(label);
    await label.creator.save({ session });
    await session.commitTransaction();

    res
      .status(200)
      .json({ success: true, message: 'Delete label successfully' });
  } catch (err) {
    return next(new HttpError(err));
  }
};

module.exports = { getUserLabels, createLabel, updateLabel, deleteLabel };
