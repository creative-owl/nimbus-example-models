const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const ProvidersSchema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4()
  },
  name: {
    type: String,
    unique: true,
    required: true
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  collection: 'content_providers'
});

module.exports = mongoose.model('Providers', ProvidersSchema);
