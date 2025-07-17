
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  publication_date: { type: Date, default: Date.now },
  tags: [String],
  view_count: { type: Number, default: 0 }
});

module.exports = mongoose.model('Post', PostSchema);
