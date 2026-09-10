import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wind, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function JoinSanctuary() {
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'join'
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contact.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      navigate('/journal');
    }, 2000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-[40px] p-8 md:p-12 shadow-lg border border-surface-container-high relative overflow-hidden">
        {/* Branding */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-3 shadow">
            <Wind className="w-6 h-6 animate-pulse" />
          </div>
          <h1 className="font-headline font-bold text-2xl text-primary mb-1">
            A Place to Breathe
          </h1>
          <p className="text-xs text-on-surface-variant">Your safe space for healing.</p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 bg-primary-container/30 text-primary rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-headline font-bold text-xl text-on-surface">
              Welcome to the Sanctuary
            </h3>
            <p className="text-xs text-on-surface-variant">
              Verification sent to <strong>{contact}</strong>. Transporting you to your private sanctuary journal...
            </p>
          </div>
        ) : (
          <div>
            {/* Toggle Login / Join Us */}
            <div className="flex bg-surface-container rounded-full p-1 mb-8" role="tablist">
              <button
                type="button"
                onClick={() => setActiveTab('login')}
                className={`flex-1 py-2.5 px-4 rounded-full text-xs font-bold transition-all ${
                  activeTab === 'login'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('join')}
                className={`flex-1 py-2.5 px-4 rounded-full text-xs font-bold transition-all ${
                  activeTab === 'join'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                Join Us
              </button>
            </div>

            {/* Auth Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {activeTab === 'join' && (
                <div>
                  <label className="block font-bold text-on-surface-variant mb-1 ml-2">
                    Preferred Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="How should we address you?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-5 py-3 rounded-full border border-outline-variant/60 focus:outline-none focus:border-primary bg-[#fbf9f5]"
                  />
                </div>
              )}

              <div>
                <label className="block font-bold text-on-surface-variant mb-1 ml-2">
                  Email or Phone Number
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your contact info"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-5 py-3 rounded-full border border-outline-variant/60 focus:outline-none focus:border-primary bg-[#fbf9f5]"
                />
                <p className="text-[11px] text-on-surface-variant mt-1.5 ml-3 opacity-70">
                  Take your time. This is a safe and protected space.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-primary text-white font-bold text-xs shadow hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group"
              >
                <span>{activeTab === 'login' ? 'Send Login Code' : 'Create Sanctuary Space'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Continue as Guest */}
            <div className="mt-6 text-center">
              <Link
                to="/explore"
                className="text-xs text-on-surface-variant hover:text-primary transition-colors underline font-medium"
              >
                Continue as Guest &rarr;
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
