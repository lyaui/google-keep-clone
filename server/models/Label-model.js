const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const labelSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  memos: [{ type: Schema.Types.ObjectId, ref: 'Memo', default: [] }],
});
const Label = model('Label', labelSchema);

module.exports = Label;
