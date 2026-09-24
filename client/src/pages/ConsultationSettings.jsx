import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ConsultationSettings() {
  const [selectedDate, setSelectedDate] = useState('Mon 12');
  const [selectedTime, setSelectedTime] = useState('1:00 PM');
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [language, setLanguage] = useState('Eng');
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(2);
  const [copied, setCopied] = useState(false);

  const dates = [
    { day: 'Mon', num: '12', disabled: false },
    { day: 'Tue', num: '13', disabled: false },
    { day: 'Wed', num: '14', disabled: false },
    { day: 'Thu', num: '15', disabled: true },
  ];

  const times = ['10:00 AM', '10:30 AM', '1:00 PM', '2:30 PM'];

  const handleCopy = () => {
    navigator.clipboard.writeText('breathe.app/ref/sarah-m');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex flex-col font-body-md text-body-md text-on-background overflow-x-hidden"
      style={{ background: '#fbf9f5' }}>

      {/* Organic Blob Backgrounds */}
      <div className="pointer-events-none" style={{
        position: 'fixed', top: '-20%', left: '-10%',
        width: '70vw', height: '70vw',
        background: 'radial-gradient(circle, #ecdcfd 0%, transparent 70%)',
        opacity: 0.4, zIndex: -1, borderRadius: '50%', filter: 'blur(60px)',
      }} />
      <div className="pointer-events-none" style={{
        position: 'fixed', bottom: '-20%', right: '-10%',
        width: '60vw', height: '60vw',
        background: 'radial-gradient(circle, #ffdcc4 0%, transparent 70%)',
        opacity: 0.3, zIndex: -1, borderRadius: '50%', filter: 'blur(80px)',
      }} />

      <style>{`
        .glass-card {
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid #e4e2de;
          box-shadow: 0 8px 32px 0 rgba(139,168,142,0.05);
        }
        .pulse-crisis {
          animation: pulse-coral 2s infinite;
        }
        @keyframes pulse-coral {
          0%   { box-shadow: 0 0 0 0 rgba(244,162,97,0.4); }
          70%  { box-shadow: 0 0 0 10px rgba(244,162,97,0); }
          100% { box-shadow: 0 0 0 0 rgba(244,162,97,0); }
        }
      `}</style>

      {/* Floating Crisis Button */}
      <Link
        to="/crisis"
        className="fixed bottom-6 right-6 z-50 bg-tertiary-container text-on-tertiary-container px-6 py-3 rounded-full font-crisis-link text-crisis-link shadow-lg pulse-crisis flex items-center gap-2 hover:opacity-90 transition-opacity"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
        Crisis Support
      </Link>

      <main className="flex-grow container mx-auto px-6 py-10 md:py-20 max-w-container-max flex flex-col md:flex-row gap-6">

        {/* Left — Consultation Flow */}
        <section className="flex-1 flex flex-col gap-8">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity mb-6 font-label-md text-label-md">
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Home
            </Link>
            <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-2">
              Start with a free chat
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Schedule a 15-minute introductory call to see if {"we're"} a good fit. No pressure, just a conversation.
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 flex flex-col gap-6">
            {/* Date Picker */}
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Select a Date</h3>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {dates.map((d) => (
                  <button
                    key={d.num}
                    disabled={d.disabled}
                    onClick={() => !d.disabled && setSelectedDate(`${d.day} ${d.num}`)}
                    className={`flex-shrink-0 flex flex-col items-center justify-center w-16 h-20 rounded-xl transition-transform active:scale-95 ${
                      d.disabled
                        ? 'bg-surface-container-lowest border border-outline-variant text-on-surface opacity-50 cursor-not-allowed'
                        : selectedDate === `${d.day} ${d.num}`
                        ? 'bg-primary-container text-on-primary-container shadow-sm'
                        : 'bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-variant/50 transition-colors'
                    }`}
                  >
                    <span className="font-label-md text-label-md opacity-80">{d.day}</span>
                    <span className="font-headline-md text-headline-md">{d.num}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Picker */}
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Available Times</h3>
              <div className="grid grid-cols-2 gap-3">
                {times.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`py-3 rounded-lg text-center transition-colors ${
                      selectedTime === t
                        ? 'bg-primary-container text-on-primary-container shadow-sm'
                        : 'bg-surface-container-lowest border border-outline-variant text-on-surface hover:border-primary hover:text-primary'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-4 mt-2">
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-1" htmlFor="name">
                  Preferred Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="How should we address you?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-surface-container-lowest border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-on-surface placeholder:text-outline outline-none px-3 py-2 border"
                />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-1" htmlFor="topic">
                  {"What's on your mind? (Optional)"}
                </label>
                <textarea
                  id="topic"
                  rows={3}
                  placeholder="Take your time, this is a safe space to share as little or as much as you'd like."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full bg-surface-container-lowest border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-on-surface placeholder:text-outline outline-none px-3 py-2 border resize-none"
                />
              </div>
              <button className="mt-4 w-full bg-primary text-on-primary font-label-md text-label-md py-4 rounded-full shadow-sm hover:opacity-90 transition-opacity active:scale-[0.98]">
                Confirm Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Right — Settings & Referrals */}
        <section className="flex-1 flex flex-col gap-8 md:mt-20">
          {/* Accessibility Settings */}
          <div className="glass-card rounded-xl p-8 flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-surface-container-highest pb-4">
              <span className="material-symbols-outlined text-primary text-3xl">accessibility_new</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Accessibility</h2>
            </div>

            {/* Language Toggle */}
            <div className="flex justify-between items-center">
              <div>
                <span className="block font-label-md text-label-md text-on-surface">Language</span>
                <span className="block font-body-md text-body-md text-on-surface-variant text-sm">Choose your preferred language</span>
              </div>
              <div className="flex bg-surface-container p-1 rounded-lg">
                {['Eng', 'Hin'].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLanguage(l)}
                    className={`px-4 py-2 rounded-md font-label-md text-label-md transition-colors ${
                      language === l
                        ? 'bg-surface-container-lowest shadow-sm text-primary'
                        : 'text-on-surface-variant hover:bg-surface-variant/50'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Font Size Slider */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="font-size">Text Size</label>
                <span className="text-sm text-on-surface-variant">{fontSize === 1 ? 'Small' : fontSize === 2 ? 'Medium' : 'Large'}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-body-md text-body-md text-on-surface-variant">A</span>
                <input
                  id="font-size"
                  type="range"
                  min="1" max="3"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full h-2 bg-surface-variant rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <span className="font-headline-md text-headline-md text-on-surface-variant">A</span>
              </div>
            </div>

            {/* High Contrast */}
            <div className="flex justify-between items-center pt-2">
              <div>
                <span className="block font-label-md text-label-md text-on-surface">High Contrast</span>
                <span className="block font-body-md text-body-md text-on-surface-variant text-sm">Improve readability</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={highContrast} onChange={(e) => setHighContrast(e.target.checked)} />
                <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
              </label>
            </div>
          </div>

          {/* Refer a Friend */}
          <div className="glass-card rounded-xl p-8 flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container rounded-bl-full opacity-50 z-0" />
            <div className="relative z-10 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-tertiary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
                <span className="font-label-md text-label-md uppercase tracking-wider">Refer a Friend</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Give $20, Get $20</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Share the gift of a safe space. When a friend books their first full session using your link, you both receive a $20 credit.
              </p>
            </div>
            <div className="relative z-10 flex flex-col gap-3 mt-2">
              <label className="font-label-md text-label-md text-on-surface-variant">Your Unique Share Link</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  readOnly
                  value="breathe.app/ref/sarah-m"
                  onClick={(e) => e.target.select()}
                  className="flex-grow bg-surface-container border-none rounded-lg text-on-surface font-body-md text-body-md focus:ring-0 cursor-copy outline-none px-3 py-2"
                />
                <button
                  onClick={handleCopy}
                  className="bg-secondary text-on-secondary px-4 py-2 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
