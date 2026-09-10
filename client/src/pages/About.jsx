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
              <p className="text-label-md text-outline">— Dr. Elara Vance, Clinical Director</p>
            </div>
            <div className="hidden sm:block w-24 h-24 rounded-full overflow-hidden shrink-0 border-4 border-surface-bright shadow-lg">
              <img
                className="w-full h-full object-cover"
                alt="Dr. Elara Vance"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVansrvAhmsvBpUvLnJpKXo4uv-nvYjrPYfuCZpwiZ5AwrmnoKpfLHXybQVb9LtlZD0ri3X8nZ7v0ZNegBMu3NwG1G9q_5PkDUG2vGLE7tRmk0wv1Q6mnSqr5Xq-l6YPdV2w2rYMoFJvTc4g5HlwnHLEfRZA8s6_n39LNZ8g92TgCExQBxVoqG-EsbTSfvGgRsHOoyWVQ18UWKKJp597u12wvGTJtfHSj9wvTplEOlZgFtMmMmO12XjQ"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Therapist Credibility & Team */}
      <section className="max-w-container-max mx-auto px-gutter mb-section-padding-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">The Hearts Behind the Space</h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Our team consists of licensed practitioners, researchers, and lived-experience advocates who believe therapy should feel like home.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Profile 1 */}
          <div className="group">
            <div className="relative mb-6">
              <div className="w-full aspect-square rounded-[60px] overflow-hidden bg-surface-container-low border border-outline-variant/30">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Dr. Julian Reed"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIkQpcglblEosZmncSVb51CPBMVDKe34uHCAygnK-5LeUR5GxhvSSiKdy3-UiNBtg4RLHknJ1_VBGEuD9Ethth8iix3x6bVsRCYH-4s__5N0cok7G1upmtQztTMBdX_GYBFFWntayLG_dHIiNPORQkZy0AYzDNA3Y5o5aeZJV18S2ud9ASxJNoHlJSkhMKeiV2ghilMWLI46a0P1jy31V4eZBygzexFO7F21M6yjiFfqlHoNA9Qbf3AQ"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary p-4 rounded-3xl shadow-xl text-white">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Dr. Julian Reed</h3>
            <p className="text-primary font-label-md text-label-md mb-3">Head of Cognitive Research</p>
            <p className="text-body-md text-on-surface-variant">Specializing in trauma-informed care and neurobiology with 15 years of clinical practice.</p>
          </div>

          {/* Profile 2 */}
          <div className="group">
            <div className="relative mb-6">
              <div className="w-full aspect-square rounded-[60px] overflow-hidden bg-surface-container-low border border-outline-variant/30">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Amara Singh, LCSW"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC13rLFQocWQnucXCTROWmAUBGEpjKG9DjWVmKYpcvR_0FVb3O29avE9p6iEmYGH5G4RhnUXZDiQgV_BRT-lrvhjunJB9sC_Ohn7tuWdUVV8tc1KJM4i5ceuNQ0Gzjz69gf93xBDhQx1XmEpSjqBg9pWeJj9F18fAo4qQ7OWV9LjiaBfjvT6hVhXLGHYSGFVfi8cpg2ws3Mad6vy__LoW83SEYIvFHiJ-lvVPKLPncwrU_AlfKqvRlPzQ"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary p-4 rounded-3xl shadow-xl text-white">
                <span className="material-symbols-outlined text-3xl">self_improvement</span>
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Amara Singh, LCSW</h3>
            <p className="text-primary font-label-md text-label-md mb-3">Director of Community Healing</p>
            <p className="text-body-md text-on-surface-variant">Expert in mindfulness-based stress reduction and group-focused healing modalities.</p>
          </div>

          {/* Profile 3 */}
          <div className="group">
            <div className="relative mb-6">
              <div className="w-full aspect-square rounded-[60px] overflow-hidden bg-surface-container-low border border-outline-variant/30">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Kai Sterling"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWZvW6qJC1iFwbLOkQJcqODjivDPwLGMMDYMkIgSOzVcgwE4x_zcglLH0EBbnJWxXZ3h9fZVCIVALt-yQ-eaoqivixoxALZtD6T8mA46rOWktK2_doNed1Mi40WkXLGVRLQnxqQDdcgkjkFDHqJ-HGZam4vrtwWg0wP-GL7oMJ_bOt002OIedhEU53dw2XrhkICxLaHDW9XDb7WQdJ_Hz29TyyMffsvjzFvwe88mORxpgFHgGUYOQ13Q"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-tertiary-container p-4 rounded-3xl shadow-xl text-white">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Kai Sterling</h3>
            <p className="text-primary font-label-md text-label-md mb-3">Lived Experience Advocate</p>
            <p className="text-body-md text-on-surface-variant">Bridging the gap between peer support and clinical excellence through authentic storytelling.</p>
          </div>
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
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-16 bg-surface-container rounded-2xl flex items-center justify-center px-4">
                    <span className="text-label-md text-outline font-bold">APA Partner</span>
                  </div>
                  <div className="h-16 bg-surface-container rounded-2xl flex items-center justify-center px-4">
                    <span className="text-label-md text-outline font-bold">NBCC Approved</span>
                  </div>
                  <div className="h-16 bg-surface-container rounded-2xl flex items-center justify-center px-4">
                    <span className="text-label-md text-outline font-bold">ISO 27001</span>
                  </div>
                  <div className="h-16 bg-surface-container rounded-2xl flex items-center justify-center px-4">
                    <span className="text-label-md text-outline font-bold">SOC2 Type II</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
