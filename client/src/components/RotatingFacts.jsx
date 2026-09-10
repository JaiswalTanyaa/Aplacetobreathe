import React, { useState, useEffect } from 'react';
import { Lightbulb, ChevronRight, ChevronLeft } from 'lucide-react';

const FACTS = [
  'Just 10 minutes of mindful breathing can significantly reduce cortisol stress hormone levels.',
  'Walking in green spaces or looking at natural foliage is scientifically proven to lower anxiety.',
  'Expressive journaling for 15 minutes a day strengthens emotional regulation and improves sleep.',
  'Social connection and sharing vulnerability is one of the strongest predictors of lifelong mental resilience.',
  'Taking extended exhales stimulates the vagus nerve, signaling the body to transition out of fight-or-flight.',
];

export default function RotatingFacts() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % FACTS.length);
        setFade(true);
      }, 300);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % FACTS.length);
      setFade(true);
    }, 200);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + FACTS.length) % FACTS.length);
      setFade(true);
    }, 200);
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-primary-container/30 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative">
      <div className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0 bg-primary-container/30 text-primary rounded-full flex items-center justify-center">
        <Lightbulb className="w-10 h-10 md:w-14 md:h-14" />
      </div>

      <div className="flex-grow text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">
            Science & Wellbeing Insight
          </span>
          <span className="text-xs text-on-surface-variant">
            ({index + 1}/{FACTS.length})
          </span>
        </div>

        <div className="min-h-[64px] flex items-center">
          <p
            className={`font-headline text-xl md:text-2xl text-on-surface transition-opacity duration-300 ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
          >
            "{FACTS[index]}"
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full border border-outline-variant/50 hover:bg-surface-container text-on-surface-variant transition-colors"
          title="Previous fact"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full border border-outline-variant/50 hover:bg-surface-container text-on-surface-variant transition-colors"
          title="Next fact"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
