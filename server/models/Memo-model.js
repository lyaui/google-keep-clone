const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const memoSchema = new Schema(
  {
    creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, default: '' },
    content: { type: String, default: '' },
    images: [{ type: String, default: [] }],
    isPinned: { type: Boolean, defaule: false },
    isAchived: { type: Boolean, defaule: false },
    links: [{ type: String, default: [] }],
    labels: [{ type: Schema.Types.ObjectId, ref: 'Label', default: [] }],
    tasks: [
      {
        task: { type: String, default: '' },
        isCompleted: { type: Boolean, default: false },
        default: [],
      },
    ],
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
