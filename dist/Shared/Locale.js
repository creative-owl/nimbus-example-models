const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocaleSchema = new Schema({
  language_iso: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  seo_title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  seo_summary: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  seo_description: {
    type: String,
    required: true
  },
}, { _id: false });

module.exports = LocaleSchema;
