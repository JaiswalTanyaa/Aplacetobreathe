const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const { isDbConnected } = require('../config/db');

let fallbackBookings = [
  {
    _id: 'b-1',
    clientName: 'Alex Mercer',
    clientEmail: 'alex@example.com',
    therapistName: 'Dr. Elena Vance, PsyD',
    sessionType: 'Video Call',
    date: '2026-09-12',
    timeSlot: '2:00 PM',
    notes: 'Focus on calming work stress & sleep routine',
    status: 'Confirmed',
    createdAt: new Date().toISOString(),
  },
];

// GET all bookings
router.get('/', async (req, res) => {
  try {
    if (isDbConnected()) {
      const bookings = await Booking.find().sort({ createdAt: -1 });
      return res.json(bookings);
    }
    return res.json(fallbackBookings);
  } catch (error) {
    res.status(500).json({ error: error.message, fallback: fallbackBookings });
  }
});

// POST new booking
router.post('/', async (req, res) => {
  try {
    const { clientName, clientEmail, therapistName, sessionType, date, timeSlot, notes } = req.body;

    if (!clientName || !clientEmail || !therapistName || !date || !timeSlot) {
      return res.status(400).json({ message: 'Please provide all required booking fields.' });
    }

    if (isDbConnected()) {
      const booking = new Booking(req.body);
      const saved = await booking.save();
      return res.status(201).json(saved);
    }

    const newBooking = {
      _id: `b-${Date.now()}`,
      clientName,
      clientEmail,
      therapistName,
      sessionType: sessionType || 'Video Call',
      date,
      timeSlot,
      notes: notes || '',
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
    };
    fallbackBookings.unshift(newBooking);
    return res.status(201).json(newBooking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE booking
router.delete('/:id', async (req, res) => {
  try {
    if (isDbConnected()) {
      const deleted = await Booking.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).json({ message: 'Booking not found' });
      return res.json({ message: 'Booking cancelled successfully' });
    }

    fallbackBookings = fallbackBookings.filter((b) => b._id !== req.params.id);
    return res.json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
