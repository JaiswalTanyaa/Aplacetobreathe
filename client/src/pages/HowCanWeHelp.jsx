import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle2, Heart, Search, MessageSquare, ArrowRight } from 'lucide-react';

export default function HowCanWeHelp() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <section className="text-center mb-12">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary-container/20 flex items-center justify-center text-primary shadow-sm">
          <Heart className="w-14 h-14" />
        </div>

        <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-primary mb-3">
          Didn't find what you were looking for?
        </h1>
        <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed">
          We are here to listen. Tell us what is on your mind, and we will do our best to guide you toward the space, specialist, or resource you need.
        </p>
      </section>

      {/* Form or Success State */}
      <div className="bg-white rounded-[36px] p-8 md:p-12 shadow-sm border border-surface-container-high mb-12">
        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-primary-container/30 text-primary rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="font-headline font-bold text-2xl text-primary">
              Thank you for sharing with us
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed">
              Your message has been received gently. Our sanctuary care team reads every single note with deep empathy.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setMessage('');
                setEmail('');
              }}
              className="text-xs font-bold text-primary underline hover:opacity-80 pt-2"
            >
              Send another note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
            <div>
              <label className="block font-headline font-bold text-base text-on-surface mb-2">
                What can we help you find?
              </label>
              <textarea
                rows="5"
                required
                placeholder="Share your thoughts, questions, or what specific wellness resource you were hoping to find..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 rounded-2xl border border-outline-variant/60 focus:outline-none focus:border-primary bg-[#fbf9f5] resize-none"
              />
              <p className="text-[11px] text-on-surface-variant flex items-center gap-1.5 mt-2">
                <Heart className="w-3.5 h-3.5 text-primary" />
                <span>Our sanctuary team reads every submission with care and respect.</span>
              </p>
            </div>

            <div>
              <label className="block font-headline font-bold text-base text-on-surface mb-2">
                Email address <span className="text-on-surface-variant text-xs font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                placeholder="If you would like a personal response, let us know where to reach you."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-outline-variant/60 focus:outline-none focus:border-primary bg-[#fbf9f5]"
              />
              <p className="text-[11px] text-on-surface-variant mt-1.5 opacity-75">
                We promise to keep your contact strictly confidential and never send spam.
              </p>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-primary text-white font-bold shadow hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>

      {/* Helpful Alternatives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/explore"
          className="p-6 rounded-3xl bg-secondary-container/30 border border-secondary-container/50 hover:shadow-md transition-all group flex flex-col justify-between"
        >
          <div>
            <Search className="w-6 h-6 text-secondary mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-headline font-bold text-base text-on-surface mb-1">
              Explore Activities & Breathwork
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Find immediate grounding with the 4-7-8 breathing pacer, rain soundscapes, or sensory muscle relaxation.
            </p>
          </div>
          <span className="text-secondary font-bold text-xs inline-flex items-center gap-1 mt-4">
            Try breathwork &rarr;
          </span>
        </Link>

        <Link
          to="/guided-support"
          className="p-6 rounded-3xl bg-tertiary-fixed/30 border border-tertiary-fixed/50 hover:shadow-md transition-all group flex flex-col justify-between"
        >
          <div>
            <MessageSquare className="w-6 h-6 text-tertiary mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-headline font-bold text-base text-on-surface mb-1">
              Speak with Sanctuary Guide
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Our gentle interactive digital guide is active 24/7 to listen and guide you through calming exercises.
            </p>
          </div>
          <span className="text-tertiary font-bold text-xs inline-flex items-center gap-1 mt-4">
            Open Chat &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}
