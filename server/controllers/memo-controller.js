const mongoose = require('mongoose');
const { getLinkPreview } = require('link-preview-js');
const { HttpError, Memo, Label, User } = require('../models');

const getUserMemos = async (req, res, next) => {
  const { id: userId } = req.user;
  const { isArchived } = req.query;

  try {
    // check if user exists
    const user = await User.findById(userId);
    if (!user) return next(new HttpError('Could not find user for provided id', 404));

    // check user settings and sort data
    const sortedOrder = user.settings.sort === 'ASCEND' ? 1 : -1;
    const memos = await Memo.find({ creator: userId, isArchived: !!isArchived || false })
      .populate('labels', ['name', '_id'])
      .sort({
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

const getUserMemosByLabelName = async (req, res, next) => {
  const { id: userId } = req.user;
  const { labelName } = req.params;

  try {
    // check if user exists
    const user = await User.findById(userId);
    if (!user) return next(new HttpError('Could not find user for provided id', 404));

    // check if label exists
    const label = await Label.findOne({ creator: userId, name: labelName });
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

const getUserMemoByMemoId = async (req, res, next) => {
  const { id: userId } = req.user;
  const { memoId } = req.params;

  try {
    // check if user exists
    const user = await User.findById(userId);
    if (!user) return next(new HttpError('Could not find user for provided id', 404));

    // check if memo exists
    const memo = await Memo.findById({ creator: userId, _id: memoId }).populate('labels');
    if (!memo) return next(new HttpError('Could not find memo for provided id', 404));

    res.status(200).json({
      success: true,
      memo,
    });
  } catch {}
};

const createMemo = async (req, res, next) => {
  const { id: userId } = req.user;
  const { title, content, images, isTaskList, isPinned, isArchived, links, labels, tasks, color } =
    req.body;
  try {
    // check if user exists
    const user = await User.findById(userId);
    if (!user) return next(new HttpError('Could not find user for provided id', 404));

    const createdMemo = new Memo({
      creator: userId,
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
  const { id: userId } = req.user;
  const { title, content, images, isPinned, isArchived, links, labels, tasks, color } = req.body;
  const { memoId } = req.params;

  try {
    // check if user exists
    const user = await User.findById(userId);
    if (!user) return next(new HttpError('Could not find user for provided id', 404));

    // check if memo exists
    const memo = await Memo.findOne({ creator: userId, _id: memoId });
    if (!memo) return next(new HttpError('Could not find memo for provided id.', 404));

    const session = await mongoose.startSession();
    session.startTransaction();
    // update memo
    const updatedMemo = await Memo.findOneAndUpdate(
      { $and: [{ creator: userId }, { _id: memoId }] },
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
  const { id: userId } = req.user;
  const { memoId } = req.params;

  try {
    // check if memo exists
    const memo = await Memo.findOne({ creator: userId, _id: memoId });
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

const getLinkInfo = async (req, res) => {
  const { links } = req.body;

  const resLinkInfos = [];
  try {
    for (let i = 0; i < links.length; i += 1) {
      const res = await getLinkPreview(links[i]);
      const link = { url: res.url, title: res.title, images: res.images };
      resLinkInfos.push(link);
    }
    res.status(200).json({
      success: true,
      links: resLinkInfos,
    });
  } catch (err) {
    return next(new HttpError(err));
  }
};

const uploadImage = (req, res) => {
  res.send('single image uploaded successfully');
};

const uploadImages = (req, res) => {
  res.send('multiple images uploaded successfully');
};

module.exports = {
  getUserMemos,
  getUserMemosByLabelName,
  getUserMemoByMemoId,
  createMemo,
  updateMemo,
  deleteMemo,
  getLinkInfo,
  uploadImage,
  uploadImages,
};
