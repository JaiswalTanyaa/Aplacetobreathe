const express = require('express');
const router = express.Router();
const JournalEntry = require('../models/JournalEntry');
const { isDbConnected } = require('../config/db');

let fallbackJournal = [
  {
    _id: 'j-1',
    title: 'Morning Sun and Deep Breaths',
    content: 'Took 10 minutes to sit by the window before checking notifications. Feeling more grounded than yesterday.',
    mood: 'Peaceful',
    tags: ['Mindfulness', 'Morning Routine'],
    date: new Date().toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'j-2',
    title: 'Reflections on setting work boundaries',
    content: 'Politely declined an urgent after-hours request. It caused a brief flutter of guilt, but breathing deeply helped me recognize that my rest is sacred.',
    mood: 'Hopeful',
    tags: ['Boundaries', 'Growth'],
    date: new Date(Date.now() - 86400000).toISOString().split('T')[0],
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  }
];

// GET journal entries
router.get('/', async (req, res) => {
  try {
    if (isDbConnected()) {
      const entries = await JournalEntry.find().sort({ createdAt: -1 });
      return res.json(entries);
    }
    return res.json(fallbackJournal);
  } catch (error) {
    res.status(500).json({ error: error.message, fallback: fallbackJournal });
  }
});

// POST new journal entry
router.post('/', async (req, res) => {
  try {
    const { title, content, mood, tags } = req.body;
    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required.' });
    }

    if (isDbConnected()) {
      const entry = new JournalEntry({
        title,
        content,
        mood: mood || 'Peaceful',
        tags: tags || [],
        date: new Date().toISOString().split('T')[0],
      });
      const saved = await entry.save();
      return res.status(201).json(saved);
    }

    const newEntry = {
      _id: `j-${Date.now()}`,
      title,
      content,
      mood: mood || 'Peaceful',
      tags: tags || [],
      date: new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString(),
    };
    fallbackJournal.unshift(newEntry);
    return res.status(201).json(newEntry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE journal entry
router.delete('/:id', async (req, res) => {
  try {
    if (isDbConnected()) {
      const deleted = await JournalEntry.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).json({ message: 'Entry not found' });
      return res.json({ message: 'Journal entry removed' });
    }

    fallbackJournal = fallbackJournal.filter((e) => e._id !== req.params.id);
    return res.json({ message: 'Journal entry removed' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
