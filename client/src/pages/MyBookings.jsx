import React from 'react';
import { Link } from 'react-router-dom';

export default function MyBookings() {
  return (
    <div className="relative min-h-screen bg-background text-on-background antialiased overflow-x-hidden">
      {/* Ambient Background Blobs */}
      <div className="absolute rounded-full pointer-events-none"
        style={{ background: '#cceace', width: '600px', height: '600px', top: '-100px', left: '-150px', filter: 'blur(100px)', opacity: 0.4, zIndex: -1 }} />
      <div className="absolute rounded-full pointer-events-none"
        style={{ background: '#ecdcfd', width: '500px', height: '500px', bottom: '20%', right: '-100px', filter: 'blur(100px)', opacity: 0.4, zIndex: -1 }} />

      <style>{`
        .ambient-shadow { box-shadow: 0 20px 40px -10px rgba(139,168,142,0.15); }
      `}</style>

      {/* Main Content */}
      <main className="pt-32 pb-10 md:pb-20 px-6 max-w-container-max mx-auto min-h-screen flex flex-col gap-16">

        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-8">
          <div>
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface mb-2">My Bookings</h1>
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

        {/* Upcoming Sessions */}
        <section>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary-container">event</span>
            Upcoming Sessions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Booking Card 1 */}
            <article className="bg-surface-container-lowest rounded-xl p-8 border border-surface-variant/30 ambient-shadow hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container to-secondary-container opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="font-label-md text-label-md text-secondary tracking-widest uppercase mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    Tomorrow, 2:00 PM
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Individual Therapy</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">with Dr. Sarah Jenkins</p>
                </div>
                <div
                  className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-surface"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALgWPigkaqj_WmY0ZOqWzZYBB6Vai94XhSzE_9o3pbF1nv9UIBOavzd-FzFbzieyxhpwVeRBONvcO2qBEvjLmNVZ0u9jiXEsXpsZJONNcNTarvFNMRrRJxMSyP-UmoJjCCZJDFfL4CH8jcuB_M5pkxEPHx9KFLKXbr7yzTTmpaviDa6Gyj2ak2-iRn4RHyTgsrV9NJP8NCfNcAE-UeYZbfaPaOgl3ieb8Hh78YMQ40ilmAW-pC4Da1eA')" }}
                />
              </div>
              <div className="bg-inverse-on-surface/50 rounded-lg p-3 mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant text-sm">lock</span>
                <span className="font-body-md text-body-md text-on-surface-variant text-sm">End-to-end encrypted video session</span>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-surface-container-high text-on-surface font-label-md text-label-md py-3 rounded-full hover:bg-surface-dim transition-colors text-center border border-outline-variant/30">
                  Reschedule
                </button>
                <button className="flex-1 text-on-surface-variant font-label-md text-label-md py-3 rounded-full hover:text-error transition-colors text-center">
                  Cancel
                </button>
              </div>
            </article>

            {/* Booking Card 2 */}
            <article className="bg-surface-container-lowest rounded-xl p-8 border border-surface-variant/30 ambient-shadow hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-container to-primary-container opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="font-label-md text-label-md text-secondary tracking-widest uppercase mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">calendar_month</span>
                    Oct 24, 10:00 AM
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Group Workshop</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">Anxiety Management</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined">group</span>
                </div>
              </div>
              <div className="bg-inverse-on-surface/50 rounded-lg p-3 mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant text-sm">verified</span>
                <span className="font-body-md text-body-md text-on-surface-variant text-sm">Secure community space</span>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-surface-container-high text-on-surface font-label-md text-label-md py-3 rounded-full hover:bg-surface-dim transition-colors text-center border border-outline-variant/30">
                  Reschedule
                </button>
                <button className="flex-1 text-on-surface-variant font-label-md text-label-md py-3 rounded-full hover:text-error transition-colors text-center">
                  Cancel
                </button>
              </div>
            </article>
          </div>
        </section>

        {/* Past Session History */}
        <section>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 opacity-80">Past Sessions</h2>
          <div className="space-y-4">
            {[
              { date: 'Oct 10, 2024', title: 'Individual Therapy', link: 'View Notes' },
              { date: 'Sep 28, 2024', title: 'Mindfulness Workshop', link: 'View Resources' },
            ].map((item, i) => (
              <div key={i} className="group flex items-center justify-between p-4 hover:bg-surface-container-low rounded-xl transition-colors border border-transparent hover:border-surface-variant/30">
                <div className="flex items-center gap-6">
                  <div className="w-2 h-2 rounded-full bg-outline-variant" />
                  <div>
                    <div className="font-body-md text-body-md text-on-surface-variant text-sm mb-1">{item.date}</div>
                    <div className="font-headline-md text-headline-md text-on-surface" style={{ fontSize: '18px' }}>{item.title}</div>
                  </div>
                </div>
                <a href="#" className="font-label-md text-label-md text-primary flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.link}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
          <button className="mt-8 text-secondary font-label-md text-label-md flex items-center gap-2 hover:text-primary transition-colors">
            Load older sessions
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
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
