const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SettingSchema = new Schema({
  is_premium: {
    type: Boolean,
    required: true
  },
  excluded_domains: {
    type: [String],
    default: []
  },
  excluded_countries_iso: {
    type: [String],
    default: []
  },
  excluded_network_endpoints: {
    type: [Number],
    default: []
  },
  age_rating: {
    type: String,
    required: true
  }
}, { _id: false });

module.exports = SettingSchema;
