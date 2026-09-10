import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, PhoneCall, MessageSquare, HeartHandshake, Wind, ArrowRight, LifeBuoy } from 'lucide-react';

export default function CrisisSupport() {
  const hotlines = [
    {
      name: '988 Suicide & Crisis Lifeline',
      desc: 'Free, confidential support for people in distress or crisis. Available 24 hours a day, 7 days a week.',
      contact: 'Call or Text 988',
      type: 'Phone / Text',
      urgent: true,
    },
    {
      name: 'Crisis Text Line',
      desc: 'Connect with a volunteer crisis counselor 24/7 for free emotional support.',
      contact: 'Text HOME to 741741',
      type: 'SMS Text',
      urgent: true,
    },
    {
      name: 'The Trevor Project (LGBTQ+ Youth)',
      desc: 'Dedicated crisis intervention and suicide prevention services for LGBTQ young people.',
      contact: 'Call 1-866-488-7386 or Text START to 678-678',
      type: 'Hotline & Text',
      urgent: false,
    },
    {
      name: 'Veterans Crisis Line',
      desc: 'Confidential support for veterans and their loved ones in times of acute need.',
      contact: 'Dial 988, then Press 1 or Text 838255',
      type: 'Specialized Hotline',
      urgent: false,
    },
    {
      name: 'SAMHSA National Helpline',
      desc: 'Treatment referral and information service for mental health and substance use challenges.',
      contact: '1-800-662-HELP (4357)',
      type: 'Referral Line',
      urgent: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Critical Alert Banner */}
      <div className="bg-coral/15 border-2 border-coral rounded-3xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-coral text-white flex items-center justify-center flex-shrink-0 shadow">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <div>
            <h1 className="font-headline text-2xl md:text-3xl font-bold text-coral-dark mb-1">
              You Are Not Alone. We Are Here.
            </h1>
            <p className="text-on-surface text-sm max-w-2xl leading-relaxed">
              If you are in immediate danger, experiencing thoughts of self-harm, or feeling unable to keep yourself safe, please reach out directly to the emergency lifelines below. They are free, confidential, and available every minute of every day.
            </p>
          </div>
        </div>

        <a
          href="tel:988"
          className="bg-coral hover:bg-coral-dark text-white font-extrabold px-8 py-4 rounded-full text-base shadow-lg transition-transform hover:scale-105 flex items-center gap-2 flex-shrink-0"
        >
          <PhoneCall className="w-5 h-5" />
          <span>Dial 988 Now</span>
        </a>
      </div>

      {/* Grounding First-Aid Box */}
      <div className="bg-white rounded-3xl p-8 mb-12 border border-surface-container-high shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-container/20 text-primary text-xs font-bold uppercase">
            <Wind className="w-3.5 h-3.5" /> Immediate Grounding
          </div>
          <h2 className="font-headline text-2xl font-bold text-on-surface">
            Feeling overwhelmed right now? Let's take a slow breath together.
          </h2>
          <p className="text-sm text-on-surface-variant max-w-xl">
            Focus solely on the rhythm of your breathing. Gently breathe in for 4 seconds, hold for 7, and exhale completely for 8. It resets your body's survival reflex.
          </p>
        </div>

        <Link
          to="/explore"
          className="px-8 py-4 rounded-full bg-primary text-white font-bold text-sm shadow hover:bg-opacity-90 transition-all inline-flex items-center gap-2 flex-shrink-0"
        >
          <span>Open Breathing Pacer</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Hotlines Directory */}
      <h2 className="font-headline text-2xl font-bold text-on-surface mb-6">
        Free 24/7 Helplines & Direct Support
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {hotlines.map((h, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-3xl border flex flex-col justify-between ${
              h.urgent
                ? 'bg-white border-coral/40 shadow-sm'
                : 'bg-surface-container-low border-surface-container-high'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                  {h.type}
                </span>
                {h.urgent && (
                  <span className="text-xs font-extrabold text-coral uppercase tracking-wider">
                    24/7 Immediate
                  </span>
                )}
              </div>
              <h3 className="font-headline font-bold text-lg text-on-surface mb-2">
                {h.name}
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-6">
                {h.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-surface-container-high flex items-center justify-between">
              <span className="text-sm font-bold text-on-surface">{h.contact}</span>
              <a
                href={h.contact.startsWith('Call 1') ? 'tel:18664887386' : 'tel:988'}
                className="px-4 py-2 rounded-xl bg-coral/20 hover:bg-coral text-coral-dark hover:text-white transition-colors text-xs font-bold inline-flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* International Helplines */}
      <div className="bg-surface-container p-8 rounded-3xl border border-outline-variant/30 text-center max-w-3xl mx-auto">
        <h3 className="font-headline font-bold text-xl text-on-surface mb-2">
          Outside the US & Canada?
        </h3>
        <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
          Support is available globally. In the UK, call <strong>111</strong> or Samaritans at <strong>116 123</strong>. In Australia, contact Lifeline at <strong>13 11 14</strong>. In India, contact Vandrevala Foundation at <strong>9999 666 555</strong> or NIMHANS at <strong>080-46110007</strong>.
        </p>
        <a
          href="https://findahelpline.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
        >
          <span>Find a crisis helpline in your country at FindAHelpline.com</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
