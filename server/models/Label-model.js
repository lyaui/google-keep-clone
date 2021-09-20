const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const labelSchema = new Schema({
  name: { type: String, required: true, unique: true },
  memos: [{ type: Schema.Types.ObjectId, ref: 'MEMO', default: [] }],
});
const Label = model('Label', labelSchema);

module.exports = Label;
