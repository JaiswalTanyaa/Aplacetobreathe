import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ['All Articles', 'Expert Advice', 'Student Contributors', 'Wellness Science', 'Personal Essays'];

const articles = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvHMBXVb7_7uA4zyMAV3Hk6I3MBXZhFelyeDGEgI08xOvQblS5nqLQUVi3X9sodWDzO5e4oCC5XRViPgqbsAwiSFwrPD_sbAY9VLkUPwZIJCtNQQ7h9cigysNK1MIlVfXYabo132IchAIY1hDxaHsDWxhizxslTZNXiJYYsbRVgeag55mSrSfS-4PbnfkZZLtYLZ3fvTEndgxeiQk7GdzZNTvl1K91RpvQ0TiC5RbSI7-GHXZ74KouLw',
    readTime: '8 min read',
    category: 'Personal Essays',
    title: 'The gentle art of saying no without guilt',
    body: 'Setting boundaries is often framed as a battle. But what if we approached it as an act of profound self-care and mutual respect? Exploring softer ways to protect your energy.',
    initials: 'EM',
    initBg: 'bg-primary/20 text-primary',
    author: 'Elena Markos',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC66CInwOm_nJeJMs_Y7_yvXJRRR31ytacUX9sRrIjs45zUKi9AF7GlqcLHDeiLkSKsZPCD7yZbMRq1DVwWb0ECUdCsJMyir-F2k5zdHNLlx3hkWAgSZfTbhsO_0Aq0fUehgD2ifp4bmvHbLefPcHbw-4N8TLJeRKam7wPVkpIh02p6erAVP12RRUWPxZoQfTLY_rZ6yL7neQSVyphKtwTu06f_6LR_cA34CAQSxpn9AAO0W6kmzEPW3w',
    readTime: '10 min read',
    category: 'Expert Advice',
    title: 'Re-framing anxiety: When your body is trying to help',
    body: "Instead of viewing anxiety as an enemy to be defeated, somatic therapists suggest listening to it as a protective signal. How to interpret the physical language of your nervous system.",
    initials: 'JD',
    initBg: 'bg-secondary-container text-on-secondary-container',
    author: 'James Davies',
  },
  {
    img: null,
    readTime: '5 min read',
    category: 'Student Contributors',
    title: 'My unexpected journey with mindful breathing',
    body: '"I used to think meditation was for people who already had their lives figured out. Then I hit a wall during finals week, and a simple four-count breath became my anchor." A personal account of finding calm in chaos.',
    initials: 'AK',
    initBg: 'bg-tertiary-container text-on-tertiary-container',
    author: 'Alex Kim',
    textCard: true,
  },
];

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
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-headline-md">
                    SJ
                  </div>
                  <div>
                    <p className="font-headline-md text-on-surface m-0" style={{ fontSize: '16px' }}>Dr. Sarah Jenkins</p>
                    <p className="font-body-md text-on-surface-variant m-0" style={{ fontSize: '14px' }}>Clinical Psychologist</p>
                  </div>
                </div>
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

        {/* Article Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a, i) =>
            a.textCard ? (
              <article key={i} className="bg-surface-container border border-surface-dim rounded-2xl p-8 flex flex-col gap-4 shadow-[0_4px_20px_0_rgba(139,168,142,0.05)] hover:shadow-[0_8px_30px_0_rgba(139,168,142,0.1)] transition-all duration-300 group cursor-pointer h-full relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 text-surface-dim/40 material-symbols-outlined pointer-events-none rotate-[-15deg]"
                  style={{ fontSize: '150px', fontVariationSettings: "'FILL' 1" }}>spa</div>
                <div className="flex items-center gap-2 text-secondary font-label-md relative z-10" style={{ fontSize: '12px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>menu_book</span>
                  <span>{a.readTime}</span>
                  <span className="text-surface-dim">•</span>
                  <span>{a.category}</span>
                </div>
                <h3 className="font-headline-lg text-on-surface group-hover:text-primary transition-colors mt-2 relative z-10 leading-tight" style={{ fontSize: '28px' }}>{a.title}</h3>
                <p className="font-body-lg text-on-surface-variant flex-grow leading-relaxed mt-4 relative z-10">{a.body}</p>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-outline-variant/30 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${a.initBg} flex items-center justify-center font-label-md`} style={{ fontSize: '12px' }}>{a.initials}</div>
                    <span className="font-label-md text-on-surface">{a.author}</span>
                  </div>
                  <button className="text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>bookmark_border</span>
                  </button>
                </div>
              </article>
            ) : (
              <article key={i} className="bg-surface-container-lowest border border-surface-dim rounded-2xl p-6 flex flex-col gap-4 shadow-[0_4px_20px_0_rgba(139,168,142,0.05)] hover:shadow-[0_8px_30px_0_rgba(139,168,142,0.1)] transition-all duration-300 group cursor-pointer h-full">
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden mb-2">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={a.title} src={a.img} />
                </div>
                <div className="flex items-center gap-2 text-secondary font-label-md" style={{ fontSize: '12px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>menu_book</span>
                  <span>{a.readTime}</span>
                  <span className="text-surface-dim">•</span>
                  <span>{a.category}</span>
                </div>
                <h3 className="font-headline-lg text-on-surface group-hover:text-primary transition-colors leading-snug" style={{ fontSize: '22px' }}>{a.title}</h3>
                <p className="font-body-md text-on-surface-variant flex-grow line-clamp-3">{a.body}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-surface-container">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${a.initBg} flex items-center justify-center font-label-md`} style={{ fontSize: '12px' }}>{a.initials}</div>
                    <span className="font-label-md text-on-surface">{a.author}</span>
                  </div>
                  <button className="text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>bookmark_border</span>
                  </button>
                </div>
              </article>
            )
          )}
        </section>

        {/* Load More */}
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors font-label-md text-label-md flex items-center gap-2">
            Load more articles
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>expand_more</span>
          </button>
        </div>
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
