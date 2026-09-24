import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const moods = [
  { label: 'Calm', icon: 'spa', color: 'text-primary' },
  { label: 'Anxious', icon: 'waves', color: 'text-secondary' },
  { label: 'Tired', icon: 'bedtime', color: 'text-on-surface-variant' },
  { label: 'Inspired', icon: 'lightbulb', color: 'text-tertiary' },
  { label: 'Heavy', icon: 'cloud', color: 'text-outline' },
];

export default function DailyRecommendations() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [tipCategory, setTipCategory] = useState('Mindfulness');
  const [tipText, setTipText] = useState('');
  const [tipSubmitted, setTipSubmitted] = useState(false);

  return (
    <div className="relative pb-20 px-6 max-w-container-max mx-auto overflow-hidden">
      {/* Background Organic Shapes */}
      <div
        className="pointer-events-none"
        style={{
          position: 'absolute',
          top: '-160px',
          right: '-160px',
          width: '600px',
          height: '600px',
          background: '#ecdcfd',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          zIndex: 0,
          filter: 'blur(72px)',
          opacity: 0.2,
        }}
      />
      <div
        className="pointer-events-none"
        style={{
          position: 'absolute',
          top: '60%',
          left: '-160px',
          width: '400px',
          height: '400px',
          background: '#8ba88e',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          zIndex: 0,
          filter: 'blur(72px)',
          opacity: 0.1,
        }}
      />

      {/* Hero & Mood Tracker */}
      <section className="mb-20 text-center relative z-10 pt-6">
        <h1 className="font-headline-xl text-headline-xl mb-6">How are you feeling right now?</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
          Let's find the perfect space for your current state of mind. Select a mood to see personalized recommendations just for you.
        </p>

        {/* Mood Widget */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-4xl mx-auto">
          {moods.map((m) => (
            <button
              key={m.label}
              onClick={() => setSelectedMood(m.label)}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-300 hover:border-primary/30"
              style={{
                background: selectedMood === m.label ? '#ecdcfd' : '#f5f3ef',
                borderColor: selectedMood === m.label ? '#8ba88e' : 'transparent',
                transform: selectedMood === m.label ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              <span className={`material-symbols-outlined text-4xl ${m.color}`}>{m.icon}</span>
              <span className="font-label-md text-label-md">{m.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Bento Grid Recommendations */}
      <section className="mb-20 relative z-10" id="recommendations">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg">Suggested for you</h2>
            <p className="text-on-surface-variant">Activities tailored to your current rhythm.</p>
          </div>
          <Link to="/explore" className="text-primary font-bold flex items-center gap-2 hover:underline">
            View all <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6" style={{ gridAutoRows: '280px' }}>
          {/* Featured Card — spans 8 cols, 2 rows */}
          <div
            className="md:col-span-8 group relative overflow-hidden rounded-3xl border border-surface-variant/50 transition-transform hover:scale-[1.01]"
            style={{
              gridRow: 'span 2',
              background: '#eae8e4',
              boxShadow: '0 20px 40px rgba(139,168,142,0.08)',
            }}
          >
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                alt="A serene landscape featuring a misty mountain lake at sunrise with soft sage green and muted coral tones"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgSVPnZENXGG1QvsAG3iq4Tf0uDbfN-qwQTJ38tt67vB4wRfSeT1Xl9GKl5qshh7X2rRN-Wak3EfMU4TV3sc_3djYxrAWZE6x--tNBFMyfBuMz7sFQyTmepl8EaR22L17axi9Xmg-Tdx3c5RxFakXA1_vrj-fHJz-RVs2qY5xgazhxeYmD9REQAwAAln8apNb8phRcOISltt-95cS7FxLcjZsvmzo268LIpGIK3T8pjE8tpikGyHca4w"
              />
            </div>
            <div
              className="relative z-10 h-full flex flex-col justify-end p-8"
              style={{ background: 'linear-gradient(to top, rgba(251,249,245,0.9), rgba(251,249,245,0.4), transparent)' }}
            >
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-primary text-white text-xs rounded-full uppercase tracking-widest font-bold">Guided Meditation</span>
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-xs rounded-full font-bold">15 Min</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg mb-2">Morning Breath &amp; Grounding</h3>
              <p className="text-on-surface-variant max-w-md mb-6">A gentle session designed to anchor your thoughts and prepare you for the day ahead with clarity.</p>
              <Link
                to="/guided-support"
                className="w-fit bg-primary text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all flex items-center gap-2"
              >
                Begin Session <span className="material-symbols-outlined">play_arrow</span>
              </Link>
            </div>
          </div>

          {/* Secondary Card 1 */}
          <div
            className="md:col-span-4 group rounded-3xl p-8 border border-surface-variant/50 flex flex-col justify-between transition-all hover:bg-surface-bright"
            style={{ background: '#f5f3ef', boxShadow: '0 20px 40px rgba(139,168,142,0.08)' }}
          >
            <div className="w-12 h-12 bg-secondary-container/50 rounded-xl flex items-center justify-center text-secondary mb-4">
              <span className="material-symbols-outlined">edit_note</span>
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md mb-2">Gratitude Log</h4>
              <p className="text-on-surface-variant text-sm">Write down three things you're thankful for today.</p>
            </div>
            <Link to="/journal" className="mt-4 text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Write now <span className="material-symbols-outlined text-sm">chevron_right</span>
            </Link>
          </div>

          {/* Secondary Card 2 */}
          <div
            className="md:col-span-4 group rounded-3xl p-8 border border-surface-variant/50 flex flex-col justify-between transition-all hover:bg-surface-bright"
            style={{ background: '#f5f3ef', boxShadow: '0 20px 40px rgba(139,168,142,0.08)' }}
          >
            <div className="w-12 h-12 bg-primary-container/30 rounded-xl flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined">forest</span>
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md mb-2">Visual Escape</h4>
              <p className="text-on-surface-variant text-sm">Explore an immersive 3D forest environment.</p>
            </div>
            <Link to="/explore" className="mt-4 text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Explore <span className="material-symbols-outlined text-sm">chevron_right</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Soul Food */}
      <section
        className="grid md:grid-cols-2 gap-12 items-center rounded-[40px] p-8 md:p-16 border border-secondary-container/20 relative z-10"
        style={{ background: 'rgba(236,220,253,0.1)' }}
      >
        <div>
          <h2 className="font-headline-lg text-headline-lg mb-6">Community Soul Food</h2>
          <p className="text-body-lg text-on-surface-variant mb-8">
            Our healing space grows through shared wisdom. Have an activity or a tip that helped you find your breath? Share it with the community.
          </p>
          <div className="space-y-6">
            {/* Testimonial 1 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-outline-variant flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  alt="Sarah J."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4ZBCkCzep-79sukIJGrkjh5M2s0MH5FmM2gO3VAsQ6ygldSlGJxabYBqecD-vwmjrZqBuxl_VCG_1ozCgUf_FK03n1Cw3JxKqUSYEBlva4um_QqjMDNFNrV46-5WRRkKLWJVWS8su1OIzoN7tNQwbPSSWsjceR6gDOMqVyApOs8PI7vBBBiki0XpLWijxcdsG0nI9EbLIpnH9p_5aaZrAY2cW0ZNDFZYe0-6kBlBVaUfAYWE9soG_DQ"
                />
              </div>
              <div
                className="rounded-2xl p-4 border border-surface-variant/30"
                style={{ background: '#fbf9f5', boxShadow: '0 20px 40px rgba(139,168,142,0.08)' }}
              >
                <p className="italic text-sm text-on-surface-variant">
                  "I listen to the sound of rain whenever I feel overwhelmed. It helps me focus on the present moment."
                </p>
                <span className="text-xs font-bold text-primary mt-2 block">— Sarah J.</span>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="flex gap-4 items-start translate-x-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-outline-variant flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  alt="David M."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxAwKFFrSG1viNEhLXq9q5h1iPVUuScaAMJ-V6ZcuKpxSd4KulB497ItJvvj54x0EZxvVqEC1-jvjk_8VnEZUSx75DxKKGCz7RoyipOxZObUYMxoFk6h-K1vWLoMt5L_Y-DWAZDXiT9NtCPEH8mST0KahtBoXYj1CWAQmL3C6hoM3Wol_MF0j2lAlTxNnu1diTH1KhV681itI45HglLgk71C-rDXR2SqDR49wgpPIWbWvtxwL42Zt97w"
                />
              </div>
              <div
                className="rounded-2xl p-4 border border-surface-variant/30"
                style={{ background: '#fbf9f5', boxShadow: '0 20px 40px rgba(139,168,142,0.08)' }}
              >
                <p className="italic text-sm text-on-surface-variant">
                  "A five-minute stretch session at noon changed my entire productivity levels."
                </p>
                <span className="text-xs font-bold text-primary mt-2 block">— David M.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Add Your Tip Form */}
        <div
          className="p-8 rounded-3xl border border-surface-variant/50"
          style={{ background: '#fbf9f5', boxShadow: '0 20px 40px rgba(139,168,142,0.08)' }}
        >
          {tipSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
              <h3 className="font-headline-md text-headline-md text-primary">Thank you!</h3>
              <p className="text-on-surface-variant text-sm">Your tip has been submitted for review.</p>
              <button className="text-xs font-bold text-primary underline" onClick={() => { setTipSubmitted(false); setTipText(''); }}>
                Submit another
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-headline-md text-headline-md mb-2">Add Your Tip</h3>
              <p className="text-on-surface-variant text-sm mb-6">Your voice might be exactly what someone needs to hear today.</p>
              <div className="space-y-4">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Category</label>
                  <select
                    value={tipCategory}
                    onChange={(e) => setTipCategory(e.target.value)}
                    className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/50 text-on-surface outline-none"
                  >
                    <option>Mindfulness</option>
                    <option>Physical Activity</option>
                    <option>Creative Expression</option>
                    <option>Rest</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Your Suggestion</label>
                  <textarea
                    rows={3}
                    placeholder="Take your time..."
                    value={tipText}
                    onChange={(e) => setTipText(e.target.value)}
                    className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/50 text-on-surface placeholder:text-outline-variant outline-none resize-none"
                  />
                </div>
                <button
                  onClick={() => { if (tipText.trim()) setTipSubmitted(true); }}
                  className="w-full bg-primary text-white font-bold py-4 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95"
                >
                  Submit for Review
                </button>
                <p className="text-center italic text-outline" style={{ fontSize: '10px' }}>
                  Every tip is reviewed by our community facilitators to ensure a safe space.
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
