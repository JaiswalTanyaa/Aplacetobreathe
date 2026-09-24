import React, { useState, useEffect, useRef } from 'react';

const pastEntries = [
  {
    date: 'Oct 24, 2023',
    mood: '🌱 Calm',
    moodBg: 'bg-secondary-container/50 text-on-secondary-container',
    preview: 'Started the day with a short walk. Feeling a bit more grounded than yesterday...',
  },
  {
    date: 'Oct 22, 2023',
    mood: '🌧️ Heavy',
    moodBg: 'bg-surface-dim/50 text-on-surface',
    preview: 'Things felt overwhelming at work. Tried to use the breathing exercises but struggled to focus.',
  },
  {
    date: 'Oct 19, 2023',
    mood: '✨ Clear',
    moodBg: 'bg-primary-container/30 text-on-primary-container',
    preview: 'Had a really good session today. Realized that I\'ve been holding onto...',
  },
];

export default function Journal() {
  const [journalText, setJournalText] = useState('');
  const [showSaved, setShowSaved] = useState(false);
  const [showInstruction, setShowInstruction] = useState(true);
  const [shareWithTherapist, setShareWithTherapist] = useState(false);
  const saveTimeout = useRef(null);

  // Display today's date
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  const handleInput = (e) => {
    setJournalText(e.target.value);
    if (e.target.value.length > 0) setShowInstruction(false);
    else setShowInstruction(true);

    setShowSaved(false);
    clearTimeout(saveTimeout.current);
    saveTimeout.current = setTimeout(() => {
      if (e.target.value.trim()) {
        setShowSaved(true);
        setTimeout(() => setShowSaved(false), 3000);
      }
    }, 1000);
  };

  useEffect(() => () => clearTimeout(saveTimeout.current), []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Floating Blob Backgrounds */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            top: '-200px', left: '-100px',
            width: '600px', height: '600px',
            background: '#b0ceb2',
            filter: 'blur(80px)', opacity: 0.4,
            animation: 'float 20s infinite ease-in-out alternate',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            top: '30%', right: '-150px',
            width: '500px', height: '500px',
            background: '#d0c1e0',
            filter: 'blur(80px)', opacity: 0.4,
            animation: 'float 20s infinite ease-in-out alternate',
            animationDelay: '-7s',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            bottom: '-300px', left: '20%',
            width: '800px', height: '800px',
            background: '#e4e2de',
            filter: 'blur(80px)', opacity: 0.3,
            animation: 'float 20s infinite ease-in-out alternate',
            animationDelay: '-14s',
          }}
        />
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(50px, 30px) scale(1.1); }
        }
      `}</style>

      {/* Main Grid */}
      <main className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 py-8 max-w-container-max mx-auto w-full">
        {/* Sidebar — Past Entries */}
        <aside className="hidden lg:flex flex-col lg:col-span-3 sticky top-32" style={{ height: 'calc(100vh - 160px)' }}>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-outline">history</span>
            Past Entries
          </h2>

          <div className="flex-grow overflow-y-auto pr-2 space-y-4">
            {pastEntries.map((entry, i) => (
              <button
                key={i}
                className="w-full text-left bg-surface-container-low hover:bg-surface-container-high transition-colors p-4 rounded-xl border border-outline-variant/20 group"
                style={{ boxShadow: '4px 4px 20px rgba(139,168,142,0.03)' }}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-primary transition-colors">
                    {entry.date}
                  </span>
                  <span className={`${entry.moodBg} text-[12px] px-2 py-0.5 rounded-full flex items-center gap-1`}>
                    {entry.mood}
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface opacity-80 line-clamp-2">
                  {entry.preview}
                </p>
              </button>
            ))}
          </div>

          <button className="mt-4 w-full py-3 rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-variant/30 hover:text-on-surface transition-colors font-label-md text-label-md flex justify-center items-center gap-2">
            View all history
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
          </button>
        </aside>

        {/* Main Writing Canvas */}
        <section
          className="lg:col-span-9 flex flex-col p-6 md:p-10 rounded-3xl border border-outline-variant/20 transition-all duration-500 ease-out"
          style={{
            height: '70vh',
            background: '#ffffff',
            boxShadow: '0 8px 32px rgba(139,168,142,0.08)',
          }}
          onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 12px 40px rgba(139,168,142,0.12)')}
          onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(139,168,142,0.08)')}
        >
          {/* Canvas Header */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-4 border-b border-outline-variant/10">
            <div className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined opacity-70" style={{ fontSize: '20px' }}>calendar_today</span>
              <span className="font-headline-md text-headline-md text-on-surface">{today}</span>
            </div>

            <div className="flex items-center gap-6">
              {/* Save Indicator */}
              <div
                className="flex items-center gap-1.5 text-outline font-label-md text-label-md transition-opacity duration-500"
                style={{ opacity: showSaved ? 1 : 0 }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>cloud_done</span>
                Saved
              </div>

              {/* Share Toggle */}
              <div className="relative flex items-center group">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={shareWithTherapist}
                    onChange={(e) => setShareWithTherapist(e.target.checked)}
                  />
                  <div className="relative w-11 h-6 bg-surface-dim peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:border-outline-variant after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
                  <span className="ms-3 font-label-md text-label-md text-on-surface-variant select-none flex items-center gap-1.5">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                      {shareWithTherapist ? 'lock' : 'lock_open'}
                    </span>
                    Share with therapist
                  </span>
                </label>
                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-3 w-64 bg-inverse-surface text-inverse-on-surface font-body-md text-sm p-3 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20 pointer-events-none translate-y-2 group-hover:translate-y-0">
                  When enabled, this specific entry will be visible in your therapist's dashboard prior to your next session.
                  <div className="absolute -bottom-2 right-12 w-4 h-4 bg-inverse-surface rotate-45" />
                </div>
              </div>
            </div>
          </header>

          {/* Writing Area */}
          <div className="flex-grow relative">
            <textarea
              className="w-full h-full bg-transparent resize-none outline-none border-0 focus:ring-0 font-body-lg text-body-lg text-on-surface placeholder:text-outline-variant/60 leading-relaxed p-0 m-0"
              placeholder="What's on your mind today? Take your time, this is a safe space."
              spellCheck={false}
              value={journalText}
              onChange={handleInput}
            />
            {/* Instruction text */}
            {showInstruction && (
              <div className="absolute bottom-0 left-0 right-0 py-4 text-center pointer-events-none transition-opacity duration-700">
                <span className="bg-surface/50 backdrop-blur-sm px-4 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant inline-flex items-center gap-2 shadow-sm border border-outline-variant/10">
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>draw</span>
                  Just start typing. Your thoughts are saved automatically.
                </span>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
