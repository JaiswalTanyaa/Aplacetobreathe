import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const facts = [
    "Just 10 minutes of mindful breathing can significantly reduce cortisol levels.",
    "Walking in nature is scientifically proven to lower rumination and anxiety.",
    "Journaling for 15 minutes a day can boost your immune system function.",
    "Social connection is one of the strongest predictors of long-term mental health.",
    "Taking deep 'belly breaths' signals your nervous system to calm down instantly."
  ];

  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [factOpacity, setFactOpacity] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setFactOpacity(0);
      setTimeout(() => {
        setCurrentFactIndex((prev) => (prev + 1) % facts.length);
        setFactOpacity(1);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative font-body-md text-body-md selection:bg-primary-container selection:text-on-primary-container">
      {/* Background Decorative Blobs */}
      <div className="organic-blob bg-primary-container w-[600px] h-[600px] -top-40 -left-40 pointer-events-none"></div>
      <div className="organic-blob bg-secondary-container w-[500px] h-[500px] top-[40%] -right-20 pointer-events-none"></div>
      <div className="organic-blob bg-tertiary-fixed w-[400px] h-[400px] bottom-0 left-20 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-gutter mb-section-padding-desktop pt-8 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface">
              Exhale the noise. <br />
              <span className="text-primary italic">Inhale the peace.</span>
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl">
              A supportive companion for your mental wellbeing. Find calm through guided sessions, professional support, and a community that truly understands.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/explore"
                className="bg-[#F4A261] text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 pulse-coral inline-block"
              >
                Start Your Journey
              </Link>
              <Link
                to="/how-it-works"
                className="bg-surface-container-low border border-outline-variant text-on-surface font-semibold px-8 py-4 rounded-full text-lg hover:bg-surface-container transition-all inline-block"
              >
                How it works
              </Link>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="rounded-3xl overflow-hidden aspect-square shadow-2xl bg-surface-variant">
              <img
                className="w-full h-full object-cover"
                alt="A diverse and inclusive digital illustration of people of various backgrounds sitting together in a soft-lit, airy garden. The art style is warm and organic, featuring soft brushstrokes, sage green plants, and gentle sunlight filtering through lavender-tinted clouds. The overall mood is deeply serene, safe, and welcoming, perfectly matching a calming mental health platform aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz4B33JiLPPgFRiBcsi6II8NGEpQq07JitDm9UeWpau61gv0Shu5-4m1b9ndLQBlz4pl_sHaQfRkfASJ2zu6zOqSnnWhdv3YSj_KU9eYVohSyO1oewnlScCjMwbJtP-vLTu9SK2MlMrSdj2i8sFkhfgAVJ7B_9IpBJuIP6AsYCvtkYY11_8pwyJvrR-9VfchTQ9q60w6W9mREdJI0Xequ-Z2bRWVN9tmyp6t6SPS48iiAbr5HsDWte7w"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs animate-bounce">
              <div className="bg-primary-container p-3 rounded-xl text-on-primary-container">
                <span className="material-symbols-outlined">favorite</span>
              </div>
              <div>
                <p className="font-bold text-on-surface text-sm">12k+ Strong</p>
                <p className="text-xs text-on-surface-variant">Active community members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Bento Grid */}
      <section className="max-w-container-max mx-auto px-gutter mb-section-padding-desktop">
        <div className="mb-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">How can we help today?</h2>
          <div className="h-1 w-20 bg-primary-container mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bento-card bg-surface-container-low p-8 rounded-3xl border border-surface-container-high flex flex-col justify-between h-64">
            <div className="bg-primary-container w-12 h-12 rounded-2xl flex items-center justify-center text-on-primary-container">
              <span className="material-symbols-outlined">explore</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Explore Activities</h3>
              <p className="text-sm text-on-surface-variant mb-4">Mindfulness, breathing, and art therapy.</p>
              <Link className="text-primary font-bold text-sm flex items-center gap-1 group" to="/explore">
                Go now <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bento-card bg-secondary-container p-8 rounded-3xl border border-outline-variant flex flex-col justify-between h-64 lg:mt-8">
            <div className="bg-secondary w-12 h-12 rounded-2xl flex items-center justify-center text-on-secondary">
              <span className="material-symbols-outlined">person_search</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Find a Therapist</h3>
              <p className="text-sm text-on-surface-variant mb-4">Connect with licensed specialists.</p>
              <Link className="text-secondary font-bold text-sm flex items-center gap-1 group" to="/therapists">
                View list <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bento-card bg-tertiary-fixed p-8 rounded-3xl border border-outline-variant flex flex-col justify-between h-64">
            <div className="bg-tertiary w-12 h-12 rounded-2xl flex items-center justify-center text-on-tertiary">
              <span className="material-symbols-outlined">event_available</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Book a Session</h3>
              <p className="text-sm text-on-surface-variant mb-4">Schedule your personal healing time.</p>
              <Link className="text-tertiary font-bold text-sm flex items-center gap-1 group" to="/therapists">
                Calendar <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bento-card bg-surface-container-highest p-8 rounded-3xl border border-outline-variant flex flex-col justify-between h-64 lg:mt-8">
            <div className="bg-on-surface-variant w-12 h-12 rounded-2xl flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined">groups</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Join Community</h3>
              <p className="text-sm text-on-surface-variant mb-4">Find support in safe spaces.</p>
              <Link className="text-on-surface-variant font-bold text-sm flex items-center gap-1 group" to="/community">
                Join us <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rotating Facts Section */}
      <section className="bg-primary-container/10 py-section-padding-desktop">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-primary-container/20 flex flex-col md:flex-row items-center gap-12">
            <div className="w-24 h-24 md:w-40 md:h-40 flex-shrink-0 bg-primary-container rounded-full flex items-center justify-center text-white overflow-hidden">
              <span className="material-symbols-outlined text-5xl md:text-7xl">lightbulb</span>
            </div>
            <div className="flex-grow text-center md:text-left">
              <p className="font-label-md text-label-md text-primary mb-2 uppercase tracking-widest">Did you know?</p>
              <div className="h-24 md:h-auto" id="fact-container">
                <h3
                  className="font-headline-md text-headline-md text-on-surface transition-opacity duration-500"
                  style={{ opacity: factOpacity }}
                >
                  {facts[currentFactIndex]}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section-padding-desktop overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter mb-12">
          <h2 className="font-headline-lg text-headline-lg text-on-surface text-center">Real Stories of Healing</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-container-max mx-auto px-gutter" id="testimonial-track">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-surface-container-high flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-tertiary mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-on-surface-variant italic mb-6">
                "This platform became my morning anchor. The breathing exercises are so intuitive and have genuinely changed how I handle stress at work."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-full"
                  alt="Sarah Jenkins"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8aA9xzOjSgRo12luNihsQQ_4Ek7LP2NsbuQkuHfEBTz4FddQAeuze8lROgCIbPzm5uSLIpHcgerV-D6t93Gp-uYBuPovlmTtlZL4qDbGIFsgPbGY9KfvsN_b5Gb9r6wRk0l6eua_9g6M_Bn-XQ_Rlldr8nt5fVsk4aoN_XRSbZODhBBxi9D4O4jivUkJ8_RJY3UAeVF3YBJfcMOixhlxXkLFzDVmiMTBnrEUaEoAC7skgoTtKKMaMWQ"
                />
              </div>
              <div>
                <p className="font-bold text-sm">Sarah Jenkins</p>
                <p className="text-xs text-on-surface-variant">Community Member since 2023</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-surface-container-high flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-tertiary mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-on-surface-variant italic mb-6">
                "Finding a therapist who truly matched my needs was always hard until I used the matching tool here. It felt safe and personal."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-full"
                  alt="David Chen"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7qDPyMuPe5hGOTMoKaflv-HJIfiVUXaCkzRi7zRpdzNbW4hS5RokWtQRgFmiJOz6GD_J7-iePTkVXWRdXKhpvGUhx0xSO_3ag_gM9dufcyFgnNoUurz9_oIExSYEiosmq1PG1SL8O39zsf-g9hKCFScEqyYQ3LaDVuSEf6xQr9fAdorx4FmXIPiyfWnaNOzure_WZYHhF0B_zp4CQDuBCXb66lthjK5bN9B3Bc9ssR7vKI8-blTrjOQ"
                />
              </div>
              <div>
                <p className="font-bold text-sm">David Chen</p>
                <p className="text-xs text-on-surface-variant">Workshop Participant</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-surface-container-high flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-tertiary mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-on-surface-variant italic mb-6">
                "The community forums are moderated with so much love. I finally found a group where I can be vulnerable without fear."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-tertiary-fixed overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-full"
                  alt="Alex Rivera"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfyJt7cc0jdglRxEzKrDlN9fK5iqIGNv_pKyH7HwtCx3b23ldW-8KOhD2vjMEZcnmP0IsJAq2Vuo8AWywKBTPLXrPvtInC7b_-shMXeOSwR0e3T4z4hhZp2KwK3nX5JC_VCimPyAOmrpw7heUBuxosSeCZTQwza4wpZ9YU-8X33K_c1SH6Fn8890Wm8R5Oo2ov2sW4t7RskFj2HLZcr4xP3rQ6XFZ8z_PHFVozVFWaIdZgEAezrDjQUg"
                />
              </div>
              <div>
                <p className="font-bold text-sm">Alex Rivera</p>
                <p className="text-xs text-on-surface-variant">Community Guide</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
