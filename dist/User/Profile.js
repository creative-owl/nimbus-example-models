const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const ProfilesSchema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4()
  },
  user_id: {
    type: String,
    required: true
  },
  key: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  is_shared: {
    type: Boolean,
    default: false
  },
}, {
  timestamp: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  collection: 'user_profile'
});

module.exports = mongoose.model('Profiles', ProfilesSchema);
