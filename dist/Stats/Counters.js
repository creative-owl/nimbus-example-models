const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const CountersSchema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4()
  },
  item_id: {
    type: String,
    unique: true,
    required: true,
  },
  like_count: {
    type: Number,
    required: true,
  },
  view_count: {
    type: Number,
    required: true,
  },
  aggregated_rating: {
    type: Number,
    required: true,
  },
  comment_count: {
    type: Number,
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  collection: 'stats_counters'
});

module.exports = mongoose.model('Counters', CountersSchema);
