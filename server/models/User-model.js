const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true, minlength: 6 },
  memos: [{ type: Schema.Types.ObjectId, ref: 'Memo', default: [] }],
  labels: [{ type: Schema.Types.ObjectId, ref: 'Label', default: [] }],
  settings: {
    theme: { type: String, required: true, enum: ['LIGHT', 'DARK'], default: 'LIGHT' },
    layout: { type: String, required: true, enum: ['GRID', 'LIST'], default: 'GRID' },
    sort: { type: String, required: true, enum: ['ASCEND', 'DESCEND'], default: 'DESCEND' },
  },
});
const User = model('User', userSchema);

module.exports = User;
