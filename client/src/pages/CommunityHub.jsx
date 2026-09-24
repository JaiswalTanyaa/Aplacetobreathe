import React from 'react';
import { Link } from 'react-router-dom';

export default function CommunityHub() {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">

      <style>{`
        .organic-blob {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          filter: blur(40px);
          z-index: -1;
          opacity: 0.15;
          position: absolute;
        }
        .soft-card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(139,168,142,0.1);
        }
        .crisis-pulse { animation: pulse-coral 3s infinite; }
        @keyframes pulse-coral {
          0%   { box-shadow: 0 0 0 0 rgba(244,162,97,0.4); }
          70%  { box-shadow: 0 0 0 10px rgba(244,162,97,0); }
          100% { box-shadow: 0 0 0 0 rgba(244,162,97,0); }
        }
      `}</style>


      <main className="pt-4 relative min-h-screen">
        {/* Background Blobs */}
        <div className="organic-blob bg-primary-container" style={{ width: '24rem', height: '24rem', top: '5rem', left: '-5rem' }} />
        <div className="organic-blob bg-secondary-container" style={{ width: '30rem', height: '30rem', top: '40%', right: '-5rem' }} />

        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="font-headline-xl text-headline-xl text-primary">Your Safe Space for Connection</h1>
            <p className="text-body-lg text-on-surface-variant max-w-xl">
              Healing is rarely a solitary journey. Join our moderated WhatsApp groups to find peers who truly understand what you're going through, in a space built on privacy and kindness.
            </p>
            <div className="pt-4">
              <button
                className="text-white px-10 py-4 rounded-full font-headline-md shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                style={{ background: '#F4A261' }}
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                Join our WhatsApp Community
              </button>
              <p className="mt-4 text-sm text-outline flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
                End-to-end encrypted and peer-moderated
              </p>
            </div>
          </div>
          <div className="flex-1 relative">
            <img
              className="w-full h-auto rounded-[2rem] shadow-sm"
              alt="Diverse people sitting in a supportive circle"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDbQkHOoY0v5g957njBBM__L0d90kPpFvh2CegrdJs76mvKphn3M8jveGN_RRLbzYzdpZdclv6kyKTBUl6b-hB-NDUj72li6taj34LAs0ppwIMIv6db43Jb6D91ZU5WyhRUzDOerkfxLeG-LQXBBO2zBuLJTPJAYeqBu7P0hrMZiyO9KvXbF1r9SSevsJDBJKz1ddfnDl6DTler0ukLXadoeSXoH8fnIkhkXWshVvX6BHYhE0hYA7oyQ"
            />
          </div>
        </section>

        {/* Community Groups Bento */}
        <section className="max-w-container-max mx-auto px-6 py-20">
          <div className="mb-12 text-center">
            <h2 className="font-headline-lg text-headline-lg text-primary">Find Your Focus Group</h2>
            <p className="text-body-md text-on-surface-variant">We host several specialized circles to ensure you're connecting with those on a similar path.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Group 1 */}
            <div className="soft-card p-8 rounded-[2rem] flex flex-col gap-4 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">spa</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary">The Calm Circle</h3>
              <p className="text-body-md text-on-surface-variant flex-grow">A gentle space focused on daily mindfulness, anxiety management, and sharing peaceful moments.</p>
              <span className="text-label-md font-label-md text-outline">152 Members Active</span>
            </div>
            {/* Group 2 */}
            <div className="soft-card p-8 rounded-[2rem] flex flex-col gap-4 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-secondary-container/30 rounded-full flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">night_shelter</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary">The Resilience Room</h3>
              <p className="text-body-md text-on-surface-variant flex-grow">Deep support for those navigating grief, trauma recovery, or major life transitions with focused peer listeners.</p>
              <span className="text-label-md font-label-md text-outline">89 Members Active</span>
            </div>
            {/* Group 3 */}
            <div className="soft-card p-8 rounded-[2rem] flex flex-col gap-4 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-tertiary-container/20 rounded-full flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">wb_sunny</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary">Workshop Alumni</h3>
              <p className="text-body-md text-on-surface-variant flex-grow">For those who have completed our core workshops and want to maintain long-term progress together.</p>
              <span className="text-label-md font-label-md text-outline">314 Members Active</span>
            </div>
          </div>
        </section>

        {/* Privacy & Safety */}
        <section className="bg-surface-container-low py-20">
          <div className="max-w-container-max mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <img
                className="w-full rounded-[2rem] shadow-md"
                alt="Digital privacy padlock art"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGRpCoPagTffdWTyxmqwpnuxG-PJ-Zv01gji56PqaCM0dPpnKhrCRujNl-VmAa9UVXTwKTZj396wqhQF-xZFh6cMP7DYalQA8lKIvOWbRxwXKT1ocPN1KY5SYs553NBgosrkzLxbP5fHwYcADHePhO7eN7KpUlbzHDyeUmsrqj89ZuSNAXOMWXjG05_ALFcS6wT5ZRPPkm8Hvzsmd6Y-vDLrFDqasvPW_y-uclLOyg-YPWcafupXOchw"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-primary">Privacy is Our Priority</h2>
              <p className="text-body-lg text-on-surface-variant">
                We understand the vulnerability of sharing. Our WhatsApp community is managed through a "Community" structure, which means your phone number is hidden from most members, visible only to admins unless you interact directly.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="text-body-md">Vetted entry for all new members to prevent spam.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="text-body-md">Strict no-screenshot policy to protect shared stories.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="text-body-md">24/7 volunteer moderators who ensure the space remains kind.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="max-w-container-max mx-auto px-6 py-20">
          <div className="soft-card p-12 rounded-[3rem] shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-primary/10">
              <span className="material-symbols-outlined" style={{ fontSize: '120px' }}>volunteer_activism</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Our Community Heartbeat</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { n: '1', title: 'Listen First', desc: 'Create space for others to be heard. We practice active, non-judgmental listening above all else.' },
                { n: '2', title: 'Speak Your Truth', desc: 'Use "I" statements. Share your own experiences rather than giving unsolicited advice.' },
                { n: '3', title: 'Protect the Circle', desc: 'Everything shared in the community stays in the community. Maintain absolute confidentiality.' },
                { n: '4', title: 'Kindness is Mandatory', desc: 'We are all at different stages of healing. Meet every message with empathy and patience.' },
              ].map((item) => (
                <div key={item.n} className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">{item.n}</span>
                    <h4 className="font-headline-md text-headline-md text-primary">{item.title}</h4>
                  </div>
                  <p className="text-body-md text-on-surface-variant ml-12">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-container-max mx-auto px-6 py-20 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="font-headline-xl text-headline-xl text-primary">Ready to breathe together?</h2>
            <p className="text-body-lg text-on-surface-variant">Your tribe is waiting. Tap the button below to request an invitation to our main community hub.</p>
            <button
              className="text-white px-12 py-5 rounded-full font-headline-md shadow-xl hover:scale-105 active:scale-95 transition-all"
              style={{ background: '#F4A261' }}
            >
              Request Community Access
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mt-20 bg-surface-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-20 max-w-container-max mx-auto">
          <div className="space-y-4">
            <h3 className="font-headline-lg text-headline-lg font-bold text-primary">A Place to Breathe</h3>
            <p className="text-on-surface-variant font-body-md max-w-xs">A safe, digital sanctuary for emotional refuge and collective healing. Take a breath, you are not alone.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-headline-md text-headline-md text-primary">Navigation</h4>
            <Link className="text-on-surface-variant hover:text-primary transition-all font-body-md" to="/">Mission</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-all font-body-md" to="/workshops">Workshops</Link>
            <Link className="text-primary font-bold transition-all font-body-md" to="/community-hub">Community</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-all font-body-md" to="/crisis">Crisis Support</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-headline-md text-headline-md text-primary">Legal</h4>
            <Link className="text-on-surface-variant hover:text-primary transition-all font-body-md" to="/privacy">Privacy Policy</Link>
            <a className="text-on-surface-variant hover:text-primary transition-all font-body-md" href="#">Terms of Service</a>
            <div className="pt-4">
              <p className="text-on-surface-variant text-sm">© 2024 A Place to Breathe. Your safe space for healing.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
