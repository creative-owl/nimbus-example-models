const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const GeneralConfigSchema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4()
  },
  key: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  collection: 'general_config'
});

module.exports = mongoose.model('GeneralConfig', GeneralConfigSchema);
