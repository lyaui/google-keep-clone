const mongoose = require('mongoose');
const { HttpError, Memo, Label, User } = require('../models');

const createMemo = async (req, res, next) => {
  const { creator, title, content, images, isPinned, isAchived, links, labels, tasks, color } =
    req.body;

  try {
    // check if user exists
    const user = await User.findById(creator);
    if (!user) return next(new HttpError('Could not find user for provided id', 404));

    const createdMemo = new Memo({
      creator,
      title,
      content,
      images,
      isPinned,
      isAchived,
      links,
      labels,
      tasks,
      color,
    });

    const session = await mongoose.startSession();
    session.startTransaction();
    // save created memo
    await createdMemo.save(createdMemo);
    // add memo to labels
    await Label.updateMany({ _id: labels }, { $push: { memos: createdMemo._id } });
    // add memo to user
    user.memos.push(createdMemo);
    await user.save({ session });
    await session.commitTransaction();

    // return data with label details
    const returnedData = await createdMemo.populate('labels', ['_id', 'name']);

    res.status(201).json({
      success: true,
      data: returnedData,
      message: 'Create new memo successfully.',
    });
  } catch (err) {
    next(new HttpError(err));
  }
};

module.exports = { createMemo };
