import React, { useState } from 'react';
import BreathingTool from '../components/BreathingTool';
import { Wind, Volume2, VolumeX, Sparkles, Sun, CloudRain, Waves, Flame } from 'lucide-react';

export default function Explore() {
  const [activeSound, setActiveSound] = useState(null);

  const soundscapes = [
    {
      id: 'rain',
      name: 'Forest Rain',
      desc: 'Gentle raindrops falling upon broad sage leaves',
      icon: CloudRain,
      color: 'bg-primary-container/30 text-primary',
    },
    {
      id: 'ocean',
      name: 'Pacific Waves',
      desc: 'Rhythmic, slow ocean tide washing along quiet pebbles',
      icon: Waves,
      color: 'bg-secondary-container/40 text-secondary',
    },
    {
      id: 'meadow',
      name: 'Golden Meadow',
      desc: 'Warm afternoon breeze with distant peaceful birdsong',
      icon: Sun,
      color: 'bg-tertiary-fixed/40 text-tertiary',
    },
    {
      id: 'hearth',
      name: 'Warm Hearth',
      desc: 'Subtle crackling fireplace wood in a winter cabin',
      icon: Flame,
      color: 'bg-coral/20 text-coral-dark',
    },
  ];

  const toggleSound = (id) => {
    setActiveSound(activeSound === id ? null : id);
  };

  const activities = [
    {
      title: '5-4-3-2-1 Sensory Grounding',
      duration: '3 Mins',
      category: 'Anxiety Relief',
      steps: [
        'Notice 5 things you can see around you right now.',
        'Acknowledge 4 things you can physically touch.',
        'Listen for 3 distinct sounds in your environment.',
        'Identify 2 scents you can smell.',
        'Notice 1 taste in your mouth, or speak 1 kind word to yourself.',
      ],
    },
    {
      title: 'Progressive Muscle Scan',
      duration: '5 Mins',
      category: 'Tension Release',
      steps: [
        'Sit comfortably and soften your shoulder blades.',
        'Clench your fists tight for 4 seconds, then let go completely.',
        'Gently tighten your stomach, pause, then breathe out softness.',
        'Drop your jaw and release tension behind your eyes and brow.',
      ],
    },
    {
      title: 'Loving-Kindness Reflection',
      duration: '4 Mins',
      category: 'Self-Compassion',
      steps: [
        'Place a warm hand over your heart center.',
        'Silently whisper: May I be peaceful. May I be safe.',
        'May I be patient with my healing process.',
        'Extend that same gentle warmth outward to those you cherish.',
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
          <Wind className="w-4 h-4" />
          Mindful Sanctuary Tools
        </div>
        <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-on-surface mb-3">
          Explore Healing Practices
        </h1>
        <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
          Ground your thoughts with guided breathwork rhythms, calming ambient frequencies, and somatic mindfulness tools.
        </p>
      </div>

      {/* Main Breathing Tool Container */}
      <div className="max-w-3xl mx-auto mb-16">
        <BreathingTool />
      </div>

      {/* Ambient Soundscapes Section */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-headline text-2xl font-bold text-on-surface">
              Ambient Soundscapes
            </h2>
            <p className="text-xs text-on-surface-variant">
              Immerse yourself in nature frequencies to soothe mental chatter
            </p>
          </div>
          {activeSound && (
            <span className="text-xs text-primary font-bold animate-pulse flex items-center gap-1.5">
              <Volume2 className="w-4 h-4" /> Playing ambient soundscape
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {soundscapes.map((s) => {
            const Icon = s.icon;
            const isPlaying = activeSound === s.id;
            return (
              <div
                key={s.id}
                onClick={() => toggleSound(s.id)}
                className={`cursor-pointer p-6 rounded-3xl border transition-all ${
                  isPlaying
                    ? 'bg-white border-primary shadow-md scale-[1.02]'
                    : 'bg-surface-container-low border-surface-container-high hover:border-outline-variant'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${s.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <button
                    className={`p-2 rounded-full ${
                      isPlaying ? 'bg-primary text-white' : 'bg-surface-container text-on-surface-variant'
                    }`}
                  >
                    {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  </button>
                </div>
                <h3 className="font-headline font-bold text-base text-on-surface mb-1">
                  {s.name}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Somatic Exercises Grid */}
      <div>
        <div className="mb-6">
          <h2 className="font-headline text-2xl font-bold text-on-surface">
            Grounding & Somatic Exercises
          </h2>
          <p className="text-xs text-on-surface-variant">
            Step-by-step techniques to steady yourself in moments of heightened stress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((act, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-surface-container-high shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-primary-container/20 text-primary font-bold">
                    {act.category}
                  </span>
                  <span className="text-on-surface-variant font-semibold">
                    {act.duration}
                  </span>
                </div>
                <h3 className="font-headline font-bold text-lg text-on-surface mb-4">
                  {act.title}
                </h3>
                <ol className="space-y-2.5 text-xs text-on-surface-variant list-decimal list-inside leading-relaxed">
                  {act.steps.map((st, i) => (
                    <li key={i} className="pl-1">
                      {st}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="pt-6 mt-6 border-t border-surface-container-high">
                <button className="w-full py-2.5 rounded-xl bg-surface-container hover:bg-primary hover:text-white transition-colors text-xs font-bold text-on-surface">
                  Practice Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
