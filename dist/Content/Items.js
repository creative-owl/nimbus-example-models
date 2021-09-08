const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

/**
 * Import shared model parts
 */
const MediaSchema = require('../Shared/Media');
const StatsSchema = require('../Shared/Stats');
const LocaleSchema = require('../Shared/Locale');
const SettingSchema = require('../Shared/Setting');
const ContentSchema = require('../Shared/Content');
const TopCommentsSchema = require('../Shared/TopComments');

const ItemsSchemal = new Schema({
  _id: {
    type: String,
    default: () => uuidv4()
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  item_type: {
    type: String,
    required: true,
  },
  content_type: {
    type: String,
    required: true,
  },
  locale: {
    type: [LocaleSchema],
    required: true,
  },
  media: {
    type: MediaSchema,
    required: true,
  },
  content: {
    type: ContentSchema,
    required: true,
  },
  settings: {
    type: SettingSchema,
    required: true,
  },
  social_stats: {
    type: StatsSchema,
    required: true,
  },
  top_comments: {
    type: [TopCommentsSchema],
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  state: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  collections: {
    type: [String],
    required: true,
  },
  published_at: {
    type: String,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'items',
});

module.exports = mongoose.model('Items', ItemsSchemal);
