const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const linkSchema = new Schema({
  title: { type: String, default: '' },
  url: { type: String, default: '', required: true },
  image: { type: String, default: '' },
});

const taskSchema = new Schema({
  name: { type: String, default: '', required: true },
  isCompleted: { type: Boolean, default: false, required: true },
  id: { type: String, default: '', required: true },
});

const memoSchema = new Schema(
  {
    creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, default: '' },
    content: { type: String, default: '' },
    images: [{ type: String, default: '' }],
    isTaskList: { type: Boolean, default: false },
    isPinned: { type: Boolean, default: false },
    isArchived: { type: Boolean, default: false },
    links: [linkSchema],
    labels: [{ type: Schema.Types.ObjectId, ref: 'Label' }],
    tasks: [taskSchema],
    color: {
      type: String,
      enum: [
        'DEFAULT',
        'RED',
        'ORANGE',
        'YELLOW',
        'GREEN',
        'TEAL',
        'BLUE',
        'DARK_BLUE',
        'PURPLE',
        'PINK',
        'BROWN',
        'GRAY',
      ],
      default: 'DEFAULT',
    },
  },
  { timestamps: true },
);
const Memo = model('Memo', memoSchema);

module.exports = Memo;
