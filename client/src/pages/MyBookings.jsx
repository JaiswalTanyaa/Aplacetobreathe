import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function MyBookings() {
  const { user } = useAuth();

  /* ── Auth Gate: not logged in ─────────────────────────────────────────── */
  if (!user) {
    return (
      <div className="relative min-h-screen bg-background text-on-background antialiased overflow-x-hidden flex items-center justify-center px-6">
        <div className="absolute rounded-full pointer-events-none"
          style={{ background: '#cceace', width: '600px', height: '600px', top: '-100px', left: '-150px', filter: 'blur(100px)', opacity: 0.4, zIndex: -1 }} />
        <div className="absolute rounded-full pointer-events-none"
          style={{ background: '#ecdcfd', width: '500px', height: '500px', bottom: '20%', right: '-100px', filter: 'blur(100px)', opacity: 0.4, zIndex: -1 }} />

        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-5xl">calendar_month</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-3">Your Bookings Await</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Sign in to see your upcoming sessions, manage your schedule, and pick up right where you left off.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-full hover:bg-primary/90 transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">login</span>
              Sign In to View Bookings
            </Link>
            <Link
              to="/login"
              className="border border-primary text-primary font-label-md text-label-md px-8 py-4 rounded-full hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">person_add</span>
              Create an Account
            </Link>
          </div>
          <p className="text-on-surface-variant text-sm mt-8 opacity-70">
            No account yet? It's free and takes less than a minute.
          </p>
        </div>
      </div>
    );
  }

  /* ── Logged in — no bookings yet ──────────────────────────────────────── */
  return (
    <div className="relative min-h-screen bg-background text-on-background antialiased overflow-x-hidden">
      <div className="absolute rounded-full pointer-events-none"
        style={{ background: '#cceace', width: '600px', height: '600px', top: '-100px', left: '-150px', filter: 'blur(100px)', opacity: 0.4, zIndex: -1 }} />
      <div className="absolute rounded-full pointer-events-none"
        style={{ background: '#ecdcfd', width: '500px', height: '500px', bottom: '20%', right: '-100px', filter: 'blur(100px)', opacity: 0.4, zIndex: -1 }} />

      <main className="pt-32 pb-10 md:pb-20 px-6 max-w-container-max mx-auto min-h-screen flex flex-col gap-16">

        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-8">
          <div>
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface mb-2">
              My Bookings
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Take your time reviewing your schedule. This space is designed to help you manage your journey at your own pace.
            </p>
          </div>
          <Link
            to="/consultation"
            className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-full hover:bg-primary/90 transition-all shadow-sm flex items-center gap-2 shrink-0"
          >
            <span className="material-symbols-outlined">add</span>
            Book New Session
          </Link>
        </header>

        {/* Gentle Policy Note */}
        <section className="bg-surface-container-low rounded-xl p-6 border border-surface-variant/50 flex items-start gap-4">
          <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          <div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              <strong className="font-semibold text-on-surface">We understand plans change.</strong> Please let us know 24 hours in advance if you can, so we can adjust our schedule gently. There are no penalties for taking the time you need.
            </p>
          </div>
        </section>

        {/* Empty state */}
        <section className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-5xl">event_available</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">No sessions booked yet</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mb-8">
            Your upcoming sessions will appear here once you book one. Take the first gentle step — we're here with you.
          </p>
          <Link
            to="/consultation"
            className="bg-primary text-on-primary font-label-md text-label-md px-10 py-4 rounded-full hover:bg-primary/90 transition-all shadow-sm flex items-center gap-2"
          >
            <span className="material-symbols-outlined">add</span>
            Book Your First Session
          </Link>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full mt-20 bg-surface-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-20 max-w-container-max mx-auto">
          <div className="font-body-md text-body-md text-tertiary">
            © 2024 A Place to Breathe. Your safe space for healing.
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:col-span-2 justify-end">
            {['Mission', 'Privacy Policy', 'Terms of Service', 'Crisis Support'].map((l) => (
              <a key={l} href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all duration-200">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
