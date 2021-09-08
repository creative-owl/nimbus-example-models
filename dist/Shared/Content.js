const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
  extension: {
    type: String,
    default: null,
  },
  src: {
    type: String,
    default: null,
  },
  quality: {
    type: String,
    default: null,
  },
  size: {
    type: Number,
    default: null,
  },
  size_unit: {
    type: String,
    default: null,
  },
}, { _id: false });

module.exports = ContentSchema;
