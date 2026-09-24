import React from 'react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="bg-background text-on-background antialiased min-h-screen relative overflow-x-hidden">

      {/* Organic Background Blobs */}
      <div className="blob-bg bg-secondary-container/40 absolute"
        style={{ width: '24rem', height: '24rem', top: 0, left: 0, transform: 'translate(-50%,-50%)', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', filter: 'blur(40px)', zIndex: -1, animation: 'morph 8s ease-in-out infinite', opacity: 0.4 }} />
      <div className="blob-bg bg-primary-fixed/30 absolute"
        style={{ width: '31rem', height: '31rem', top: '33%', right: 0, transform: 'translateX(33%)', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', filter: 'blur(40px)', zIndex: -1, animation: 'morph 8s ease-in-out infinite', opacity: 0.4 }} />
      <div className="blob-bg bg-tertiary-fixed/30 absolute"
        style={{ width: '20rem', height: '20rem', bottom: 0, left: '25%', transform: 'translateY(33%)', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', filter: 'blur(40px)', zIndex: -1, animation: 'morph 8s ease-in-out infinite', opacity: 0.4 }} />

      <style>{`
        @keyframes morph {
          0%,100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          34%      { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
          67%      { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
        }
      `}</style>

      {/* Floating Crisis Button */}
      <div className="fixed top-4 right-6 z-50">
        <Link
          to="/crisis"
          className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-crisis-link text-crisis-link hover:scale-105 transition-transform duration-300"
          style={{ background: '#F4A261', boxShadow: '0 4px 20px rgba(244,162,97,0.3)' }}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          Crisis Support
        </Link>
      </div>

      {/* Main Content */}
      <main className="max-w-[800px] mx-auto px-6 py-10 md:py-20">

        {/* Header */}
        <header className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-10">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '120px' }}>security</span>
          </div>
          <a
            href="javascript:history.back()"
            className="inline-flex items-center gap-2 text-primary hover:text-surface-tint mb-8 font-label-md text-label-md transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Home
          </a>
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-6">
            Our Promise to You: Privacy First.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            This is a safe space. We believe your personal thoughts, progress, and data belong entirely to you. Here is a clear, human-readable guide to how we protect your journey.
          </p>
        </header>

        {/* Bento Grid — Privacy Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

          {/* Who can see my notes */}
          <div className="bg-surface-container-lowest border border-surface-container rounded-xl p-8 shadow-[0_10px_30px_rgba(139,168,142,0.05)] hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[24px]">visibility_off</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Who can see my notes?</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Only you. Any journal entries, mood tracking, or personal reflections are encrypted. Our team cannot read them, and we never share them with third parties.
            </p>
          </div>

          {/* How data is stored */}
          <div className="bg-surface-container-lowest border border-surface-container rounded-xl p-8 shadow-[0_10px_30px_rgba(139,168,142,0.05)] hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[24px]">cloud_done</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">How my data is stored</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We use industry-standard encryption (AES-256) to store your data securely in the cloud. It's like a digital vault where you are the only one holding the key.
            </p>
          </div>

          {/* My rights — spans 2 cols */}
          <div className="bg-surface-container-lowest border border-surface-container rounded-xl p-8 shadow-[0_10px_30px_rgba(139,168,142,0.05)] hover:-translate-y-1 transition-transform duration-300 md:col-span-2">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="w-12 h-12 shrink-0 bg-tertiary-fixed text-on-tertiary-container rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">gavel</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">My rights</h3>
                <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[18px]">eco</span>
                    The right to know exactly what data we hold.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[18px]">eco</span>
                    The right to ask us to correct anything that is wrong.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[18px]">eco</span>
                    The right to pack up and leave without a trace (right to be forgotten).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Action Section */}
        <section className="mt-20 pt-16 border-t border-surface-container">
          <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-10">Your Data, Your Control</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-primary-container text-on-primary-container rounded-full font-label-md text-label-md shadow-[0_4px_15px_rgba(139,168,142,0.15)] hover:bg-surface-tint hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">download</span>
              Export my data
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-error/20 text-error rounded-full font-label-md text-label-md hover:bg-error/5 transition-all duration-300 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">delete_forever</span>
              Delete account
            </button>
          </div>
          <p className="text-center font-body-md text-body-md text-on-surface-variant mt-6 max-w-lg mx-auto">
            Take your time deciding. If you choose to leave, your data will be permanently and securely erased within 30 days.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mt-20 bg-surface-container grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-20 max-w-container-max mx-auto">
        <div>
          <div className="font-headline-lg text-headline-lg font-bold text-primary mb-4">A Place to Breathe</div>
          <p className="font-body-md text-body-md text-tertiary">© 2024 A Place to Breathe. Your safe space for healing.</p>
        </div>
        <div className="md:col-span-2 flex justify-end gap-6 font-body-md text-body-md text-on-surface-variant">
          <a className="hover:text-primary hover:underline transition-all duration-200" href="#">Mission</a>
          <a className="text-primary font-bold hover:underline transition-all duration-200" href="#">Privacy Policy</a>
          <a className="hover:text-primary hover:underline transition-all duration-200" href="#">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
