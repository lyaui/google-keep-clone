const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const memoSchema = new Schema({});
const Memo = model('Memo', memoSchema);

module.exports = Memo;
