const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const CommentsSchema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4()
  },
  user_id: {
    type: String,
    required: true,
  },
  item_id: {
    type: String,
    required: true,
  },
  commentor_name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  parent_id: {
    type: String,
    default: null,
  },
  ancestor_ids: {
    type: [String],
    default: [],
  }
}, {
  timestamps: {
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  },
  collection: 'stats_comments'
});

module.exports = mongoose.model('Comments', CommentsSchema);
