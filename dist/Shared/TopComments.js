const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TopCommentsSchema = new Schema({
  id: {
    type: String,
    default: null,
  },
  user_id: {
    type: String,
    default: null,
  },
  commentor_name: {
    type: String,
    default: null,
  },
  comment: {
    type: String,
    default: null,
  },
  parent_id: {
    type: String,
    default: null,
  },
  ancestor_ids: {
    type: [String],
    default: [],
  },
  created_at: {
    type: String,
    default: null
  },
}, { _id: false });

module.exports = TopCommentsSchema;
