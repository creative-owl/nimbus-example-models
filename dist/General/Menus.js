const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

/**
 * Import shared model parts
 */
const LocaleSchema = require('../Shared/Locale');

const MenusSchema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4()
  },
  category_id: {
    type: String,
    required: true,
  },
  parent_id: {
    type: String,
    default: null,
  },
  locale: {
    type: [LocaleSchema],
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  excluded_countries_iso: {
    type: [String],
    default: [],
  },
  excluded_network_endpoints: {
    type: [String],
    default: [],
  },
  is_admin_menu_item: {
    type: Boolean,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
}, {
  timestamp: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  collection: 'menu'
});

module.exports = mongoose.model('Menus', MenusSchema);
