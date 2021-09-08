const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

/**
 * Import shared model parts
 */
 const MediaSchema = require('../Shared/Media');
 const LocaleSchema = require('../Shared/Locale');
 const SettingSchema = require('../Shared/Setting');

const CollectionsSchemal = new Schema({
  _id: {
    type: String,
    default: () => uuidv4()
  },
  slug: {
    type: String,
    unique: true,
    required: true
  },
  collection_type: {
    type: Number,
    required: true
  },
  locale: {
    type: [LocaleSchema],
    required: true
  },
  media: {
    type: MediaSchema,
    required: true
  },
  settings: {
    type: SettingSchema,
    required: true
  },
  related: {
    type: [String],
    default: []
  },
  category: {
    type: String,
    required: true
  },
  state: {
    type: Number,
    required: true
  },
  creator: {
    type: String,
    required: true
  },
  parent_id: {
    type: String,
    default: null
  },
  ancestor_ids: {
    type: [String],
    default: []
  },
  product: {
    type: String,
    required: true
  },
  is_indexed: {
    type: Boolean,
    required: true
  },
  published_at: {
    type: String,
    default: null
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  collection: 'collections'
});

module.exports = mongoose.model('Collections', CollectionsSchemal);
