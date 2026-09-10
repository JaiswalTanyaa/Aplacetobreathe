require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { connectDB } = require('./config/db');
const { seedDatabase } = require('./seed/seedData');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Connect to MongoDB Atlas and run seeder if connected
connectDB().then(() => {
  seedDatabase();
});

// Mount API Routes
app.use('/api/health', require('./routes/health'));
app.use('/api/therapists', require('./routes/therapists'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/journal', require('./routes/journal'));
app.use('/api/community', require('./routes/community'));

// Root API Welcome
app.get('/api', (req, res) => {
  res.json({
    message: '🌿 A Place to Breathe API is running',
    version: '1.0.0',
    endpoints: ['/api/health', '/api/therapists', '/api/bookings', '/api/journal', '/api/community'],
  });
});

// Fallback 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

// Start listening
app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🕊️  A Place to Breathe Server running on port ${PORT}`);
  console.log(`📡  API URL: http://localhost:${PORT}/api`);
  console.log(`======================================================\n`);
});
