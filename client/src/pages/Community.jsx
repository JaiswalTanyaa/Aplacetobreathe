import React from 'react';
import { Link } from 'react-router-dom';

export default function Community() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen relative overflow-x-hidden"
      style={{ userSelect: 'none' }}>

      {/* Ambient Background Blobs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          background: '#b0ceb2',
          width: '500px', height: '500px',
          top: '-100px', left: '-200px',
          filter: 'blur(80px)', opacity: 0.4, zIndex: -1,
          animation: 'float 20s infinite ease-in-out alternate',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          background: '#ecdcfd',
          width: '400px', height: '400px',
          top: '40%', right: '-150px',
          filter: 'blur(80px)', opacity: 0.4, zIndex: -1,
          animation: 'float 20s infinite ease-in-out alternate',
          animationDelay: '-5s',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          background: '#ffdcc4',
          width: '600px', height: '600px',
          bottom: '-200px', left: '10%',
          filter: 'blur(80px)', opacity: 0.3, zIndex: -1,
          animation: 'float 20s infinite ease-in-out alternate',
          animationDelay: '-10s',
        }}
      />

      <style>{`
        @keyframes float {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(30px, -30px) scale(1.1); }
        }
        .card-ambient-shadow { box-shadow: 0 20px 20px 0 rgba(139,168,142,0.05); }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Main Content Canvas */}
      <main className="pt-[100px] md:pt-[120px] pb-20 px-6 max-w-container-max mx-auto relative z-10">

        {/* Header Section */}
        <section className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full mb-4">
              <span
                className="material-symbols-outlined text-primary text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >shield</span>
              <span className="font-label-md text-label-md text-on-surface-variant">Anonymous Moderated Space</span>
            </div>
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-primary mb-4">
              Your Safe Space for Shared Stories
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Connect with others who understand. Read, share, and support one another in a protected environment.
            </p>
          </div>
          <button className="bg-primary hover:bg-surface-tint text-on-primary font-label-md text-label-md px-6 py-3 rounded-full transition-all card-ambient-shadow flex items-center justify-center gap-2 shrink-0 self-start md:self-auto w-full md:w-auto">
            <span className="material-symbols-outlined">edit</span>
            New Post
          </button>
        </section>

        {/* Moderation Notice */}
        <div className="bg-secondary-fixed/50 border border-secondary-fixed-dim/50 rounded-xl p-6 mb-12 flex items-start gap-4 card-ambient-shadow">
          <div className="bg-surface rounded-full p-2 text-secondary shrink-0">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
          </div>
          <div>
            <h3 className="font-headline-md text-headline-md text-on-secondary-container mb-2" style={{ fontSize: '18px' }}>
              Community Guidelines
            </h3>
            <p className="font-body-md text-body-md text-on-secondary-fixed-variant">
              This is a kind, anonymous space. Real names and phone numbers are hidden for your privacy. Treat every story with gentleness and respect.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Sidebar — Desktop */}
          <aside className="hidden md:block md:col-span-3 space-y-2 sticky top-[140px]">
            <h4 className="font-label-md text-label-md text-outline uppercase tracking-wider mb-4 px-4">Topics</h4>
            <a href="#" className="block bg-primary-container text-on-primary-container px-4 py-3 rounded-xl font-body-md text-body-md font-medium transition-colors">
              All Stories
            </a>
            <a href="#" className="block text-on-surface-variant hover:bg-surface-variant/50 px-4 py-3 rounded-xl font-body-md text-body-md transition-colors flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" /> Anxiety
            </a>
            <a href="#" className="block text-on-surface-variant hover:bg-surface-variant/50 px-4 py-3 rounded-xl font-body-md text-body-md transition-colors flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tertiary" /> Life Transitions
            </a>
            <a href="#" className="block text-on-surface-variant hover:bg-surface-variant/50 px-4 py-3 rounded-xl font-body-md text-body-md transition-colors flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" /> Student Life
            </a>
            <a href="#" className="block text-on-surface-variant hover:bg-surface-variant/50 px-4 py-3 rounded-xl font-body-md text-body-md transition-colors flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-outline" /> General Support
            </a>
          </aside>

          {/* Categories — Mobile Horizontal Scroll */}
          <div className="md:hidden col-span-1 flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            <button className="bg-primary-container text-on-primary-container px-5 py-2 rounded-full font-label-md text-label-md whitespace-nowrap shrink-0">
              All Stories
            </button>
            <button className="bg-surface-container text-on-surface-variant px-5 py-2 rounded-full font-label-md text-label-md whitespace-nowrap shrink-0 border border-surface-dim/50">
              Anxiety
            </button>
            <button className="bg-surface-container text-on-surface-variant px-5 py-2 rounded-full font-label-md text-label-md whitespace-nowrap shrink-0 border border-surface-dim/50">
              Life Transitions
            </button>
            <button className="bg-surface-container text-on-surface-variant px-5 py-2 rounded-full font-label-md text-label-md whitespace-nowrap shrink-0 border border-surface-dim/50">
              Student Life
            </button>
          </div>

          {/* Feed */}
          <div className="col-span-1 md:col-span-9 space-y-6">

            {/* Post 1 */}
            <article className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-6 card-ambient-shadow hover:shadow-[0_24px_30px_0_rgba(139,168,142,0.08)] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-headline-md font-bold text-lg">
                    S
                  </div>
                  <div>
                    <h4 className="font-body-md text-body-md font-medium text-on-surface">SilentObserver</h4>
                    <p className="font-body-md text-body-md text-sm text-outline">Just now • Anxiety</p>
                  </div>
                </div>
                <button aria-label="Report post" className="text-outline-variant hover:text-error transition-colors">
                  <span className="material-symbols-outlined text-xl">flag</span>
                </button>
              </div>
              <h2 className="font-headline-md font-semibold mb-2" style={{ fontSize: '20px', color: '#8ba88e' }}>
                Feeling overwhelmed by the quiet
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                Sometimes when everything stops, the thoughts get louder. I'm trying the 5-4-3-2-1 grounding technique today, but finding it hard to focus. Does anyone else struggle with this when trying to rest?
              </p>
              <div className="flex items-center gap-6 border-t border-surface-container-high pt-4">
                <button className="flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-colors group">
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform">favorite</span>
                  <span className="font-label-md text-label-md">24 Support</span>
                </button>
                <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">chat_bubble</span>
                  <span className="font-label-md text-label-md">5 Replies</span>
                </button>
              </div>
            </article>

            {/* Post 2 */}
            <article className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-6 card-ambient-shadow hover:shadow-[0_24px_30px_0_rgba(139,168,142,0.08)] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-container font-headline-md font-bold text-lg">
                    W
                  </div>
                  <div>
                    <h4 className="font-body-md text-body-md font-medium text-on-surface">WanderingSoul</h4>
                    <p className="font-body-md text-body-md text-sm text-outline">2 hours ago • Life Transitions</p>
                  </div>
                </div>
                <button aria-label="Report post" className="text-outline-variant hover:text-error transition-colors">
                  <span className="material-symbols-outlined text-xl">flag</span>
                </button>
              </div>
              <h2 className="font-headline-md font-semibold mb-2" style={{ fontSize: '20px', color: '#8ba88e' }}>
                Moving to a new city alone
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                I just unpacked my last box. It's beautiful here, but the isolation is hitting harder than expected. Reminding myself that building a home takes time. Small steps today: found a local coffee shop.
              </p>
              <div className="flex items-center gap-6 border-t border-surface-container-high pt-4">
                {/* Post 2 is already "liked" — filled heart, tertiary color */}
                <button className="flex items-center gap-2 text-tertiary transition-colors group">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  <span className="font-label-md text-label-md">142 Support</span>
                </button>
                <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">chat_bubble</span>
                  <span className="font-label-md text-label-md">18 Replies</span>
                </button>
              </div>
            </article>

          </div>
        </div>
      </main>

      {/* Bottom Nav Bar — Mobile Only */}
      <nav className="md:hidden fixed bottom-0 w-full bg-surface-container-lowest border-t border-surface-container-high z-50 px-6 py-3 flex justify-between items-center">
        <Link to="/explore" className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary">
          <span className="material-symbols-outlined">explore</span>
          <span className="font-label-md font-medium" style={{ fontSize: '10px' }}>Explore</span>
        </Link>
        <Link to="/community" className="flex flex-col items-center gap-1 text-primary">
          <div className="bg-primary-container/30 px-4 py-1 rounded-full">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
          </div>
          <span className="font-label-md font-medium" style={{ fontSize: '10px' }}>Community</span>
        </Link>
        <Link to="/workshops" className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary">
          <span className="material-symbols-outlined">school</span>
          <span className="font-label-md font-medium" style={{ fontSize: '10px' }}>Workshops</span>
        </Link>
        <Link to="/progress" className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary">
          <span className="material-symbols-outlined">trending_up</span>
          <span className="font-label-md font-medium" style={{ fontSize: '10px' }}>Progress</span>
        </Link>
      </nav>
    </div>
  );
}
