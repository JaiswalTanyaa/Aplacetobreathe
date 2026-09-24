import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Explore() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeType, setActiveType] = useState(null);

  const focusAreas = ['All', 'Anxiety', 'Stress', 'Sleep', 'Self-esteem'];
  const contentTypes = [
    { label: 'Article', icon: 'article' },
    { label: 'Activity', icon: 'self_improvement' },
    { label: 'Video', icon: 'play_circle' },
  ];

  return (
    <div
      className="relative py-8 pb-20 px-6 max-w-container-max mx-auto overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background Decorative Blobs */}
      <div
        className="pointer-events-none"
        style={{
          position: 'absolute',
          top: '-80px',
          left: '-80px',
          width: '384px',
          height: '384px',
          background: '#8ba88e',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          filter: 'blur(60px)',
          opacity: 0.4,
          zIndex: 0,
        }}
      />
      <div
        className="pointer-events-none"
        style={{
          position: 'absolute',
          top: '50%',
          right: '-80px',
          width: '320px',
          height: '320px',
          background: '#ecdcfd',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          filter: 'blur(60px)',
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* Header Section */}
      <header className="mb-16 text-center max-w-2xl mx-auto relative z-10">
        <h1 className="font-headline-xl text-headline-xl mb-4 text-on-surface">
          Find what you need to feel whole
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Take a deep breath. Whether you're looking for a quick activity or a deep dive into mindfulness, we're here with you.
        </p>
      </header>

      {/* Search & Filter Bar */}
      <section className="mb-12 space-y-6 relative z-10">
        <div className="relative max-w-xl mx-auto group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            type="text"
            placeholder="Search for themes, feelings, or activities..."
            className="w-full pl-12 pr-4 py-4 bg-white border-none rounded-2xl font-body-md text-on-surface placeholder:text-outline-variant transition-all focus:outline-none focus:ring-2 focus:ring-primary/20"
            style={{ boxShadow: '0 10px 30px -5px rgba(139,168,142,0.1)' }}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {/* Focus Areas */}
          <div className="flex flex-col gap-2 items-center">
            <span className="font-label-md text-label-md text-outline uppercase tracking-wider">Focus Areas</span>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <button
                  key={area}
                  onClick={() => setActiveFilter(area)}
                  className={`px-5 py-2 rounded-full font-label-md transition-all ${
                    activeFilter === area
                      ? 'bg-primary-container text-on-primary-container hover:opacity-90'
                      : 'bg-secondary-container/30 text-secondary hover:bg-secondary-container/50'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          <div className="h-10 w-px bg-outline-variant/30 self-end hidden md:block" />

          {/* Content Type */}
          <div className="flex flex-col gap-2 items-center">
            <span className="font-label-md text-label-md text-outline uppercase tracking-wider">Content Type</span>
            <div className="flex gap-2">
              {contentTypes.map((t) => (
                <button
                  key={t.label}
                  onClick={() => setActiveType(activeType === t.label ? null : t.label)}
                  className={`px-5 py-2 rounded-full font-label-md transition-all flex items-center gap-2 ${
                    activeType === t.label
                      ? 'border-2 border-primary text-primary'
                      : 'border border-outline-variant text-on-surface-variant hover:border-primary'
                  }`}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{t.icon}</span>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">

        {/* Featured Large Card */}
        <article className="md:col-span-8 group cursor-pointer">
          <div
            className="relative overflow-hidden rounded-3xl bg-white h-[400px] flex flex-col md:flex-row border border-surface-container-high transition-transform duration-500 hover:-translate-y-1"
            style={{ boxShadow: '0 10px 30px -5px rgba(139,168,142,0.1)' }}
          >
            <div className="md:w-1/2 h-full overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="A serene landscape with soft rolling hills during the golden hour"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXfKL6Mv5FGfCDNyBROKZfTmetc3Fk7vVu91zxqbDGKqyhjOw61UErCW6PSrvLwkgCjj7rsE6FqN2Fb8DrK8x9eas6Uu_v7J_ZoKsdnsZnLe6MI5cGpSPGmvqVaRB2BujRkJoM4IqkCEoOzlz6cbBpOvzh39HFYfhmYynnafO4pwr0Z3H2Le3Syxy2N-gVhJVSNiA_3iebGq9WgzLRi-nwEeUxgxn6aJqdIy6kUa5HEdjxHvqZQHJGnQ"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md" style={{ fontSize: '12px' }}>
                  Featured Activity
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-md" style={{ fontSize: '12px' }}>
                  10 min
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg mb-4 text-on-surface leading-tight">
                Walking Meditation: The Forest Bathing Guide
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Learn to reconnect with your senses while moving through the world. A gentle guide to grounding yourself in nature.
              </p>
              <button className="w-fit px-8 py-3 bg-primary text-on-primary rounded-full font-headline-md hover:opacity-90 transition-all flex items-center gap-2" style={{ fontSize: '16px' }}>
                Begin Journey <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </article>

        {/* Small Card 1 — Lavender Protocol */}
        <article className="md:col-span-4 group cursor-pointer">
          <div
            className="bg-white rounded-3xl border border-surface-container-high p-6 h-full flex flex-col transition-transform duration-500 hover:-translate-y-1"
            style={{ boxShadow: '0 10px 30px -5px rgba(139,168,142,0.1)' }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden mb-6">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="A macro photograph of a single lavender sprig"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRZe0w9Czqxu-Xb3pfaaDTX8SRqk8nBsBpA9KgT-nCODAULg6f48De31iMwgcyZgvMO7pZJuACJfWKCWYPOXQVVsE_i1oEBVUxX130xTExfTV2j7WC_zWFv--o4Sxstl1nj2R2R798y9R7Zy3ezfBlevwW8fekrpIyvDJCH6TQTpOmQtoUw7_IX0bDCFLXkYGIwhPN1wfYfa90a9wInclsuaov5qbA7gaVZhNUb1vvWjuIqaVfypFbpQ"
              />
            </div>
            <span className="font-label-md text-label-md text-primary mb-2">Sleep</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">The Lavender Protocol</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              A simple 5-step ritual to prepare your mind for deep, restorative sleep.
            </p>
            <div className="mt-auto flex items-center text-outline font-label-md gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>article</span>
              4 min read
            </div>
          </div>
        </article>

        {/* Medium Card 2 — Daily Journal Prompt */}
        <article className="md:col-span-4 group cursor-pointer">
          <Link
            to="/journal"
            className="block bg-secondary-container/20 rounded-3xl border border-secondary-container/30 p-8 h-full flex flex-col transition-transform duration-500 hover:-translate-y-1"
            style={{ boxShadow: '0 10px 30px -5px rgba(139,168,142,0.1)' }}
          >
            <div className="flex justify-between items-start mb-12">
              <div className="p-3 bg-white rounded-2xl">
                <span
                  className="material-symbols-outlined text-secondary scale-125"
                  style={{ fontVariationSettings: "'FILL' 1", fontSize: '24px' }}
                >
                  favorite
                </span>
              </div>
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">Daily Prompt</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-secondary-container mb-4">
              What made you feel safe today?
            </h3>
            <p className="font-body-md text-body-md text-on-secondary-container/80 mb-8 italic">
              Write for 5 minutes without judging your thoughts. This is just for you.
            </p>
            <button className="mt-auto text-secondary font-headline-md flex items-center gap-2 group-hover:gap-4 transition-all">
              Open Journal <span className="material-symbols-outlined">edit_note</span>
            </button>
          </Link>
        </article>

        {/* Medium Card 3 — Breathwork Video */}
        <article className="md:col-span-8 group cursor-pointer">
          <div
            className="bg-white rounded-3xl border border-surface-container-high overflow-hidden flex flex-col md:flex-row h-full transition-transform duration-500 hover:-translate-y-1"
            style={{ boxShadow: '0 10px 30px -5px rgba(139,168,142,0.1)' }}
          >
            <div className="md:w-2/5 p-8 flex flex-col">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-md" style={{ fontSize: '12px' }}>
                  New Video
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-3">Breathwork for Acute Panic</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                A guided 3-minute session to reset your nervous system during high-stress moments.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">play_arrow</span>
                </div>
                <span className="font-label-md text-on-surface">3:24 Session</span>
              </div>
            </div>
            <div className="md:w-3/5 relative overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Soft-focus abstract image representing rhythmic breathing with flowing silk waves"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVAHafd_t_9U3k4U9nZHkaDOXoRTYBYH-FnkfTUm_8s4rwvbJbzGFJXwEJrHCBanurhV_vPDNZ-2tGyeH3Gpr0v-US1orj2qtj5azr8_37ENN_s8cvplohn8xxCO3fF1YjgC9URRq3oS4cejo0Cgi_adAjf68grsE-bKG0ZrPCv_oGQvdaZH0ZGn4fyiLYN-ztKvpTydJvgnD3wnJznE0e2UTfcx6nYjHiuHu0u4_XCFUYVk67IOzO1w"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors" />
            </div>
          </div>
        </article>

        {/* Small Card 4 — Reclaiming Your Narrative */}
        <article className="md:col-span-4 group cursor-pointer">
          <div
            className="bg-white rounded-3xl border border-surface-container-high p-6 h-full flex flex-col transition-transform duration-500 hover:-translate-y-1"
            style={{ boxShadow: '0 10px 30px -5px rgba(139,168,142,0.1)' }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="An overhead shot of a minimalist wooden desk with a ceramic mug of herbal tea and a journal"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8ySdWKwtWcRFjJZBc_XXr5NJMXuYpFxpQQApK6btvgLvuYFO3KXUGM2y5tecEHfRhb8dZkE6xqXB0p2Gi8zZHsgC1IsUfMPU0aoVc13J1x1g0RAx7nYHb-rCVa-EUwSVfnnTlWgY6jrEwFY21PUuC9UgMeh3MsdmMBGsR_8NkOEsP2frT7S3vJH3OdKtx-XTd9hGiB94iT6fC3U7Dh5Q0a0dBIVK-w034zm9a73zBjiXAUz6EG3LRhg"
              />
            </div>
            <span className="font-label-md text-label-md text-primary mb-2">Self-esteem</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Reclaiming Your Narrative</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Simple cognitive reframing exercises to silence your inner critic.
            </p>
            <div className="mt-6 flex items-center text-outline font-label-md gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>self_improvement</span>
              15 min activity
            </div>
          </div>
        </article>

        {/* Small Card 5 — Personalize Your Feed */}
        <article className="md:col-span-4 group cursor-pointer">
          <div className="bg-surface-container-low rounded-3xl p-8 flex flex-col justify-center text-center border border-dashed border-outline-variant transition-all hover:bg-white hover:border-solid" style={{ minHeight: '200px' }}>
            <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: '40px' }}>explore</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Personalize Your Feed</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Tell us how you're feeling today, and we'll curate a list just for you.
            </p>
            <button className="px-6 py-2 border-2 border-primary text-primary rounded-full font-headline-md hover:bg-primary hover:text-white transition-all" style={{ fontSize: '14px' }}>
              Take the Quiz
            </button>
          </div>
        </article>

        {/* Small Card 6 — 5-4-3-2-1 Method */}
        <article className="md:col-span-4 group cursor-pointer">
          <div
            className="bg-white rounded-3xl border border-surface-container-high p-6 h-full flex flex-col transition-transform duration-500 hover:-translate-y-1"
            style={{ boxShadow: '0 10px 30px -5px rgba(139,168,142,0.1)' }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="A cozy indoor reading nook with soft pillows and a window looking onto a peaceful forest"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSEsc1eB3W8RWCKPa9tINrmReatLC0gsDYmpBqb6SrmURnEQWbhM8saPZ6UOfh2ut43EF7KESQ1xNxtOii1SOl58WSQrMnHAGkWEdpqWzxCLxQwaosvTRmAKlYr7NUGgv81qfxv6tFycLEeBm1QaoAqTcWlzBMbcLqrBHF0rf-w_346m4SlYl_dExgNV_UOrV7aa_fV_0ngRscsE3Jtg6WryrAk3c3AcWmSDHMPLuRlznFc5CaI7aPNA"
              />
            </div>
            <span className="font-label-md text-label-md text-primary mb-2">Anxiety</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">The '5-4-3-2-1' Method</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              A sensory grounding technique to pull you back from the spiral.
            </p>
            <div className="mt-6 flex items-center text-outline font-label-md gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>play_circle</span>
              Video Tutorial
            </div>
          </div>
        </article>
      </div>

      {/* Load More */}
      <div className="mt-20 text-center relative z-10">
        <button
          className="px-10 py-4 bg-white border border-surface-container-high rounded-full font-headline-md text-primary hover:bg-primary-container/10 transition-all"
          style={{ boxShadow: '0 10px 30px -5px rgba(139,168,142,0.1)' }}
        >
          Load more breathing room
        </button>
      </div>
    </div>
  );
}
