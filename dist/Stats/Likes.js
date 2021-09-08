const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const LikesSchema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4()
  },
  item_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  collection: 'stats_likes'
});

module.exports = mongoose.model('Likes', LikesSchema);
