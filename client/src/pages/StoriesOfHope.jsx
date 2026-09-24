import React from 'react';
import { Link } from 'react-router-dom';

export default function StoriesOfHope() {
  return (
    <div className="bg-background text-on-background relative overflow-x-hidden min-h-screen">

      {/* Organic Blob Backgrounds */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-10%',
        width: '50vw', height: '50vw',
        backgroundColor: '#ecdcfd',
        borderRadius: '43% 57% 73% 27% / 46% 38% 62% 54%',
        opacity: 0.4, filter: 'blur(60px)', zIndex: -1,
        animation: 'float1 20s infinite alternate ease-in-out',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '-5%',
        width: '40vw', height: '40vw',
        backgroundColor: '#ffdcc4',
        borderRadius: '63% 37% 53% 47% / 36% 58% 42% 64%',
        opacity: 0.3, filter: 'blur(80px)', zIndex: -1,
        animation: 'float2 25s infinite alternate ease-in-out',
      }} />

      <style>{`
        @keyframes float1 {
          0%   { transform: translate(0,0) rotate(0deg); }
          100% { transform: translate(50px,30px) rotate(15deg); }
        }
        @keyframes float2 {
          0%   { transform: translate(0,0) rotate(0deg); }
          100% { transform: translate(-40px,-60px) rotate(-10deg); }
        }
        .ambient-shadow { box-shadow: 0 20px 20px 0 rgba(139,168,142,0.05); }
        .ambient-shadow-hover:hover {
          box-shadow: 0 25px 30px 0 rgba(139,168,142,0.1);
          transform: translateY(-2px);
        }
      `}</style>


      {/* Main Content */}
      <main className="pt-8 pb-10 md:pb-20 max-w-container-max mx-auto px-6 relative z-10">

        {/* Header */}
        <header className="text-center mb-16 max-w-3xl mx-auto pt-10">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-primary mb-6">
            Real Journeys of Healing
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Read stories from individuals who found their footing, rebuilt connections, and discovered a renewed sense of balance.
          </p>
        </header>

        {/* Filters */}
        <section className="mb-16 flex flex-wrap justify-center gap-4">
          <button className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-2 rounded-full ambient-shadow transition-colors">All Stories</button>
          <button className="bg-secondary-container/50 text-on-secondary-container hover:bg-secondary-container font-label-md text-label-md px-6 py-2 rounded-full transition-colors border border-surface-variant">Anxiety</button>
          <button className="bg-secondary-container/50 text-on-secondary-container hover:bg-secondary-container font-label-md text-label-md px-6 py-2 rounded-full transition-colors border border-surface-variant">Relationships</button>
          <button className="bg-secondary-container/50 text-on-secondary-container hover:bg-secondary-container font-label-md text-label-md px-6 py-2 rounded-full transition-colors border border-surface-variant">Academic Stress</button>
          <button className="bg-secondary-container/50 text-on-secondary-container hover:bg-secondary-container font-label-md text-label-md px-6 py-2 rounded-full transition-colors border border-surface-variant">Finding Balance</button>
        </section>

        {/* Bento Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">

          {/* Story Card 1 — 8 cols, large quote */}
          <article className="col-span-1 md:col-span-8 bg-surface-container-lowest rounded-xl p-8 ambient-shadow ambient-shadow-hover transition-all duration-300 border border-surface-variant flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-fixed rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1 mb-4" style={{ color: '#dd8f50' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              </span>
              <blockquote className="font-headline-lg text-headline-lg text-on-surface mb-8">
                "I didn't realize how much weight I was carrying until someone finally offered to help me set it down. The guided sessions gave me practical tools, but mostly, they gave me hope."
              </blockquote>
            </div>
            <div className="flex justify-between items-end relative z-10 mt-4">
              <div>
                <p className="font-headline-md text-headline-md text-primary">Sarah</p>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mt-1">Anxiety</p>
              </div>
              <span className="bg-secondary-container text-on-secondary-container font-label-md text-label-md px-4 py-1 rounded-full">Guided Support</span>
            </div>
          </article>

          {/* Story Card 2 — 4 cols */}
          <article className="col-span-1 md:col-span-4 bg-surface-container-lowest rounded-xl p-8 ambient-shadow ambient-shadow-hover transition-all duration-300 border border-surface-variant flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1 mb-4 text-primary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              </span>
              <blockquote className="font-body-lg text-body-lg text-on-surface mb-6">
                "Therapy wasn't just about talking; it was about untangling the knots in my relationship. We learned to communicate without defensiveness."
              </blockquote>
            </div>
            <div className="mt-4">
              <p className="font-headline-md text-headline-md text-primary mb-1">David</p>
              <div className="flex justify-between items-center">
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Relationships</p>
                <span className="bg-secondary-container text-on-secondary-container font-label-md text-label-md px-3 py-1 rounded-full text-xs">Therapy</span>
              </div>
            </div>
          </article>

          {/* Featured Image Card — 4 cols */}
          <div className="col-span-1 md:col-span-4 rounded-xl ambient-shadow overflow-hidden min-h-[300px]">
            <div className="bg-cover bg-center w-full h-full min-h-[300px]"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6O8HEbU-dFaeIW1iUTxTKnSF8LDo1ZNmwTCVSUKAk8026V_p3A-rbcdICJf35iW51npKUZ2XkV0eNmk7PZCkhcbVXmplSz_ifUN3hK-H4hKKTrmsQXOQRbicvEGjkrXl3VYItlGIn4-EZ16LBACMr1UEJAYwRgDZk3cfmmAjZS0Wx550_y1c7syolBlklz_urrFyqh-AnfolDr2zOUA18hKE6enX0oP4vufVGFRDqUrMzsa_p-28sAw')" }}
            />
          </div>

          {/* Story Card 3 — 8 cols, horizontal layout */}
          <article className="col-span-1 md:col-span-8 bg-surface-container-lowest rounded-xl p-8 ambient-shadow ambient-shadow-hover transition-all duration-300 border border-surface-variant flex flex-col sm:flex-row gap-8 items-center">
            <div className="flex-1">
              <span className="inline-flex items-center gap-1 mb-4" style={{ color: '#dd8f50' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              </span>
              <blockquote className="font-body-lg text-body-lg text-on-surface mb-6">
                "The pressure of finals was paralyzing. I used the workshops to break down my tasks and learned breathing exercises that actually worked during exams. I finally feel like I can breathe again."
              </blockquote>
              <div className="flex justify-between items-end mt-4">
                <div>
                  <p className="font-headline-md text-headline-md text-primary">Maya</p>
                  <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mt-1">Academic Stress</p>
                </div>
                <span className="bg-primary-fixed text-on-primary-fixed font-label-md text-label-md px-4 py-1 rounded-full">Workshops</span>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full mt-20 bg-surface-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-20 max-w-container-max mx-auto">
          <div>
            <Link className="font-headline-lg text-headline-lg font-bold text-primary hover:underline transition-all" to="/">A Place to Breathe</Link>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4">© 2024 A Place to Breathe. Your safe space for healing.</p>
          </div>
          <div className="flex flex-col gap-4">
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all duration-200" href="#">Mission</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all duration-200" href="#">Privacy Policy</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all duration-200" href="#">Terms of Service</a>
          </div>
          <div>
            <Link className="font-body-md text-body-md text-tertiary font-bold hover:underline transition-all duration-200" to="/crisis">Crisis Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
