import React from 'react';
import { Lock, ShieldCheck, EyeOff, FileText, Trash2, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  const principles = [
    {
      icon: EyeOff,
      title: 'Zero Advertising & Zero Data Selling',
      desc: 'We never sell, rent, monetize, or broker your personal reflections, journal entries, or emotional states to third-party ad networks. Ever.',
    },
    {
      icon: Lock,
      title: 'End-to-End Journal Encryption',
      desc: 'Your private journal entries are encrypted before reaching our storage tier. Only you hold the decryption authority on your personal device.',
    },
    {
      icon: ShieldCheck,
      title: 'HIPAA-Aligned Therapist Communication',
      desc: 'All virtual consultation rooms and appointment notes utilize WebRTC encrypted streaming and comply with strict telehealth privacy mandates.',
    },
    {
      icon: Trash2,
      title: 'Autonomous Data Erasure',
      desc: 'You have complete sovereignty over your footprint. You can delete individual reflections, clear mindful history, or purge your sanctuary account anytime.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <section className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block text-primary font-bold text-xs uppercase tracking-widest bg-primary-container/20 px-4 py-1.5 rounded-full mb-3">
          Our Sacred Commitment
        </span>
        <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-on-surface mb-3">
          Your Privacy is Sacred
        </h1>
        <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
          In a world that constantly extracts personal data, A Place to Breathe is built as a sanctuary of radical safety and true zero-knowledge privacy.
        </p>
      </section>

      {/* Main Privacy Card */}
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-surface-container-high mb-12">
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-surface-container-high">
          <div className="w-14 h-14 rounded-2xl bg-primary-container/30 text-primary flex items-center justify-center">
            <Lock className="w-7 h-7" />
          </div>
          <div>
            <h2 className="font-headline font-bold text-xl text-on-surface">
              The Digital Sanctuary Privacy Covenant
            </h2>
            <p className="text-xs text-on-surface-variant">Last updated: September 2026 &bull; Verified HIPAA-Aligned Standard</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <Icon className="w-4 h-4" />
                  <span>{p.title}</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-xs text-on-surface-variant leading-relaxed">
          <strong className="text-on-surface font-semibold">Our Philosophy:</strong> We believe true mental vulnerability can only flourish when individuals know, with absolute certainty, that their thoughts will never be analyzed, surfaced in algorithms, or compromised.
        </div>
      </div>

      {/* Quick Action Links */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 text-xs font-bold">
        <Link
          to="/journal"
          className="px-6 py-3 rounded-full bg-primary text-white text-center shadow hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
        >
          <span>Open Secure Private Journal</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/about"
          className="px-6 py-3 rounded-full bg-surface-container text-on-surface text-center hover:bg-surface-container-high transition-all"
        >
          Learn More About Our Team
        </Link>
      </div>
    </div>
  );
}
