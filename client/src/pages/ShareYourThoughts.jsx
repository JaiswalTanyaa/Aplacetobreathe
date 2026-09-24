import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EMOJIS = [
  { value: '1', emoji: '☁️', label: 'Not great' },
  { value: '2', emoji: '🌧️', label: 'Okay' },
  { value: '3', emoji: '🌤️', label: 'Good' },
  { value: '4', emoji: '☀️', label: 'Great', defaultSelected: true },
  { value: '5', emoji: '🌈', label: 'Amazing' },
];

export default function ShareYourThoughts() {
  const [selected, setSelected] = useState('4');
  const [hovered, setHovered] = useState(null);

  const getEmojiStyle = (value) => {
    const isSelected = selected === value;
    const isHovered = hovered === value;
    const anyHovered = hovered !== null;

    if (isSelected) return { transform: 'scale(1.15)', filter: 'grayscale(0%) opacity(100%)' };
    if (isHovered) return { transform: 'scale(1.1)', filter: 'grayscale(0%) opacity(80%)' };
    if (anyHovered) return { filter: 'grayscale(100%) opacity(30%)', transition: 'filter 0.2s ease, transform 0.2s ease' };
    return { filter: 'grayscale(100%) opacity(50%)', transition: 'filter 0.2s ease, transform 0.2s ease' };
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen relative overflow-hidden flex flex-col">

      {/* Radial gradient blob background */}
      <div className="absolute pointer-events-none" style={{
        top: '-20%', left: '-10%',
        width: '120%', height: '120%',
        background: 'radial-gradient(circle at 30% 30%, rgba(236,220,253,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(176,206,178,0.3) 0%, transparent 40%)',
        zIndex: -1, filter: 'blur(60px)',
      }} />

      <main className="flex-grow flex items-center justify-center p-6 relative z-10 my-10 md:my-20">
        <div className="bg-surface-container-lowest/80 backdrop-blur-xl rounded-xl p-8 md:p-12 max-w-2xl w-full border border-surface-variant relative overflow-hidden"
          style={{ boxShadow: '0 20px 40px rgba(139,168,142,0.05)' }}>

          {/* Top-right blob accent inside card */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/20 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />

          {/* Header */}
          <div className="text-center mb-10 relative z-10">
            <span className="material-symbols-outlined text-primary text-5xl mb-4 block"
              style={{ fontVariationSettings: "'FILL' 1" }}>psychiatry</span>
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">
              How was your session with Dr. Julian?
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Your feedback helps us create a better, safer space for you.
            </p>
          </div>

          <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>

            {/* Emoji Rating */}
            <div className="space-y-4">
              <label className="font-label-md text-label-md text-on-surface-variant block text-center uppercase tracking-wider">
                How are you feeling?
              </label>
              <div className="flex justify-between items-center px-2 md:px-8"
                onMouseLeave={() => setHovered(null)}>
                {EMOJIS.map((item) => (
                  <label key={item.value} className="flex flex-col items-center gap-2 cursor-pointer">
                    <input
                      className="sr-only"
                      type="radio"
                      name="rating"
                      value={item.value}
                      checked={selected === item.value}
                      onChange={() => setSelected(item.value)}
                    />
                    <div
                      className="text-4xl md:text-5xl relative"
                      role="button"
                      tabIndex={0}
                      style={{ ...getEmojiStyle(item.value), transition: 'transform 0.2s ease, filter 0.2s ease' }}
                      onMouseEnter={() => setHovered(item.value)}
                      onClick={() => setSelected(item.value)}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelected(item.value)}
                    >
                      {item.emoji}
                      {/* Glow for selected ☀️ */}
                      {selected === item.value && item.value === '4' && (
                        <div className="absolute inset-0 bg-tertiary-container/20 rounded-full blur-md -z-10 scale-150" />
                      )}
                    </div>
                    <span className={`font-body-md text-body-md text-sm font-medium transition-colors ${selected === item.value && item.value === '4' ? 'text-tertiary font-semibold' : selected === item.value ? 'text-on-surface' : 'text-on-surface-variant/60'}`}>
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Text feedback */}
            <div className="space-y-3">
              <label className="font-label-md text-label-md text-on-surface block" htmlFor="feedback_text">
                Anything else you'd like to share? (Optional)
              </label>
              <textarea
                className="w-full bg-surface-container-low border-none rounded-xl p-4 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all shadow-inner outline-none resize-none"
                id="feedback_text"
                name="feedback_text"
                placeholder="Take your time, this is a safe space..."
                rows={4}
              />
            </div>

            {/* Anonymous checkbox */}
            <div className="flex items-center gap-3">
              <div className="relative flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    className="h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest"
                    id="anonymous"
                    name="anonymous"
                    type="checkbox"
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label className="font-body-md text-body-md text-on-surface-variant cursor-pointer" htmlFor="anonymous">
                    Make this feedback anonymous
                  </label>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <button
                type="button"
                className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors px-6 py-3 rounded-full hover:bg-surface-variant/50"
              >
                Skip for now
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-full transition-all active:scale-95"
                style={{ boxShadow: '0 4px 12px rgba(74,101,78,0.2)' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 6px 16px rgba(74,101,78,0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(74,101,78,0.2)'; }}
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
