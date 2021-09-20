const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const labelSchema = new Schema({});
const Label = model('Label', labelSchema);

module.exports = Label;
