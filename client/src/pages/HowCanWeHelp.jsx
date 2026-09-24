import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HowCanWeHelp() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen py-16 px-6 overflow-hidden">
      {/* Background Blobs */}
      <div
        className="pointer-events-none"
        style={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: '#8BA88E',
          borderRadius: '50%',
          zIndex: 0,
          filter: 'blur(60px)',
          opacity: 0.15,
        }}
      />
      <div
        className="pointer-events-none"
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '-10%',
          width: '350px',
          height: '350px',
          background: '#A799B7',
          borderRadius: '50%',
          zIndex: 0,
          filter: 'blur(60px)',
          opacity: 0.15,
        }}
      />

      <div className="max-w-[800px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <img
              className="w-full h-full object-contain"
              alt="A soft, friendly digital illustration of a stylized character looking through a telescope"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJMIwToPqlGpVVu_txa55NVoiMl8jw4opulFyW_wL8ib8ZorRgETHOC_Wwxpf6g0ss-vIFqTxF6LMvuwDOZJRX7lQWTHjelaRZkRESo2Ct3EihxbHDdgvcFY3WDDo1fBSwsfWm9LY0thqSV2Kn58J27HzUoSoXlReRdUWFA1FWjp6Her6Hs-iGJC0EiGm58ZbRgnMR_AqPQVI2Ap4U01EkEhc1X7akwshQx1HkstS7XusisPelxzrF_Q"
            />
          </div>
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mb-4">
            Didn't find what you were looking for?
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[600px] mx-auto">
            We're here to listen. Tell us what's on your mind, and we'll do our best to help you find the space or resource you need.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-surface-container-low rounded-[40px] p-8 md:p-12 shadow-sm border border-outline-variant/20 mb-20">
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary">Thank you for sharing</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[400px] mx-auto">
                Your message has been received. We'll review it and get back to you if you provided an email.
              </p>
              <button
                className="font-label-md text-label-md text-primary underline hover:opacity-70 transition-opacity"
                onClick={() => {
                  setSubmitted(false);
                  setMessage('');
                  setEmail('');
                }}
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Message Field */}
              <div className="space-y-3">
                <label className="block font-headline-md text-headline-md text-on-surface" htmlFor="message">
                  What can we help you find?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Share your thoughts or what resource you were hoping to see..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-6 rounded-2xl text-body-md outline-none resize-none placeholder:text-outline-variant focus:ring-4 focus:ring-primary/10 transition-all"
                  style={{ background: '#fbf9f5', border: '1px solid transparent' }}
                  onFocus={(e) => (e.target.style.borderColor = '#4a654e')}
                  onBlur={(e) => (e.target.style.borderColor = 'transparent')}
                />
                <p className="text-on-surface-variant text-body-md flex items-center gap-2">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>favorite</span>
                  Our team reads every single submission carefully.
                </p>
              </div>

              {/* Email Field */}
              <div className="space-y-3">
                <label className="block font-headline-md text-headline-md text-on-surface" htmlFor="email">
                  Email address{' '}
                  <span className="text-outline-variant text-body-md font-normal">(Optional)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="If you'd like a response, let us know where to reach you."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-6 rounded-2xl text-body-md outline-none placeholder:text-outline-variant focus:ring-4 focus:ring-primary/10 transition-all"
                  style={{ background: '#fbf9f5', border: '1px solid transparent' }}
                  onFocus={(e) => (e.target.style.borderColor = '#4a654e')}
                  onBlur={(e) => (e.target.style.borderColor = 'transparent')}
                />
                <p className="text-on-surface-variant text-body-md italic opacity-70">
                  We promise to keep your email safe and never send spam.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-12 py-4 bg-primary text-on-primary font-headline-md text-headline-md rounded-full hover:opacity-90 active:scale-95 transition-all shadow-md flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">refresh</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="material-symbols-outlined">send</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Helpful Alternatives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/explore"
            className="p-8 rounded-3xl bg-secondary-container/30 border border-secondary-container/50 hover:shadow-md transition-all cursor-pointer group block"
          >
            <span
              className="material-symbols-outlined text-secondary group-hover:scale-110 transition-transform block mb-4"
              style={{ fontSize: '30px' }}
            >
              search
            </span>
            <h3 className="font-headline-md text-headline-md text-on-secondary-container mb-2">Try our search</h3>
            <p className="text-body-md text-on-secondary-container opacity-80">
              Use keywords like "breathing", "anxiety", or "meditation".
            </p>
          </Link>

          <Link
            to="/guided-support"
            className="p-8 rounded-3xl bg-tertiary-fixed/30 border border-tertiary-fixed/50 hover:shadow-md transition-all cursor-pointer group block"
          >
            <span
              className="material-symbols-outlined text-tertiary group-hover:scale-110 transition-transform block mb-4"
              style={{ fontSize: '30px' }}
            >
              chat_bubble
            </span>
            <h3 className="font-headline-md text-headline-md text-on-tertiary-container mb-2">Speak to a guide</h3>
            <p className="text-body-md text-on-tertiary-container opacity-80">
              Our peer support community is active 24/7 for a chat.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
