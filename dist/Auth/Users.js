const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const UsersSchema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4()
  },
  first_name: {
    type: String,
    default: null
  },
  last_name: {
    type: String,
    default: null
  },
  email: {
    type: String,
    unique: true,
    default: null
  },
  msisdn: {
    type: Number,
    unique: true,
    default: null
  },
  oauth_user_id: {
    type: String,
    unique: true,
    default: null
  },
  password: {
    type: String,
    required: true
  },
  user_type: {
    type: String,
    default: 'user'
  },
  premium_use: {
    type: Number,
    default: 3
  },
  geo_ip: {
    type: String,
    default: null
  },
  is_verified: {
    type: Boolean,
    default: false
  },
  has_logged_in: {
    type: Boolean,
    default: false
  },
  recieves_newsletter: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  collection: 'users'
});

module.exports = mongoose.model('Users', UsersSchema);
