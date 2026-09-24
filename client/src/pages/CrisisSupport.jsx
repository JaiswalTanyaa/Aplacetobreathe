import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const phrases = ['Breathe in slowly...', 'Hold gently...', 'Breathe out fully...'];

export default function CrisisSupport() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % phrases.length);
        setVisible(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative min-h-screen flex flex-col justify-center overflow-x-hidden"
      style={{ background: '#fbf9f5' }}
    >
      {/* Persistent Exit Button */}
      <div className="fixed top-6 right-6 z-50">
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-3 bg-surface-container rounded-full border border-outline-variant hover:bg-surface-container-high transition-colors text-on-surface-variant font-label-md text-label-md shadow-[0_4px_20px_rgba(139,168,142,0.05)]"
        >
          <span className="material-symbols-outlined">close</span>
          Return to Safety
        </Link>
      </div>

      {/* Background Atmospheric Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%', left: '-10%',
          width: '120%', height: '120%',
          background: 'radial-gradient(circle at 50% 50%, rgba(221,143,80,0.08) 0%, rgba(251,249,245,0) 60%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <style>{`
        .breathe-animation {
          animation: breathe 8s ease-in-out infinite;
        }
        @keyframes breathe {
          0%   { transform: scale(0.8); opacity: 0.4; box-shadow: 0 0 20px rgba(221,143,80,0.2); }
          50%  { transform: scale(1.2); opacity: 0.8; box-shadow: 0 0 40px rgba(221,143,80,0.4); }
          100% { transform: scale(0.8); opacity: 0.4; box-shadow: 0 0 20px rgba(221,143,80,0.2); }
        }
      `}</style>

      <main className="relative z-10 w-full max-w-container-max mx-auto px-6 py-10 md:py-20 flex flex-col items-center">

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{ background: 'rgba(221,143,80,0.2)', color: '#dd8f50' }}>
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          </div>
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface mb-6">
            You are not alone.<br />We are here for you right now.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            If you feel you cannot keep yourself safe, please use the resources below immediately. There is always someone ready to listen.
          </p>
        </div>

        {/* Primary Immediate Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mx-auto mb-24">
          <button
            className="flex flex-col items-center justify-center gap-3 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1"
            style={{
              background: '#dd8f50',
              color: '#592c00',
              boxShadow: '0 8px 30px rgba(221,143,80,0.2)',
            }}
          >
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
            <span className="font-headline-md text-headline-md">Call Now</span>
            <span className="font-label-md text-label-md opacity-80">Connect instantly</span>
          </button>
          <button
            className="flex flex-col items-center justify-center gap-3 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1"
            style={{
              background: '#8ba88e',
              color: '#233d29',
              boxShadow: '0 8px 30px rgba(139,168,142,0.2)',
            }}
          >
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            <span className="font-headline-md text-headline-md">Chat Online</span>
            <span className="font-label-md text-label-md opacity-80">Text with a counselor</span>
          </button>
        </div>

        {/* Grounding Exercise */}
        <div className="w-full max-w-4xl mx-auto mb-24 flex flex-col items-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-12 text-center">
            {"Let's take a breath together."}
          </h2>
          <div className="relative w-64 h-64 flex items-center justify-center mb-8">
            {/* Outer pulsing rings */}
            <div className="breathe-animation absolute inset-0 rounded-full border-2"
              style={{ borderColor: 'rgba(221,143,80,0.3)', animationDelay: '-2s' }} />
            <div className="breathe-animation absolute inset-4 rounded-full border-2"
              style={{ borderColor: 'rgba(221,143,80,0.4)', animationDelay: '-1s' }} />
            {/* Core circle */}
            <div className="breathe-animation absolute inset-8 rounded-full flex items-center justify-center backdrop-blur-sm"
              style={{ background: 'rgba(221,143,80,0.2)' }}>
              <span className="material-symbols-outlined text-5xl opacity-50"
                style={{ color: '#dd8f50', fontVariationSettings: "'FILL' 0" }}>air</span>
            </div>
          </div>
          <p
            className="font-body-lg text-body-lg text-on-surface-variant text-center h-8 transition-opacity duration-500"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {phrases[phraseIndex]}
          </p>
        </div>

        {/* Helplines List */}
        <div className="w-full max-w-3xl mx-auto">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-8 text-center">Important Numbers</h3>
          <div className="space-y-4">
            {/* Resource 1 */}
            <div className="flex items-center justify-between p-6 bg-surface-container-lowest rounded-xl border border-surface-dim shadow-[0_4px_24px_rgba(139,168,142,0.05)] hover:border-outline-variant transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">flag</span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface mb-1">National Suicide Prevention Lifeline (USA)</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Available 24/7. Free and confidential.</p>
                </div>
              </div>
              <a className="font-headline-md text-headline-md text-tertiary hover:underline" href="tel:988">988</a>
            </div>
            {/* Resource 2 */}
            <div className="flex items-center justify-between p-6 bg-surface-container-lowest rounded-xl border border-surface-dim shadow-[0_4px_24px_rgba(139,168,142,0.05)] hover:border-outline-variant transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">public</span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface mb-1">International Helplines</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Find a crisis center anywhere in the world.</p>
                </div>
              </div>
              <button className="px-6 py-2 rounded-full bg-surface-container border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-colors">
                Find by Country
              </button>
            </div>
            {/* Resource 3 */}
            <div className="flex items-center justify-between p-6 bg-surface-container-lowest rounded-xl border border-surface-dim shadow-[0_4px_24px_rgba(139,168,142,0.05)] hover:border-outline-variant transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">sms</span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface mb-1">Crisis Text Line</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Text HOME to connect with a crisis counselor.</p>
                </div>
              </div>
              <a className="font-headline-md text-headline-md text-tertiary hover:underline" href="sms:741741">741741</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
