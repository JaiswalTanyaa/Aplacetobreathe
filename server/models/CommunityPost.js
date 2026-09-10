const mongoose = require('mongoose');

const communityPostSchema = new mongoose.Schema(
  {
    author: { type: String, default: 'Kind Soul' },
    avatar: { type: String },
    category: {
      type: String,
      enum: ['Stories of Hope', 'Anxiety & Grounding', 'Gratitude Circle', 'Daily Reflections', 'Mindful Living'],
      default: 'Stories of Hope',
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    likes: { type: Number, default: 0 },
    commentsCount: { type: Number, default: 0 },
    badge: { type: String, default: 'Member' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('CommunityPost', communityPostSchema);
