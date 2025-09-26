const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    en: { type: String, required: true },
    am: { type: String },
    ti: { type: String },
  },
  description: {
    en: { type: String },
    am: { type: String },
    ti: { type: String },
  },
  image: { type: String },
  available: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
