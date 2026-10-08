const express = require('express');
const router = express.Router();
const { sendOtpEmail } = require('../config/brevo');

/**
 * POST /api/auth/send-otp
 * Body: { email, otp, name }
 * Sends the OTP via Brevo transactional email.
 */
router.post('/send-otp', async (req, res) => {
  const { email, otp, name } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ error: 'email and otp are required' });
  }

  await sendOtpEmail(email, name || 'Friend', otp);
  res.json({ success: true, message: `OTP dispatched to ${email}` });
});

module.exports = router;
