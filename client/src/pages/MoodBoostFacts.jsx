import React, { useState } from 'react';
import { Sun, Heart, Share2, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, Bookmark } from 'lucide-react';

export default function MoodBoostFacts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedFacts, setSavedFacts] = useState([]);
  const [notice, setNotice] = useState(null);

  const facts = [
    {
      id: 1,
      tag: 'FACT #104',
      title: 'Honey never spoils. Archaeologists have discovered edible 3,000-year-old honey in ancient Egyptian tombs.',
      detail: 'Its natural low moisture and high acidity mean bacteria cannot survive. Nature creates eternal sweetness.',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      tag: 'FACT #118',
      title: 'Trees communicate and share life-saving nutrients through an underground fungal network nicknamed the Wood Wide Web.',
      detail: 'When a sapling in a dark forest cannot reach sunlight, older neighboring trees feed it sugar through mycelium threads.',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      tag: 'FACT #142',
      title: 'Sea otters hold hands while sleeping in ocean kelp forests to keep from drifting away from each other.',
      detail: 'They also wrap themselves in giant kelp ribbons to anchor their resting bodies safely against the tide.',
      image: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 4,
      tag: 'FACT #155',
      title: 'Gentle smiling—even holding a pencil horizontally between teeth—signals the vagus nerve to release dopamine.',
      detail: 'Your facial musculature has a biological bidirectional loop to emotional processing centers in the brain.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 5,
      tag: 'FACT #170',
      title: 'Cows have best friends, and their heart rates measure significantly lower and calmer when grazing together.',
      detail: 'Mammalian nervous systems are hardwired for co-regulation and social safety.',
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&auto=format&fit=crop&q=80',
    },
  ];

  const current = facts[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % facts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + facts.length) % facts.length);
  };

  const handleSave = () => {
    if (!savedFacts.includes(current.id)) {
      setSavedFacts([...savedFacts, current.id]);
      setNotice('Added to your personal Calm Collection!');
      setTimeout(() => setNotice(null), 3000);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`"${current.title}" — Shared from A Place to Breathe`);
      setNotice('Fact copied to clipboard! Share the warmth with someone.');
      setTimeout(() => setNotice(null), 3000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <section className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block text-tertiary font-bold text-xs uppercase tracking-widest bg-tertiary-fixed/30 px-4 py-1.5 rounded-full mb-3">
          Daily Uplift
        </span>
        <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-on-surface mb-3">
          Daily Dose of Light
        </h1>
        <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
          Take a moment to pause and connect with something gentle and true. Cycle through these uplifting realities curated to brighten your day.
        </p>
      </section>

      {notice && (
        <div className="max-w-md mx-auto mb-6 p-3.5 rounded-2xl bg-primary-container/25 text-on-primary-container text-xs flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
          <span>{notice}</span>
        </div>
      )}

      {/* Main Swipeable / Interactive Card */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-lg border border-surface-container-high relative overflow-hidden flex flex-col justify-between min-h-[500px]">
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary-container/20 px-3 py-1 rounded-full">
                {current.tag}
              </span>
              <span className="text-xs text-on-surface-variant font-semibold">
                {currentIndex + 1} of {facts.length}
              </span>
            </div>

            <div className="rounded-3xl overflow-hidden h-48 mb-6 shadow-inner">
              <img
                src={current.image}
                alt="Nature insight"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="font-headline font-bold text-xl md:text-2xl text-on-surface leading-snug mb-3">
              {current.title}
            </h2>

            <p className="text-xs text-on-surface-variant leading-relaxed">
              {current.detail}
            </p>
          </div>

          <div className="pt-6 border-t border-surface-container-high flex items-center justify-between mt-6">
            <button
              onClick={handleShare}
              className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Light</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-outline-variant/60 flex items-center justify-center hover:bg-surface-container transition-colors"
                title="Previous fact"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleSave}
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all shadow ${
                  savedFacts.includes(current.id)
                    ? 'bg-coral text-white scale-105'
                    : 'bg-primary text-white hover:scale-105'
                }`}
                title="Save fact"
              >
                <Heart className="w-5 h-5 fill-current" />
              </button>

              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full border border-outline-variant/60 flex items-center justify-center hover:bg-surface-container transition-colors"
                title="Next fact"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Saved Facts Collection Count */}
      {savedFacts.length > 0 && (
        <div className="max-w-xl mx-auto bg-surface-container-low p-6 rounded-3xl border border-outline-variant/30 text-center">
          <Bookmark className="w-5 h-5 text-primary mx-auto mb-1" />
          <p className="font-bold text-sm text-on-surface">You have {savedFacts.length} saved moments of light</p>
          <p className="text-xs text-on-surface-variant mt-1">Revisit them whenever you need a reminder of goodness in the world.</p>
        </div>
      )}
    </div>
  );
}
