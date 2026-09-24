import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Progress() {
  const [activeChart, setActiveChart] = useState('Weekly');
  const { user } = useAuth();

  // Derive display name: full name → email prefix → 'Friend'
  const displayName = user?.name
    ? user.name
    : user?.email
      ? user.email.split('@')[0]
      : 'Friend';

  // Avatar initial for the sidebar
  const avatarInitial = displayName.charAt(0).toUpperCase();

  return (
    <div className="relative overflow-x-hidden">
      {/* Organic Background Blobs */}
      <div
        className="pointer-events-none"
        style={{
          position: 'absolute', top: '-256px', left: '-256px',
          width: '500px', height: '500px',
          background: '#4a654e',
          borderRadius: '50%', zIndex: 0,
          filter: 'blur(60px)', opacity: 0.15,
        }}
      />
      <div
        className="pointer-events-none"
        style={{
          position: 'absolute', bottom: 0, right: '-128px',
          width: '400px', height: '400px',
          background: '#655974',
          borderRadius: '50%', zIndex: 0,
          filter: 'blur(60px)', opacity: 0.15,
        }}
      />

      <div className="flex">
        {/* Side Navigation */}
        <aside className="hidden md:flex flex-col w-64 fixed left-0 top-20 py-8 gap-2 border-r border-outline-variant/10 bg-surface-container-low" style={{ height: 'calc(100vh - 80px)' }}>
          <div className="px-6 mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full border-2 border-primary/20 bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {avatarInitial}
              </div>
              <div>
                <p className="font-bold text-on-surface" style={{ fontSize: '14px' }}>{displayName}</p>
                <p className="text-on-surface-variant" style={{ fontSize: '12px' }}>Personal Dashboard</p>
              </div>
            </div>
          </div>

          <nav className="flex flex-col gap-1 px-2">
            <Link to="/" className="flex items-center gap-3 text-on-surface-variant mx-2 px-4 py-3 hover:bg-surface-variant/50 rounded-xl transition-all">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-body-md text-body-md">Dashboard</span>
            </Link>
            <div className="flex items-center gap-3 bg-primary-container text-on-primary-container rounded-xl mx-2 px-4 py-3 shadow-sm">
              <span className="material-symbols-outlined">analytics</span>
              <span className="font-body-md text-body-md">My Progress</span>
            </div>
            <Link to="/journal" className="flex items-center gap-3 text-on-surface-variant mx-2 px-4 py-3 hover:bg-surface-variant/50 rounded-xl transition-all">
              <span className="material-symbols-outlined">edit_note</span>
              <span className="font-body-md text-body-md">Journal</span>
            </Link>
            <Link to="/community" className="flex items-center gap-3 text-on-surface-variant mx-2 px-4 py-3 hover:bg-surface-variant/50 rounded-xl transition-all">
              <span className="material-symbols-outlined">group</span>
              <span className="font-body-md text-body-md">Community</span>
            </Link>
            <Link to="/consultation" className="flex items-center gap-3 text-on-surface-variant mx-2 px-4 py-3 hover:bg-surface-variant/50 rounded-xl transition-all">
              <span className="material-symbols-outlined">settings</span>
              <span className="font-body-md text-body-md">Settings</span>
            </Link>
          </nav>

          <div className="mt-auto px-6">
            <Link to="/" className="block w-full text-center bg-primary text-on-primary py-3 rounded-full font-label-md text-label-md transition-transform hover:scale-[1.02] active:scale-95">
              View Site
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-64 px-6 py-10 max-w-[1200px] mx-auto min-h-screen relative z-10">
          {/* Header */}
          <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-primary mb-2">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>lock</span>
                <span className="font-label-md text-label-md uppercase tracking-widest opacity-70">Private Space</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface mb-2">
                Welcome back, {displayName}.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                You've taken 4 steps toward your peace this week. Take a deep breath.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="bg-surface-container-high px-4 py-2 rounded-xl flex items-center gap-3 border border-outline-variant/20 shadow-sm">
                <span className="material-symbols-outlined text-primary">calendar_today</span>
                <span className="font-label-md text-label-md">Session in 2 days</span>
              </div>
            </div>
          </header>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Mood & Energy Chart — 8 cols */}
            <section
              className="lg:col-span-8 rounded-[32px] p-8 shadow-sm"
              style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(139,168,142,0.1)' }}
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-headline-md text-headline-md">Mood &amp; Energy Trend</h3>
                <div className="flex gap-2">
                  {['Weekly', 'Monthly'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setActiveChart(t)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                        activeChart === t
                          ? 'bg-primary/10 text-primary'
                          : 'text-on-surface-variant hover:bg-surface-variant'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-64 w-full relative">
                <svg className="w-full h-full drop-shadow-lg" viewBox="0 0 800 200">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#8BA88E" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#8BA88E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,150 Q100,140 150,110 T300,100 T450,70 T600,80 T800,40"
                    fill="none" stroke="#8BA88E" strokeLinecap="round" strokeWidth="4"
                  />
                  <path
                    d="M0,150 Q100,140 150,110 T300,100 T450,70 T600,80 T800,40 V200 H0 Z"
                    fill="url(#lineGradient)"
                  />
                  <circle cx="150" cy="110" r="5" fill="#8BA88E" />
                  <circle cx="450" cy="70" r="5" fill="#8BA88E" />
                  <circle cx="800" cy="40" r="6" fill="#4a654e" />
                </svg>
              </div>

              <div className="flex justify-between mt-4 text-on-surface-variant font-label-md opacity-60">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </section>

            {/* Milestones — 4 cols */}
            <section
              className="lg:col-span-4 rounded-[32px] p-8 shadow-sm h-full"
              style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(139,168,142,0.1)' }}
            >
              <h3 className="font-headline-md text-headline-md mb-6">Milestones</h3>
              <div className="space-y-6">
                {/* Badge 1 */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-on-tertiary-fixed text-3xl">psychology</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md" style={{ fontSize: '16px' }}>7 Day Streak</h4>
                    <p className="text-xs text-on-surface-variant">Daily reflection champion</p>
                  </div>
                </div>
                {/* Badge 2 */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-secondary-fixed flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-on-secondary-fixed text-3xl">self_care</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md" style={{ fontSize: '16px' }}>Breathing Master</h4>
                    <p className="text-xs text-on-surface-variant">10 exercises completed</p>
                  </div>
                </div>
                {/* Badge 3 — Locked */}
                <div className="flex items-center gap-4 opacity-40 grayscale">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-highest flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant text-3xl">lock</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md" style={{ fontSize: '16px' }}>Deep Dive</h4>
                    <p className="text-xs text-on-surface-variant">Complete first session note</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Upcoming Sessions — 5 cols */}
            <section
              className="lg:col-span-5 rounded-[32px] p-8 shadow-sm"
              style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(139,168,142,0.1)' }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline-md text-headline-md">Upcoming</h3>
                <span className="material-symbols-outlined text-outline-variant">more_horiz</span>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-primary-container/10 rounded-2xl border-l-4 border-primary">
                  <p className="text-primary font-label-md text-label-md mb-1">Wednesday, Oct 12 • 4:00 PM</p>
                  <h4 className="font-headline-md text-headline-md mb-2">Weekly Check-in</h4>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-6 h-6 rounded-full"
                      alt="Dr. Aris Thorne"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-R_0nNSjw0iNnop1gpIDkprlyVpE0QP_A3dMlpAFbs4y9ZrVLZTHBLo-WAoXdiQ50ta0Ao31Ly8ZnMxUx1piLsh5D1YFxFGSjN4ppJyoO4heURdA9OeNKcULXsG00ygcENHMJKGi8t9CEiUDXezK-XGrCVqHWXSdFsuU_-4PjBmX_OIVVchea4ASTKrf7f12w0S53Az5891MyrSxCzbJIlVUlbt2A7E0XyY7kmYN1nVTQgQmxc2UsjA"
                    />
                    <span className="text-sm font-medium">Dr. Aris Thorne</span>
                  </div>
                </div>
                <div className="p-6 bg-surface-container-low rounded-2xl border-l-4 border-outline-variant">
                  <p className="text-on-surface-variant font-label-md text-label-md mb-1">Saturday, Oct 15 • 11:00 AM</p>
                  <h4 className="font-headline-md text-headline-md mb-2">Workshop: Grounding</h4>
                  <span className="text-sm text-on-surface-variant">Group Session (Virtual)</span>
                </div>
              </div>
            </section>

            {/* Therapist Notes & Homework — 7 cols */}
            <section
              className="lg:col-span-7 rounded-[32px] p-8 shadow-sm"
              style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(139,168,142,0.1)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">description</span>
                <h3 className="font-headline-md text-headline-md">Therapist Notes &amp; Homework</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-surface-container px-6 py-5 rounded-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>lock</span>
                    <span className="font-label-md text-label-md text-primary">Private Note</span>
                  </div>
                  <p className="italic text-on-surface-variant font-body-md line-clamp-3 mb-4">
                    "Focus this week on acknowledging your feelings without labeling them as 'good' or 'bad'. You're doing the work..."
                  </p>
                  <button className="text-primary font-label-md text-label-md hover:underline">Read Full Note</button>
                </div>
                <div className="bg-secondary-container/30 px-6 py-5 rounded-2xl flex flex-col justify-between">
                  <div>
                    <span className="font-label-md text-label-md text-secondary block mb-2 uppercase tracking-wide">Exercise</span>
                    <h4 className="font-headline-md mb-2" style={{ fontSize: '18px' }}>The 5-4-3-2-1 Technique</h4>
                    <p className="text-sm text-on-surface-variant mb-4">Practice once daily during morning tea.</p>
                  </div>
                  <Link
                    to="/explore"
                    className="block w-full text-center bg-secondary text-on-secondary py-2 rounded-xl font-label-md text-label-md transition-all hover:bg-secondary/90"
                  >
                    Start Session
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* In-page Footer */}
          <footer className="mt-20 border-t border-outline-variant/10 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div>
                <span className="font-headline-lg text-headline-lg font-bold text-primary mb-4 block">A Place to Breathe</span>
                <p className="text-on-surface-variant font-body-md opacity-80">© 2024 A Place to Breathe. Your safe space for healing.</p>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="font-label-md text-label-md text-on-surface font-bold">Quick Access</h5>
                <Link to="/privacy" className="text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Terms of Service</a>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="font-label-md text-label-md text-on-surface font-bold">Support</h5>
                <a href="#" className="text-primary font-bold">Mission</a>
                <Link to="/crisis" className="text-error font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>emergency</span>
                  Crisis Support
                </Link>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
