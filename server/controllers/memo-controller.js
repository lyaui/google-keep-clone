const { HttpError, Memo } = require('../models');

const createMemo = async (req, res, next) => {
  const { title, content, images, isPinned, isAchived, links, labels, tasks, color } = req.body;
  try {
    const createdMemo = await new Memo({
      title,
      content,
      images,
      isPinned,
      isAchived,
      links,
      labels,
      tasks,
      color,
    }).save();
    res.status(201).json({
      success: true,
      data: createdMemo,
      message: 'create new memo successfully.',
    });
  } catch (err) {
    next(new HttpError(err));
  }
};

module.exports = { createMemo };
