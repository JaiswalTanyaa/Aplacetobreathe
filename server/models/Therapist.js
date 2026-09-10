const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    specialties: [{ type: String }],
    experienceYears: { type: Number, default: 5 },
    rating: { type: Number, default: 4.9 },
    reviewsCount: { type: Number, default: 42 },
    bio: { type: String, required: true },
    avatar: { type: String },
    hourlyRate: { type: Number, default: 95 },
    availability: [{ type: String }],
    isVerified: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Therapist', therapistSchema);
