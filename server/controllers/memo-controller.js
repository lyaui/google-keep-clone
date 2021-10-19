const mongoose = require('mongoose');
const { HttpError, Memo, Label, User } = require('../models');

// TODO 所有的 label 等加入 user auth 直接確認 creator 是否等於 req.user 並移除 check if user exists
const getMemos = async (req, res, next) => {
  const { isArchived } = req.query;
  const { userId } = req.params;
  try {
    // check if user exists
    const user = await User.findById(userId);
    if (!user) return next(new HttpError('Could not find user for provided id', 404));

    // check user settings and sort data
    const sortedOrder = user.settings.sort === 'ASCEND' ? 1 : -1;
    const memos = await Memo.find({ creator: userId, isArchived: !!isArchived || false }).sort({
      updatedAt: sortedOrder,
    });

    res.status(200).json({
      success: true,
      memos,
    });
  } catch (err) {
    next(new HttpError(err));
  }
};

const getMemosByLabelId = async (req, res, next) => {
  const { labelId } = req.params;
  const userId = '614adcec7449bc9f3a6de8cd';
  try {
    // check if user exists
    const user = await User.findById(userId);
    if (!user) return next(new HttpError('Could not find user for provided id', 404));

    // check if label exists
    const label = await Label.findById(labelId);
    if (!label) return next(new HttpError('Could not find label for provided id', 404));

    const { memos } = await label.populate('memos');
    res.status(200).json({
      success: true,
      memos,
    });
  } catch (err) {
    next(new HttpError(err));
  }
};

const createMemo = async (req, res, next) => {
  const {
    creator,
    title,
    content,
    images,
    isTaskList,
    isPinned,
    isArchived,
    links,
    labels,
    tasks,
    color,
  } = req.body;
  try {
    // check if user exists
    const user = await User.findById(creator);
    console.log(creator);
    console.log(user);
    if (!user) return next(new HttpError('Could not find user for provided id', 404));

    const createdMemo = new Memo({
      creator,
      title,
      content,
      images,
      isTaskList,
      isPinned,
      isArchived,
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
      memo: returnedData,
      message: 'Create new memo successfully.',
    });
  } catch (err) {
    next(new HttpError(err));
  }
};

const updateMemo = async (req, res, next) => {
  const { creator, title, content, images, isPinned, isArchived, links, labels, tasks, color } =
    req.body;
  const { memoId } = req.params;

  try {
    // check if user exists
    const user = await User.findById(creator);
    if (!user) return next(new HttpError('Could not find user for provided id', 404));

    // check if memo exists
    const memo = await Memo.findOne({ creator, _id: memoId });
    if (!memo) return next(new HttpError('Could not find memo for provided id.', 404));

    const session = await mongoose.startSession();
    session.startTransaction();
    // update memo
    const updatedMemo = await Memo.findOneAndUpdate(
      { $and: [{ creator }, { _id: memoId }] },
      { title, content, images, isPinned, isArchived, links, labels, tasks, color },
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
      memo: returnedData,
      message: 'Update label successfully.',
    });
  } catch (err) {
    next(new HttpError(err));
  }
};

const deleteMemo = async (req, res, next) => {
  const { memoId } = req.params;
  try {
    // check if memo exists
    const memo = await Memo.findOne({ _id: memoId });
    if (!memo) return next(new HttpError('Could not find memo for the provided id.', 404));
    await memo.populate('creator');

    const session = await mongoose.startSession();
    session.startTransaction();
    // remove memo
    await memo.remove({ session });
    // remove memo from labels
    await Label.updateMany({ memos: memoId }, { $pull: { memos: memoId } });
    // remove memo from creator
    memo.creator.memos.pull(memo);
    await memo.creator.save({ session });
    await session.commitTransaction();

    res.status(200).json({ success: true, message: 'Delete label successfully' });
  } catch (err) {
    return next(new HttpError(err));
  }
};

const uploadImage = (req, res) => {
  console.log(req.file);
  res.send('single image uploaded successfully');
};

const uploadImages = (req, res) => {
  console.log(req.files);
  res.send('multiple images uploaded successfully');
};

module.exports = {
  getMemos,
  getMemosByLabelId,
  createMemo,
  updateMemo,
  deleteMemo,
  uploadImage,
  uploadImages,
};
