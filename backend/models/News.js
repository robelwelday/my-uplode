const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    en: { type: String, required: true },
    am: { type: String },
    ti: { type: String }
  },
  content: {
    en: { type: String },
    am: { type: String },
    ti: { type: String }
  },
  coverImage: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('News', newsSchema);
