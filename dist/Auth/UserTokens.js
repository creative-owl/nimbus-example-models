const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const UserTokensSchema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4()
  },
  user_id: {
    type: String,
    required: true
  },
  token: {
    type: String,
    default: null
  },
  pin: {
    type: Number,
    default: null
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  collection: 'user_tokens'
});

module.exports = mongoose.model('UserTokens', UserTokensSchema);
