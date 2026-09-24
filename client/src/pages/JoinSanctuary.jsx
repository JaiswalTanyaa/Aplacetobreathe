import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function JoinSanctuary() {
  const [activeTab, setActiveTab] = useState('login');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contact.trim()) return;
    // Set auth state immediately so Navbar updates to logged-in view
    login({
      name: name.trim() || 'Friend',
      email: contact.includes('@') ? contact.trim() : '',
    });
    setSubmitted(true);
    setTimeout(() => {
      navigate('/explore');
    }, 2000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Organic Background Blobs */}
      <div
        className="pointer-events-none"
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(139,168,142,0.15) 0%, rgba(139,168,142,0) 70%)',
          borderRadius: '50%',
          zIndex: 0,
          filter: 'blur(40px)',
        }}
      />
      <div
        className="pointer-events-none"
        style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(167,153,183,0.1) 0%, rgba(167,153,183,0) 70%)',
          borderRadius: '50%',
          zIndex: 0,
          filter: 'blur(60px)',
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
          style={{
            width: '128px',
            height: '128px',
            borderRadius: '50%',
            boxShadow: '0 20px 40px rgba(139, 168, 142, 0.05)',
            border: '1px solid #efeeea',
          }}
        >
          <img
            className="w-full h-full object-cover"
            alt="A gentle, minimalist illustration of a calming nature scene"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5zo71z3JSo1F5RpcusBQLkr6QiN7PPtXqz9VLGMJDJzmzEY5g0KQX8_j7ZuE36nKf977-b4qm0ixmGVlXbHPmNA11bkc6XfGbEPusA3NP0xJGEKYKtxUM09HYUvw0NS_fQIgygK1Q1aovmGOUojfXbCM6YyvtnrhmbXQ2j_GiHKh8ixAVslfH4h1jTvfWE8e17i4IaYRdUL2KAxQbYA5klBUGMB1i0vh3Wac16dfUlIjKo0eJeSZG9Q"
          />
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-full mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary">Welcome to the Sanctuary</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Verification sent to <strong>{contact}</strong>. Transporting you to your private sanctuary...
            </p>
          </div>
        ) : (
          <>
            {/* Toggle Login / Join Us */}
            <div className="flex bg-surface-container rounded-full p-1 mb-8" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'login'}
                onClick={() => setActiveTab('login')}
                className={`flex-1 py-3 px-6 rounded-full font-label-md text-label-md transition-all duration-300 ease-in-out ${
                  activeTab === 'login'
                    ? 'bg-white text-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
                style={activeTab === 'login' ? { boxShadow: '0 20px 40px rgba(139, 168, 142, 0.05)' } : {}}
              >
                Login
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'join'}
                onClick={() => setActiveTab('join')}
                className={`flex-1 py-3 px-6 rounded-full font-label-md text-label-md transition-all duration-300 ease-in-out ${
                  activeTab === 'join'
                    ? 'bg-white text-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
                style={activeTab === 'join' ? { boxShadow: '0 20px 40px rgba(139, 168, 142, 0.05)' } : {}}
              >
                Join Us
              </button>
            </div>

            {/* Auth Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field — shown only for Join Us */}
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

              {/* Email/Phone Field */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2 ml-4" htmlFor="contact">
                  Email or Phone Number
                </label>
                <input
                  id="contact"
                  type="text"
                  required
                  placeholder="Enter your details"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full bg-surface-bright border-none rounded-full px-6 py-4 font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                  style={{ backgroundColor: '#fbf9f5' }}
                />
                <p className="font-body-md text-on-surface-variant mt-2 ml-4 opacity-70" style={{ fontSize: '13px' }}>
                  Take your time. This is a safe space.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-on-primary font-label-md text-label-md py-4 rounded-full hover:bg-primary-container transition-colors flex items-center justify-center gap-2 group"
                style={{ boxShadow: '0 20px 40px rgba(139, 168, 142, 0.05)' }}
              >
                <span>Send Verification Code</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
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
