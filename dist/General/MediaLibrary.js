const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const MediaLibrarySchema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4()
  },
  uploading_user_id: {
    type: String,
    required: true,
  },
  initial_s3_upload_locations: {
    type: String,
    required: true,
  },
  full_file_name: {
    type: String,
    required: true,
  },
  file_type: {
    type: String,
    default: null,
  },
  internal_attachment_endpoint_name: {
    type: String,
    required: true,
  },
  internal_associatable_data_item_id: {
    type: String,
    required: true,
  },
  size: {
    default: null,
    type: Number,
  },
  attached_to: {
    type: [String],
    default: [],
  },
  full_cloudfront_uri: {
    type: String,
    default: null,
  },
}, {
  timestamp: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  collection: 'media_library'
});

module.exports = mongoose.model('MediaLibrary', MediaLibrarySchema);
