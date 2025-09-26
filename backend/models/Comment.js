const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  userName: { type: String, required: true },
  text: { type: String, required: true },
  reply: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
