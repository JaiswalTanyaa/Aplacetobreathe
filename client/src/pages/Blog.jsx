import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ['All Articles', 'Expert Advice', 'Student Contributors', 'Wellness Science', 'Personal Essays'];



export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All Articles');

  return (
    <div className="relative min-h-screen flex flex-col bg-background text-on-background font-body-md antialiased overflow-x-hidden">
      {/* Ambient Background */}
      <div className="ambient-blob absolute top-0 left-[-100px] pointer-events-none"
        style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(236,220,253,0.4) 0%, rgba(251,249,245,0) 70%)', borderRadius: '50%', filter: 'blur(40px)', zIndex: -1 }} />
      <div className="ambient-blob absolute pointer-events-none"
        style={{ top: '800px', right: '-200px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(204,234,206,0.3) 0%, rgba(251,249,245,0) 70%)', borderRadius: '50%', filter: 'blur(40px)', zIndex: -1 }} />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-surface-variant w-full z-[60]">
        <div className="h-full bg-primary-container transition-all duration-500 ease-out" style={{ width: '15%' }} />
      </div>

      <main className="flex-grow pt-[120px] pb-20 px-6 max-w-container-max mx-auto w-full">

        {/* Featured Article */}
        <article className="mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image */}
            <div className="w-full lg:w-3/5 relative group rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(139,168,142,0.15)]">
              <img
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                alt="A calming digital illustration of a figure sitting peacefully by a glowing pond"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXd6WE5Ccf_-dLG6WNaXGD_SeGa_fEXswZTyzAja-oeHejhUarZr0fPNCBngvLRPg2dokxl02ds8C16OqkKEYukKo6LYEZwJoR-ReUTNuvdMUOlJ6lcZP5uTfuyWf6XpHgPzO0mXmumBk8UrXZyPEKb8VwOrPtfjMeb9KOo_-IVCBIUkNwYXguH-1aNM_Mul-t2zeX8_eOh3oywYo86sVetpZW2IVc0Lx5RSf3_TRy_lTle7RD-pI1Sg"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-surface/90 backdrop-blur-sm text-primary font-label-md text-label-md px-4 py-2 rounded-full shadow-sm">Featured Read</span>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-3 text-secondary font-label-md text-label-md">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>schedule</span>
                <span>12 min read</span>
                <span className="text-surface-dim">•</span>
                <span>Wellness Science</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface leading-tight">
                Finding stillness in a world that never stops moving
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Our nervous systems were not built for constant digital connection. Learn practical, scientifically-backed methods to cultivate a quiet mind and reclaim your internal space without completely disconnecting from the world.
              </p>
              <div className="pt-4 flex items-center justify-between border-t border-surface-container-high mt-4">
                <p className="font-body-md text-body-md text-on-surface-variant italic" style={{ fontSize: '14px' }}>
                  A Place to Breathe Editorial Team
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Category Tabs */}
        <section className="mb-16 flex flex-col items-center">
          <h2 className="sr-only">Article Categories</h2>
          <div className="flex overflow-x-auto w-full no-scrollbar justify-start md:justify-center gap-4 pb-4"
            style={{ scrollbarWidth: 'none' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-3 rounded-full font-label-md text-label-md transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-container text-on-primary-container shadow-sm'
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Article Grid — empty state */}
        <section className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-5xl">article</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">Articles Coming Soon</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
            Thoughtful pieces on wellness, mental health, and healing will be published here. Check back soon.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mt-20 bg-surface-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-20 max-w-container-max mx-auto">
          <div className="flex flex-col gap-4">
            <span className="font-headline-lg text-headline-lg font-bold text-primary">A Place to Breathe</span>
            <p className="font-body-md text-body-md text-tertiary">© 2024 A Place to Breathe. Your safe space for healing.</p>
          </div>
          <div className="flex flex-col gap-3">
            {['Mission', 'Privacy Policy', 'Terms of Service'].map((l) => (
              <a key={l} href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">{l}</a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/crisis" className="font-body-md text-body-md text-primary font-bold hover:underline transition-all">Crisis Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
