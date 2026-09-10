const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { isDbConnected } = require('../config/db');

router.get('/', (req, res) => {
  const dbConnected = isDbConnected();
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    database: {
      connected: dbConnected,
      type: 'MongoDB Atlas',
      cluster: 'cluster0.pvsgeha.mongodb.net',
      dbName: 'breathe_sanctuary',
      readyState: mongoose.connection.readyState, // 0: disconnected, 1: connected, 2: connecting, 3: disconnecting
      readyStateDescription: ['Disconnected', 'Connected', 'Connecting', 'Disconnecting'][mongoose.connection.readyState] || 'Unknown',
    },
    services: {
      therapists: 'active',
      bookings: 'active',
      journal: 'active',
      community: 'active',
    },
  });
});

module.exports = router;
