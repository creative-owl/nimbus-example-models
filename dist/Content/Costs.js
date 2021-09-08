const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const CostsSchema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4()
  },
  item_id: {
    type: String,
    required: true
  },
  provider_id: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  collection: 'content_costs'
});

module.exports = mongoose.model('Costs', CostsSchema);
