import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function JoinSanctuary() {
  const [activeTab, setActiveTab]   = useState('login');
  const [name, setName]             = useState('');
  const [contact, setContact]       = useState('');
  const [step, setStep]             = useState('form');   // 'form' | 'otp' | 'done'
  const [otp, setOtp]               = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [otpError, setOtpError]     = useState('');
  const [sending, setSending]       = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  /* ── Resolve display name ───────────────────────────────────────────────── */
  const getResolvedName = () => {
    let resolved = name.trim();
    if (!resolved && contact.includes('@')) {
      const prefix = contact.split('@')[0];
      resolved = prefix.charAt(0).toUpperCase() + prefix.slice(1);
    }
    return resolved || 'Friend';
  };

  /* ── Step 1: Submit form → send OTP via Brevo API ───────────────────────── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contact.trim()) return;

    // Generate a 6-digit OTP (stored locally for demo; server sends it via Brevo)
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(code);

    if (contact.includes('@')) {
      // Real email — call server to send via Brevo
      setSending(true);
      try {
        await fetch('http://localhost:5000/api/auth/send-otp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: contact.trim(), otp: code, name: getResolvedName() }),
        });
      } catch {
        // Server might be offline in dev — fall through to local OTP check
      } finally {
        setSending(false);
      }
    }

    setStep('otp');
  };

  /* ── Step 2: Verify OTP ─────────────────────────────────────────────────── */
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp.trim() === generatedOtp) {
      login({ name: getResolvedName(), email: contact.includes('@') ? contact.trim() : '' });
      setStep('done');
      setTimeout(() => navigate('/explore'), 2000);
    } else {
      setOtpError('That code doesn\'t match. Please try again.');
    }
  };

  /* ── Resend OTP ─────────────────────────────────────────────────────────── */
  const handleResend = () => {
    setOtp('');
    setOtpError('');
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(code);
    if (contact.includes('@')) {
      fetch('http://localhost:5000/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: contact.trim(), otp: code, name: getResolvedName() }),
      }).catch(() => {});
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Organic Background Blobs */}
      <div
        className="pointer-events-none"
        style={{
          position: 'absolute', top: '-10%', left: '-10%',
          width: '50vw', height: '50vw',
          background: 'radial-gradient(circle, rgba(139,168,142,0.15) 0%, rgba(139,168,142,0) 70%)',
          borderRadius: '50%', zIndex: 0, filter: 'blur(40px)',
        }}
      />
      <div
        className="pointer-events-none"
        style={{
          position: 'absolute', bottom: '-20%', right: '-10%',
          width: '60vw', height: '60vw',
          background: 'radial-gradient(circle, rgba(167,153,183,0.1) 0%, rgba(167,153,183,0) 70%)',
          borderRadius: '50%', zIndex: 0, filter: 'blur(60px)',
        }}
      />

      <div
        className="w-full max-w-md relative z-10"
        style={{ background: '#ffffff', boxShadow: '0 20px 40px rgba(139, 168, 142, 0.05)', borderRadius: '32px', padding: '2rem', border: '1px solid #e4e2de', overflow: 'hidden' }}
      >
        {/* Branding */}
        <div className="text-center mb-8">
          <h1 className="font-headline-lg text-headline-lg text-primary mb-2">A Place to Breathe</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Your safe space for healing.</p>
        </div>

        {/* Gentle Illustration */}
        <div
          className="mx-auto mb-8 overflow-hidden"
          style={{ width: '128px', height: '128px', borderRadius: '50%', boxShadow: '0 20px 40px rgba(139, 168, 142, 0.05)', border: '1px solid #efeeea' }}
        >
          <img
            className="w-full h-full object-cover"
            alt="A gentle, minimalist illustration of a calming nature scene"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5zo71z3JSo1F5RpcusBQLkr6QiN7PPtXqz9VLGMJDJzmzEY5g0KQX8_j7ZuE36nKf977-b4qm0ixmGVlXbHPmNA11bkc6XfGbEPusA3NP0xJGEKYKtxUM09HYUvw0NS_fQIgygK1Q1aovmGOUojfXbCM6YyvtnrhmbXQ2j_GiHKh8ixAVslfH4h1jTvfWE8e17i4IaYRdUL2KAxQbYA5klBUGMB1i0vh3Wac16dfUlIjKo0eJeSZG9Q"
          />
        </div>

        {/* ── STEP: DONE ──────────────────────────────────────────────────── */}
        {step === 'done' && (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-full mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary">Welcome to the Sanctuary</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Identity verified. Taking you to your private sanctuary…
            </p>
          </div>
        )}

        {/* ── STEP: OTP VERIFICATION ──────────────────────────────────────── */}
        {step === 'otp' && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">mark_email_read</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Check your inbox</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                We sent a 6-digit verification code to <strong className="text-on-surface">{contact}</strong>
              </p>
              {/* Dev helper — remove in production */}
              <p className="text-xs text-primary/60 mt-2 font-mono bg-primary/5 rounded-xl px-3 py-1 inline-block">
                Dev mode: <strong>{generatedOtp}</strong>
              </p>
            </div>

            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2 ml-4" htmlFor="otp">
                  Verification Code
                </label>
                <input
                  id="otp"
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  required
                  placeholder="Enter 6-digit code"
                  value={otp}
                  onChange={(e) => { setOtp(e.target.value.replace(/\D/g, '')); setOtpError(''); }}
                  className="w-full bg-surface-bright border-none rounded-full px-6 py-4 font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-shadow text-center text-xl tracking-[0.4em]"
                  style={{ backgroundColor: '#fbf9f5' }}
                />
                {otpError && (
                  <p className="text-error text-sm mt-2 ml-4">{otpError}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-on-primary font-label-md text-label-md py-4 rounded-full hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
                style={{ boxShadow: '0 20px 40px rgba(139, 168, 142, 0.05)' }}
              >
                <span>Verify & Enter Sanctuary</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </form>

            <div className="text-center space-y-2">
              <button
                onClick={handleResend}
                className="text-primary font-body-md text-body-md hover:underline transition-colors text-sm"
              >
                Resend code
              </button>
              <span className="text-on-surface-variant mx-2 text-sm">·</span>
              <button
                onClick={() => { setStep('form'); setOtp(''); setOtpError(''); }}
                className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors text-sm"
              >
                Change email
              </button>
            </div>
          </div>
        )}

        {/* ── STEP: FORM ──────────────────────────────────────────────────── */}
        {step === 'form' && (
          <>
            {/* Toggle Login / Join Us */}
            <div className="flex bg-surface-container rounded-full p-1 mb-8" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'login'}
                onClick={() => { setActiveTab('login'); setName(''); setContact(''); }}
                className={`flex-1 py-3 px-6 rounded-full font-label-md text-label-md transition-all duration-300 ease-in-out ${
                  activeTab === 'login' ? 'bg-white text-primary' : 'text-on-surface-variant hover:text-primary'
                }`}
                style={activeTab === 'login' ? { boxShadow: '0 20px 40px rgba(139, 168, 142, 0.05)' } : {}}
              >
                Login
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'join'}
                onClick={() => { setActiveTab('join'); setName(''); setContact(''); }}
                className={`flex-1 py-3 px-6 rounded-full font-label-md text-label-md transition-all duration-300 ease-in-out ${
                  activeTab === 'join' ? 'bg-white text-primary' : 'text-on-surface-variant hover:text-primary'
                }`}
                style={activeTab === 'join' ? { boxShadow: '0 20px 40px rgba(139, 168, 142, 0.05)' } : {}}
              >
                Join Us
              </button>
            </div>

            {/* Auth Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field — registration only */}
              {activeTab === 'join' && (
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-2 ml-4" htmlFor="name">
                    Preferred Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="How should we call you?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-surface-bright border-none rounded-full px-6 py-4 font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                    style={{ backgroundColor: '#fbf9f5' }}
                  />
                </div>
              )}

              {/* Email Field */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2 ml-4" htmlFor="contact">
                  Email Address
                </label>
                <input
                  id="contact"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full bg-surface-bright border-none rounded-full px-6 py-4 font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                  style={{ backgroundColor: '#fbf9f5' }}
                />
                <p className="font-body-md text-on-surface-variant mt-2 ml-4 opacity-70" style={{ fontSize: '13px' }}>
                  We'll send a verification code to this email.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-primary text-on-primary font-label-md text-label-md py-4 rounded-full hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group disabled:opacity-60"
                style={{ boxShadow: '0 20px 40px rgba(139, 168, 142, 0.05)' }}
              >
                {sending
                  ? <><span className="material-symbols-outlined animate-spin text-sm">progress_activity</span> Sending code…</>
                  : <><span>Send Verification Code</span><span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span></>
                }
              </button>
            </form>

            {/* Guest Link */}
            <div className="mt-8 text-center">
              <Link
                to="/explore"
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors inline-block border-b border-transparent hover:border-primary pb-1"
              >
                Continue as Guest
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
