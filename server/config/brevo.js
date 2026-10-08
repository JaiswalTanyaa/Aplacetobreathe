require('dotenv').config();
const SibApiV3Sdk = require('@getbrevo/brevo');

/**
 * sendOtpEmail — sends a 6-digit OTP to the given email via Brevo transactional API.
 * Falls back gracefully if BREVO_API_KEY is not set (dev mode).
 *
 * @param {string} toEmail   - recipient email address
 * @param {string} toName    - recipient display name
 * @param {string} otp       - 6-digit code to include in the email
 */
async function sendOtpEmail(toEmail, toName, otp) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.log(`[Brevo] BREVO_API_KEY not set — skipping send. OTP for ${toEmail}: ${otp}`);
    return;
  }

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  apiInstance.authentications['api-key'].apiKey = apiKey;

  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.to = [{ email: toEmail, name: toName }];
  sendSmtpEmail.sender = {
    name: 'A Place to Breathe',
    email: process.env.BREVO_SENDER_EMAIL || 'noreply@aplacetobreathe.com',
  };
  sendSmtpEmail.subject = 'Your verification code — A Place to Breathe';
  sendSmtpEmail.htmlContent = `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px; background: #fbf9f5; border-radius: 24px; border: 1px solid #e4e2de;">
      <h2 style="color: #4a654e; font-size: 24px; margin-bottom: 8px;">A Place to Breathe 🌿</h2>
      <p style="color: #666; font-size: 15px; margin-bottom: 24px;">Hi ${toName}, here is your one-time verification code:</p>
      <div style="background: #ffffff; border: 2px solid #8ba88e; border-radius: 16px; padding: 24px; text-align: center; margin-bottom: 24px;">
        <span style="font-size: 40px; font-weight: bold; letter-spacing: 12px; color: #4a654e;">${otp}</span>
      </div>
      <p style="color: #999; font-size: 13px;">This code expires in 10 minutes. If you didn't request this, you can safely ignore this email.</p>
      <hr style="border: none; border-top: 1px solid #e4e2de; margin: 24px 0;" />
      <p style="color: #bbb; font-size: 12px;">© A Place to Breathe · Your safe space for healing</p>
    </div>
  `;

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log(`[Brevo] OTP sent to ${toEmail}`);
  } catch (err) {
    console.error('[Brevo] Failed to send OTP:', err?.message || err);
  }
}

module.exports = { sendOtpEmail };
