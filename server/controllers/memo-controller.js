const mongoose = require('mongoose');
const { HttpError, Memo, Label, User } = require('../models');

// TODO 所有的 label 等加入 user auth 直接確認 cretor 是否等於 req.user 並移除 check if user exists
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

const updateMemo = async (req, res, next) => {
  const { creator, title, content, images, isPinned, isAchived, links, labels, tasks, color } =
    req.body;
  const { memoId } = req.params;

  try {
    // check if user exists
    const user = await User.findById(creator);
    if (!user) return next(new HttpError('Could not find user for provided id', 404));

    // check if memo exists
    const memo = await Memo.findOne({ $and: [{ creator }, { _id: memoId }] });
    if (!memo) return next(new HttpError('Could not find memo for provided id.', 404));

    const session = await mongoose.startSession();
    session.startTransaction();
    // update memo
    const updatedMemo = await Memo.findOneAndUpdate(
      { $and: [{ creator }, { _id: memoId }] },
      { title, content, images, isPinned, isAchived, links, labels, tasks, color },
      { new: true },
    );
    // update labels's memo
    await Label.updateMany({ memos: memoId }, { $pull: { memos: memoId } });
    await Label.updateMany({ _id: labels }, { $push: { memos: memoId } });
    await session.commitTransaction();

    // return data with label details
    const returnedData = await updatedMemo.populate('labels', ['_id', 'name']);

    res.status(200).json({
      success: true,
      data: returnedData,
      message: 'Update label successfully.',
    });
  } catch (err) {
    next(new HttpError(err));
  }
};

module.exports = { createMemo, updateMemo };
