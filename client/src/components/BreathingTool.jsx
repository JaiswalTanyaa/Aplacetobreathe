import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Sparkles, CheckCircle2 } from 'lucide-react';

const TECHNIQUES = {
  '478': {
    name: '4-7-8 Relaxing Breath',
    desc: 'Calms the nervous system and eases acute anxiety or sleep difficulties.',
    phases: [
      { name: 'Inhale deeply through nose', duration: 4, scale: 'scale-125', color: 'bg-primary-container' },
      { name: 'Hold your breath gently', duration: 7, scale: 'scale-125', color: 'bg-secondary-container' },
      { name: 'Exhale slowly through mouth', duration: 8, scale: 'scale-90', color: 'bg-tertiary-fixed' },
    ],
  },
  'box': {
    name: 'Box Breathing (4-4-4-4)',
    desc: 'Used by Navy SEALs to regain focus and stabilize stress response.',
    phases: [
      { name: 'Inhale', duration: 4, scale: 'scale-125', color: 'bg-primary-container' },
      { name: 'Hold', duration: 4, scale: 'scale-125', color: 'bg-secondary-container' },
      { name: 'Exhale', duration: 4, scale: 'scale-90', color: 'bg-tertiary-fixed' },
      { name: 'Hold empty', duration: 4, scale: 'scale-90', color: 'bg-surface-container' },
    ],
  },
};

export default function BreathingTool() {
  const [techniqueKey, setTechniqueKey] = useState('478');
  const [isActive, setIsActive] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(4);
  const [completedCycles, setCompletedCycles] = useState(0);

  const currentTechnique = TECHNIQUES[techniqueKey];
  const currentPhase = currentTechnique.phases[phaseIndex];

  useEffect(() => {
    let timer = null;
    if (isActive) {
      timer = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            // Next phase
            const nextIndex = (phaseIndex + 1) % currentTechnique.phases.length;
            if (nextIndex === 0) {
              setCompletedCycles((c) => {
                const updated = c + 1;
                // update local storage mindful count
                const totalMins = Number(localStorage.getItem('breathe_mindful_mins') || 0) + 1;
                localStorage.setItem('breathe_mindful_mins', totalMins.toString());
                return updated;
              });
            }
            setPhaseIndex(nextIndex);
            return currentTechnique.phases[nextIndex].duration;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive, phaseIndex, techniqueKey, currentTechnique]);

  const toggleActive = () => {
    if (!isActive) {
      setPhaseIndex(0);
      setSecondsRemaining(currentTechnique.phases[0].duration);
    }
    setIsActive(!isActive);
  };

  const resetPacer = () => {
    setIsActive(false);
    setPhaseIndex(0);
    setSecondsRemaining(currentTechnique.phases[0].duration);
  };

  const handleTechniqueChange = (key) => {
    setTechniqueKey(key);
    setIsActive(false);
    setPhaseIndex(0);
    setSecondsRemaining(TECHNIQUES[key].phases[0].duration);
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-outline-variant/30 text-center relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
          isActive ? 'opacity-25' : 'opacity-5'
        } bg-radial from-primary via-transparent to-transparent`}
      />

      {/* Technique Switcher */}
      <div className="flex justify-center gap-2 mb-6">
        {Object.entries(TECHNIQUES).map(([k, t]) => (
          <button
            key={k}
            onClick={() => handleTechniqueChange(k)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              techniqueKey === k
                ? 'bg-primary text-white shadow-sm'
                : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">
        {currentTechnique.name}
      </h3>
      <p className="text-on-surface-variant text-sm max-w-md mx-auto mb-10">
        {currentTechnique.desc}
      </p>

      {/* Breathing Bubble */}
      <div className="relative w-64 h-64 mx-auto flex items-center justify-center my-6">
        {/* Animated aura ring */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-1000 ${
            isActive ? currentPhase.color : 'bg-primary-container/30'
          } ${isActive ? currentPhase.scale : 'scale-100'} opacity-40 blur-xl`}
        />

        {/* Outer Ring */}
        <div
          className={`w-52 h-52 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center transition-transform duration-1000 ${
            isActive ? currentPhase.scale : 'scale-100'
          }`}
        >
          {/* Main Breathing Core */}
          <div
            className={`w-40 h-40 rounded-full shadow-inner flex flex-col items-center justify-center transition-colors duration-1000 ${
              isActive ? currentPhase.color : 'bg-primary/20'
            }`}
          >
            <span className="font-headline text-4xl font-extrabold text-on-surface">
              {isActive ? secondsRemaining : 'Start'}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant mt-1">
              {isActive ? currentPhase.name.split(' ')[0] : 'Ready'}
            </span>
          </div>
        </div>
      </div>

      {/* Instruction text */}
      <div className="h-10 my-4 flex items-center justify-center">
        <p className="font-headline font-semibold text-lg text-primary transition-all duration-500">
          {isActive ? currentPhase.name : 'Tap Start to begin calming your nervous system'}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={toggleActive}
          className={`px-8 py-3.5 rounded-full font-bold text-base shadow-md flex items-center gap-2 transition-all hover:scale-105 ${
            isActive
              ? 'bg-surface-container text-on-surface border border-outline-variant'
              : 'bg-coral text-white pulse-coral'
          }`}
        >
          {isActive ? (
            <>
              <Pause className="w-5 h-5" /> Pause
            </>
          ) : (
            <>
              <Play className="w-5 h-5 fill-current" /> Begin Breathing
            </>
          )}
        </button>
        <button
          onClick={resetPacer}
          className="p-3.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors"
          title="Reset"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* Completed count */}
      <div className="mt-8 flex items-center justify-center gap-2 text-xs text-on-surface-variant font-medium">
        <CheckCircle2 className="w-4 h-4 text-primary" />
        <span>Completed Cycles: {completedCycles}</span>
      </div>
    </div>
  );
}
