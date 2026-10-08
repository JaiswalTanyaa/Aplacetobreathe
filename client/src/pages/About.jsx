import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="relative font-body-md text-body-md selection:bg-primary-container selection:text-on-primary-container">
      {/* Organic Background Elements */}
      <div className="organic-blob bg-primary w-[500px] h-[500px] -top-20 -left-20 opacity-30 pointer-events-none"></div>
      <div className="organic-blob bg-secondary w-[400px] h-[400px] top-[40%] -right-20 opacity-30 pointer-events-none" style={{ animationDelay: '-2s' }}></div>

      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-gutter mb-section-padding-desktop text-center pt-8 md:pt-16">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-primary font-label-md text-label-md uppercase tracking-widest block">
            Our Intent
          </span>
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary leading-tight">
            Healing isn’t a destination.<br />It’s a rhythm.
          </h1>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            We built A Place to Breathe to replace the clinical coldness of healthcare with the warmth of a trusted friend. This is your safe haven for emotional refuge, designed to help you exhale the weight of the world.
          </p>
        </div>
      </section>

      {/* Mission & Values Bento Grid */}
      <section className="max-w-container-max mx-auto px-gutter mb-section-padding-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Mission Card */}
          <div className="md:col-span-7 bg-surface-container-low p-8 md:p-12 rounded-[40px] shadow-sm flex flex-col justify-center border border-outline-variant/20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Our Mission</h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed mb-6">
                To democratize high-quality emotional support through a platform that prioritizes human connection and radical inclusivity over rigid protocols.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label-md text-label-md font-semibold">
                  Accessible
                </span>
                <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label-md text-label-md font-semibold">
                  Empathetic
                </span>
                <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label-md text-label-md font-semibold">
                  Scientific
                </span>
              </div>
            </div>
          </div>

          {/* Values Card - Privacy */}
          <div className="md:col-span-5 bg-primary-container text-on-primary-container p-8 rounded-[40px] shadow-sm flex flex-col items-center text-center justify-center">
            <span className="material-symbols-outlined text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
              shield_person
            </span>
            <h3 className="font-headline-md text-headline-md mb-2">Radical Privacy</h3>
            <p className="text-body-md opacity-90 leading-relaxed">
              Your vulnerability is sacred. We use end-to-end encryption and zero-knowledge storage. What happens here, stays here.
            </p>
          </div>

          {/* Values Card - Inclusivity */}
          <div className="md:col-span-5 bg-secondary-container text-on-secondary-container p-8 rounded-[40px] shadow-sm flex flex-col items-center text-center justify-center">
            <span className="material-symbols-outlined text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
              diversity_1
            </span>
            <h3 className="font-headline-md text-headline-md mb-2">Radical Inclusivity</h3>
            <p className="text-body-md opacity-90 leading-relaxed">
              Space for every identity, background, and lived experience. We are committed to culturally responsive care for all.
            </p>
          </div>

          {/* Interactive Quote Card */}
          <div className="md:col-span-7 bg-surface-container-highest p-8 md:p-12 rounded-[40px] shadow-sm border border-outline-variant/10 flex items-center gap-8 group">
            <div className="flex-1">
              <h4 className="font-headline-md text-headline-md text-primary italic mb-2">
                "True health begins with the permission to just be."
              </h4>
              <p className="text-label-md text-outline">— A Place to Breathe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section — coming soon */}
      <section className="max-w-container-max mx-auto px-gutter mb-section-padding-desktop">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">The Hearts Behind the Space</h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Our team consists of licensed practitioners, researchers, and lived-experience advocates who believe therapy should feel like home.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-5xl">groups</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Team profiles coming soon</h3>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
            We're putting together our full team directory. Real profiles will be added here shortly.
          </p>
        </div>
      </section>

      {/* Interactive Credentials Section */}
      <section className="bg-surface-container-low py-section-padding-desktop">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="font-headline-lg text-headline-lg text-primary">Trust is built on transparency.</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">Vetted Professionals</h4>
                    <p className="text-on-surface-variant text-sm">Every guide on our platform undergoes a multi-stage background check and clinical review.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">Evidence-Based Pathways</h4>
                    <p className="text-on-surface-variant text-sm">Our workshops are co-designed with neuroscientists to ensure effective, lasting emotional growth.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">HIPAA Compliant</h4>
                    <p className="text-on-surface-variant text-sm">We adhere to the highest standards of medical data security and patient confidentiality.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex-1 w-full max-w-md">
              <div className="bg-white p-8 rounded-[40px] shadow-lg border border-outline-variant/10 relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-container rounded-full flex items-center justify-center text-secondary rotate-12">
                  <span className="material-symbols-outlined text-4xl">workspace_premium</span>
                </div>
                <h5 className="font-headline-md text-headline-md text-on-surface-variant mb-6">Accreditations</h5>
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <span className="material-symbols-outlined text-4xl text-outline-variant mb-3">verified</span>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                    Accreditation details will be listed here once verified.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
