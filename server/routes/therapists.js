const express = require('express');
const router = express.Router();
const Therapist = require('../models/Therapist');
const { isDbConnected } = require('../config/db');
const { initialTherapists } = require('../seed/seedData');

// Memory fallback store
let fallbackTherapists = [...initialTherapists.map((t, idx) => ({ ...t, _id: `t-${idx + 1}` }))];

// GET all therapists
router.get('/', async (req, res) => {
  try {
    if (isDbConnected()) {
      const therapists = await Therapist.find().sort({ rating: -1 });
      return res.json(therapists);
    }
    return res.json(fallbackTherapists);
  } catch (error) {
    res.status(500).json({ error: error.message, fallback: fallbackTherapists });
  }
});

// GET single therapist
router.get('/:id', async (req, res) => {
  try {
    if (isDbConnected()) {
      const therapist = await Therapist.findById(req.params.id);
      if (!therapist) return res.status(404).json({ message: 'Therapist not found' });
      return res.json(therapist);
    }
    const found = fallbackTherapists.find((t) => t._id === req.params.id);
    if (!found) return res.status(404).json({ message: 'Therapist not found' });
    return res.json(found);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new therapist
router.post('/', async (req, res) => {
  try {
    if (isDbConnected()) {
      const therapist = new Therapist(req.body);
      const saved = await therapist.save();
      return res.status(201).json(saved);
    }
    const newTherapist = { ...req.body, _id: `t-${Date.now()}` };
    fallbackTherapists.unshift(newTherapist);
    return res.status(201).json(newTherapist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
