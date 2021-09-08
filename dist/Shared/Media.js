const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MediaSchema = new Schema({
  icon: {
    type: String,
    default: null
  },
  portrait: {
    type: [String],
    default: []
  },
  landscape: {
    type: [String],
    default: []
  },
  square: {
    type: [String],
    default: []
  },
}, { _id: false });

module.exports = MediaSchema;
