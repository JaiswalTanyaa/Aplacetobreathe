import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const facts = [
  {
    icon: 'temp_preferences_custom',
    label: 'Uplifting Fact',
    text: 'Honey never spoils. Archaeologists have found edible 3,000-year-old honey in ancient Egyptian tombs.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8g7L7cB5ZY2nli65lYkwNzBopza4K_VPW42g7hg1EEq24t1w0sp02vOgrz4VjJvSjtwqhAuIE5r5jmuTxoRj5vgbBRphB-5UlKpaJzFFq92uoPiRGOyZypeQDVoX4UmjZIO60QmNmLGqEwGKQoWgR7g5BipmCSyVlSrYToovPdWeW2VsOxh1abn6qRCYo7rM2hcdrzNqyIT4OO0Meym3F53OXMNb1XKrdqfBXB2W_wqKY7BKCS2bpQw',
  },
  {
    icon: 'sunny',
    label: 'MOOD BOOST',
    text: 'Trees communicate and share nutrients through an underground fungal network.',
    img: null,
  },
  {
    icon: 'emoji_nature',
    label: 'FACT #142',
    text: 'Otters hold hands while sleeping to keep from drifting apart.',
    img: null,
  },
];

export default function MoodBoostFacts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [liked, setLiked] = useState(facts.map(() => false));
  const [nudgeEnabled, setNudgeEnabled] = useState(true);
  const [dragStart, setDragStart] = useState(null);
  const [cardOffset, setCardOffset] = useState(0);
  const [cardRotation, setCardRotation] = useState(0);
  const [exiting, setExiting] = useState(false);

  const swipe = (direction) => {
    if (exiting) return;
    setExiting(true);
    const tx = direction === 'right' ? 500 : -500;
    setCardOffset(tx);
    setCardRotation(direction === 'right' ? 20 : -20);
    setTimeout(() => {
      setActiveIndex((i) => (i + 1) % facts.length);
      setCardOffset(0);
      setCardRotation(0);
      setExiting(false);
    }, 600);
  };

  const handleMouseDown = (e) => { setDragStart(e.clientX); };
  const handleMouseMove = (e) => {
    if (dragStart === null) return;
    const dx = e.clientX - dragStart;
    setCardOffset(dx);
    setCardRotation(dx / 20);
  };
  const handleMouseUp = (e) => {
    if (dragStart === null) return;
    const dx = e.clientX - dragStart;
    setDragStart(null);
    if (Math.abs(dx) > 150) swipe(dx > 0 ? 'right' : 'left');
    else { setCardOffset(0); setCardRotation(0); }
  };

  const toggleLike = (i) => setLiked((prev) => prev.map((v, idx) => idx === i ? !v : v));

  const fact = facts[activeIndex];

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-background text-on-surface font-body-md">
      {/* Organic Background Blobs */}
      <div className="fixed top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-primary-container/20 rounded-full pointer-events-none"
        style={{ filter: 'blur(60px)', opacity: 0.4, zIndex: -1 }} />
      <div className="fixed bottom-[5%] left-[-10%] w-[35vw] h-[35vw] bg-tertiary-fixed/30 rounded-full pointer-events-none"
        style={{ filter: 'blur(60px)', opacity: 0.4, zIndex: -1 }} />

      <style>{`
        @keyframes pulse-soft { 0%,100%{transform:scale(1);opacity:1;} 50%{transform:scale(1.05);opacity:0.9;} }
        .animate-pulse-soft { animation: pulse-soft 3s infinite ease-in-out; }
        .swipe-card { transition: transform 0.6s cubic-bezier(0.23,1,0.32,1), opacity 0.4s ease; cursor: grab; }
        .swipe-card:active { cursor: grabbing; }
        .glass-card { background: rgba(255,255,255,0.7); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
      `}</style>

      <main className="flex-grow pt-[80px] pb-20 px-6 max-w-container-max mx-auto w-full">

        {/* Hero */}
        <section className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-4">Daily Dose of Light</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Take a moment to breathe and connect with something positive. Swipe through these uplifting truths curated just for you.
          </p>
        </section>

        {/* Interactive Card Deck */}
        <section className="relative flex flex-col items-center justify-center min-h-[600px]">
          <div className="relative w-full max-w-[420px] h-[520px]">

            {/* Card 3 — Bottom */}
            <div className="swipe-card absolute inset-0 glass-card border border-surface-container-high rounded-[40px] p-8 shadow-sm flex flex-col justify-between z-10"
              style={{ transform: 'translateY(16px) scale(0.90)', opacity: 0.4 }}>
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-tertiary text-4xl">emoji_nature</span>
                <span className="font-label-md text-label-md text-outline">FACT #142</span>
              </div>
              <div className="text-center">
                <p className="font-headline-md text-headline-md text-on-surface mb-4">Otters hold hands while sleeping to keep from drifting apart.</p>
                <div className="h-1 w-12 bg-tertiary-fixed mx-auto rounded-full" />
              </div>
              <div className="flex justify-center gap-2">
                <button className="p-4 rounded-full bg-surface-container hover:bg-primary-container/20 transition-colors">
                  <span className="material-symbols-outlined text-primary">favorite</span>
                </button>
              </div>
            </div>

            {/* Card 2 — Middle */}
            <div className="swipe-card absolute inset-0 glass-card border border-surface-container-high rounded-[40px] p-8 shadow-sm flex flex-col justify-between z-20"
              style={{ transform: 'translateY(8px) scale(0.95)', opacity: 0.7 }}>
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-tertiary text-4xl">sunny</span>
                <span className="font-label-md text-label-md text-outline">MOOD BOOST</span>
              </div>
              <div className="text-center">
                <p className="font-headline-md text-headline-md text-on-surface mb-4">Trees communicate and share nutrients through an underground fungal network.</p>
                <div className="h-1 w-12 bg-tertiary-fixed mx-auto rounded-full" />
              </div>
              <div className="flex justify-center gap-2">
                <button className="p-4 rounded-full bg-surface-container hover:bg-primary-container/20 transition-colors">
                  <span className="material-symbols-outlined text-primary">favorite</span>
                </button>
              </div>
            </div>

            {/* Card 1 — Top/Active */}
            <div
              className="swipe-card absolute inset-0 bg-white border border-surface-container-high rounded-[40px] p-10 shadow-[0_20px_50px_rgba(139,168,142,0.15)] flex flex-col justify-between z-30 select-none"
              style={{
                transform: `translateX(${cardOffset}px) rotate(${cardRotation}deg)`,
                transition: dragStart !== null ? 'none' : 'transform 0.6s cubic-bezier(0.23,1,0.32,1)',
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(255,220,196,0.3)' }}>
                  <span className="material-symbols-outlined text-tertiary text-4xl">temp_preferences_custom</span>
                </div>
                <span className="font-label-md text-label-md text-outline uppercase tracking-widest">Uplifting Fact</span>
              </div>
              <div className="space-y-6">
                <h2 className="font-headline-md text-headline-md text-on-surface leading-snug">
                  Honey never spoils. Archaeologists have found edible 3,000-year-old honey in ancient Egyptian tombs.
                </h2>
                <div className="w-full h-40 rounded-3xl bg-cover bg-center"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8g7L7cB5ZY2nli65lYkwNzBopza4K_VPW42g7hg1EEq24t1w0sp02vOgrz4VjJvSjtwqhAuIE5r5jmuTxoRj5vgbBRphB-5UlKpaJzFFq92uoPiRGOyZypeQDVoX4UmjZIO60QmNmLGqEwGKQoWgR7g5BipmCSyVlSrYToovPdWeW2VsOxh1abn6qRCYo7rM2hcdrzNqyIT4OO0Meym3F53OXMNb1XKrdqfBXB2W_wqKY7BKCS2bpQw')" }}
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <button className="flex items-center gap-2 text-outline hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">share</span>
                  <span className="font-label-md text-label-md">Share Joy</span>
                </button>
                <div className="flex gap-3">
                  <button onClick={() => swipe('left')}
                    className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-outline hover:border-primary hover:text-primary transition-all">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                  <button onClick={() => swipe('right')}
                    className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Swipe Instructions */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="font-label-md text-label-md text-outline">Swipe left to skip, right to save to your collection</p>
            <div className="flex gap-4">
              <button onClick={() => swipe('left')}
                className="group flex items-center justify-center w-14 h-14 rounded-full bg-surface-container-low border border-outline-variant hover:bg-error-container/20 hover:border-error transition-all">
                <span className="material-symbols-outlined text-outline group-hover:text-error transition-colors">keyboard_arrow_left</span>
              </button>
              <button onClick={() => swipe('right')}
                className="group flex items-center justify-center w-14 h-14 rounded-full bg-surface-container-low border border-outline-variant hover:bg-primary-container/20 hover:border-primary transition-all">
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">keyboard_arrow_right</span>
              </button>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sunshine Journal — 2 cols */}
          <div className="md:col-span-2 bg-surface-container-low rounded-[32px] p-10 flex flex-col md:flex-row gap-8 items-center border border-surface-container">
            <div className="flex-1">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Your Sunshine Journal</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Every positive fact you save is stored in your personal collection to revisit whenever you need a lift.
              </p>
              <Link to="/journal" className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:opacity-90 transition-opacity inline-block">
                Open Collection
              </Link>
            </div>
            <div className="w-full md:w-48 h-48 bg-white rounded-2xl shadow-sm rotate-3 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0" style={{ background: 'rgba(255,220,196,0.2)' }} />
              <span className="material-symbols-outlined text-tertiary text-6xl relative z-10">auto_stories</span>
            </div>
          </div>

          {/* Daily Nudge — 1 col */}
          <div className="bg-secondary-container/30 rounded-[32px] p-10 flex flex-col justify-between border border-secondary-container">
            <div>
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">notifications_active</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Daily Nudge</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Get one tiny, beautiful truth sent to your device every morning.
              </p>
            </div>
            <div className="mt-6">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={nudgeEnabled} onChange={(e) => setNudgeEnabled(e.target.checked)} />
                <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
                <span className="ml-3 text-sm font-medium text-on-surface-variant">
                  {nudgeEnabled ? 'Enabled' : 'Disabled'}
                </span>
              </label>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
