const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    clientName: { type: String, required: true },
    clientEmail: { type: String, required: true },
    therapistId: { type: mongoose.Schema.Types.ObjectId, ref: 'Therapist' },
    therapistName: { type: String, required: true },
    sessionType: {
      type: String,
      enum: ['Video Call', 'In-Person Sanctuary', 'Voice Session', 'Chat Support'],
      default: 'Video Call',
    },
    date: { type: String, required: true },
    timeSlot: { type: String, required: true },
    notes: { type: String, default: '' },
    status: {
      type: String,
      enum: ['Confirmed', 'Pending', 'Completed', 'Cancelled'],
      default: 'Confirmed',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);
