const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  google_id: { type: String, require: true, default: null },
  password: { type: String, require: true, minlength: 6 },
  memos: [{ type: Schema.Types.ObjectId, ref: 'Memo', default: [] }],
  labels: [{ type: Schema.Types.ObjectId, ref: 'Label', default: [] }],
  settings: {
    theme: { type: String, enum: ['LIGHT', 'DARK'], default: 'LIGHT' },
    layout: { type: String, enum: ['GRID', 'LIST'], default: 'GRID' },
    sort: { type: String, enum: ['ASCEND', 'DESCEND'], default: 'DESCEND' },
    isFixedMenu: { type: Boolean, default: true },
  },
});
const User = model('User', userSchema);

module.exports = User;
