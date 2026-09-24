import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Serene Sanctuary — Design spec page (DESIGN.md only, no code.html)
 * Built strictly from the design tokens and guidelines in serene_sanctuary/DESIGN.md
 */
export default function SereneSanctuary() {
  return (
    <div className="bg-background text-on-background min-h-screen overflow-x-hidden">

      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes floatReverse {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(20px) rotate(-5deg); }
        }
        .blob-float  { animation: float 12s ease-in-out infinite; }
        .blob-float2 { animation: floatReverse 16s ease-in-out infinite; }
        .ambient-card {
          box-shadow: 0 20px 20px 0 rgba(139,168,142,0.05);
          border: 1px solid #e4e2de;
        }
        .ambient-card:hover {
          box-shadow: 0 30px 40px 0 rgba(139,168,142,0.1);
          transform: translateY(-4px);
          transition: all 0.3s ease;
        }
        .crisis-pulse {
          animation: pulse-coral 3s infinite;
        }
        @keyframes pulse-coral {
          0%   { box-shadow: 0 0 0 0 rgba(244,162,97,0.4); }
          70%  { box-shadow: 0 0 0 10px rgba(244,162,97,0); }
          100% { box-shadow: 0 0 0 0 rgba(244,162,97,0); }
        }
      `}</style>

      {/* Organic blob backgrounds */}
      <div className="blob-float fixed pointer-events-none -z-10"
        style={{ top: '-80px', left: '-80px', width: '400px', height: '400px', background: '#cceace', borderRadius: '50% 40% 60% 40%', filter: 'blur(80px)', opacity: 0.4 }} />
      <div className="blob-float2 fixed pointer-events-none -z-10"
        style={{ bottom: '-120px', right: '-80px', width: '500px', height: '500px', background: '#ecdcfd', borderRadius: '40% 60% 40% 50%', filter: 'blur(80px)', opacity: 0.35 }} />
      <div className="blob-float fixed pointer-events-none -z-10"
        style={{ top: '40%', left: '60%', width: '300px', height: '300px', background: '#ffdcc4', borderRadius: '60% 40% 30% 70%', filter: 'blur(60px)', opacity: 0.25 }} />


      <main className="pt-8 max-w-container-max mx-auto px-6">

        {/* Hero */}
        <section className="py-20 text-center relative">
          <div className="inline-flex items-center gap-2 bg-primary-container/20 text-primary rounded-full px-5 py-2 mb-8 font-label-md text-label-md">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
            Your Digital Sanctuary
          </div>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 max-w-3xl mx-auto">
            A space designed to help you<br />breathe again.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            Every element of this sanctuary is intentionally crafted — soft colors, generous whitespace, and gentle interactions — so that the moment you arrive, you feel held, not hurried.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md hover:opacity-90 transition-all shadow-[0_8px_16px_rgba(139,168,142,0.2)] hover:shadow-[0_12px_24px_rgba(139,168,142,0.3)] active:scale-95">
              Enter the Sanctuary
            </Link>
            <Link to="/explore" className="border border-outline-variant text-on-surface px-8 py-4 rounded-full font-label-md hover:bg-surface-container transition-colors">
              Explore Resources
            </Link>
          </div>
        </section>

        {/* Design Pillars — Bento Grid */}
        <section className="py-20">
          <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-12">The Sanctuary is Built On</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Soft Minimalism */}
            <div className="ambient-card bg-surface-container-lowest p-8 rounded-xl transition-all">
              <div className="w-12 h-12 bg-primary-container/30 rounded-full flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined">filter_vintage</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Soft Minimalism</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Generous whitespace and gentle forms give every word room to breathe. No clutter, no noise — just clarity.
              </p>
            </div>

            {/* Organic Tactility */}
            <div className="ambient-card bg-surface-container-lowest p-8 rounded-xl transition-all">
              <div className="w-12 h-12 bg-secondary-container/50 rounded-full flex items-center justify-center mb-6 text-secondary">
                <span className="material-symbols-outlined">grain</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Organic Tactility</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Fluid blobs and asymmetric shapes break the rigid grid, humanizing the digital experience with natural forms.
              </p>
            </div>

            {/* Ambient Depth */}
            <div className="ambient-card bg-surface-container-lowest p-8 rounded-xl transition-all">
              <div className="w-12 h-12 bg-tertiary-fixed/70 rounded-full flex items-center justify-center mb-6 text-tertiary">
                <span className="material-symbols-outlined">layers</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Ambient Depth</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Tonal layering and low-diffusion shadows create gentle presence — nothing floats aggressively above the page.
              </p>
            </div>
          </div>
        </section>

        {/* Color Palette Showcase */}
        <section className="py-20">
          <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-4">The Palette of Calm</h2>
          <p className="font-body-md text-body-md text-on-surface-variant text-center mb-12 max-w-xl mx-auto">
            Each color is drawn from natural, soothing elements to establish an atmosphere of groundedness.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Soft Sage', subtitle: 'Primary Growth', color: '#4a654e', text: '#fff' },
              { name: 'Muted Lavender', subtitle: 'Secondary Peace', color: '#ecdcfd', text: '#6b5f7b' },
              { name: 'Warm Cream', subtitle: 'Surface Foundation', color: '#fbf9f5', text: '#1b1c1a', border: true },
              { name: 'Soft Coral', subtitle: 'Accent CTA', color: '#F4A261', text: '#fff' },
            ].map((swatch) => (
              <div key={swatch.name} className={`ambient-card rounded-xl overflow-hidden transition-all ${swatch.border ? 'border border-outline-variant' : ''}`}>
                <div className="h-24 w-full" style={{ background: swatch.color }} />
                <div className="p-4 bg-surface-container-lowest">
                  <p className="font-headline-md text-headline-md text-on-surface" style={{ fontSize: '16px' }}>{swatch.name}</p>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">{swatch.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Showcase */}
        <section className="py-20 border-t border-outline-variant/20">
          <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-12">The Voice of the Sanctuary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="ambient-card bg-surface-container-lowest p-10 rounded-xl">
              <p className="font-label-md text-label-md text-outline uppercase tracking-wider mb-4">Nunito Sans — Headings</p>
              <h3 className="font-headline-xl text-on-surface mb-4" style={{ fontSize: '36px', lineHeight: '1.2', fontWeight: 700 }}>
                Healing is not linear.
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Rounded terminals make titles feel soft rather than authoritative. An approachable voice for a space built on trust.</p>
            </div>
            <div className="ambient-card bg-surface-container-lowest p-10 rounded-xl">
              <p className="font-label-md text-label-md text-outline uppercase tracking-wider mb-4">Work Sans — Body</p>
              <p className="font-body-lg text-body-lg text-on-surface" style={{ lineHeight: '1.6' }}>
                "Line heights are intentionally generous — 1.6x for body text — to prevent the wall-of-text effect, which can be overwhelming for users in distress."
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-4">Neutral and stable, ensuring therapeutic content is easy to absorb.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center">
          <div className="bg-primary-container/10 rounded-[2rem] p-12 max-w-2xl mx-auto border border-primary-container/20">
            <span className="material-symbols-outlined text-primary text-5xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>self_improvement</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">You deserve to feel at peace.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Begin your journey in this sanctuary. Every tool here was built with your wellbeing in mind.
            </p>
            <Link to="/" className="inline-block bg-primary text-on-primary px-10 py-4 rounded-full font-label-md hover:opacity-90 active:scale-95 transition-all shadow-md">
              Begin Your Journey
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container mt-20">
        <div className="max-w-container-max mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-headline-lg text-headline-lg font-bold text-primary mb-4">A Place to Breathe</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">© 2024 A Place to Breathe. Your safe space for healing.</p>
          </div>
          <div className="flex gap-12">
            <div className="space-y-3">
              <Link className="block font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/explore">Explore</Link>
              <Link className="block font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/workshops">Workshops</Link>
              <Link className="block font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/community">Community</Link>
            </div>
            <div className="space-y-3">
              <Link className="block font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link>
              <Link className="block font-body-md text-crisis-link font-bold text-primary" to="/crisis">Crisis Support</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
