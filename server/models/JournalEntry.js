const mongoose = require('mongoose');

const journalEntrySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    mood: {
      type: String,
      enum: ['Peaceful', 'Calm', 'Grateful', 'Reflective', 'Anxious', 'Overwhelmed', 'Hopeful'],
      default: 'Peaceful',
    },
    tags: [{ type: String }],
    date: { type: String, default: () => new Date().toISOString().split('T')[0] },
    userId: { type: String, default: 'guest-user' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('JournalEntry', journalEntrySchema);
