import React, { useState } from 'react';
import { Calendar, Clock, Accessibility, CheckCircle2, Globe, Eye, Volume2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ConsultationSettings() {
  const [selectedDay, setSelectedDay] = useState('Wed 14');
  const [selectedTime, setSelectedTime] = useState('1:00 PM');
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [booked, setBooked] = useState(false);

  // Accessibility Settings
  const [language, setLanguage] = useState('English');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [chimeEnabled, setChimeEnabled] = useState(true);

  const days = [
    { day: 'Mon', num: '12' },
    { day: 'Tue', num: '13' },
    { day: 'Wed', num: '14' },
    { day: 'Thu', num: '15' },
    { day: 'Fri', num: '16' },
  ];

  const times = ['10:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'];

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setBooked(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Free Consultation Flow */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="inline-block text-primary font-bold text-xs uppercase tracking-widest bg-primary-container/20 px-3.5 py-1 rounded-full mb-3">
              15-Minute Intro
            </span>
            <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-on-surface mb-2">
              Start with a free chat
            </h1>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Schedule a 15-minute introductory call to see if our therapists and platform are a good fit. No financial commitment, no pressure—just a quiet conversation.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-surface-container-high shadow-sm">
            {booked ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-14 h-14 bg-primary-container/30 text-primary rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-headline font-bold text-xl text-on-surface">
                  Intro Call Confirmed!
                </h3>
                <p className="text-xs text-on-surface-variant max-w-sm mx-auto">
                  We look forward to meeting you on <strong>{selectedDay}</strong> at <strong>{selectedTime}</strong>. A confidential video link has been emailed to you.
                </p>
                <button
                  onClick={() => setBooked(false)}
                  className="text-xs font-bold text-primary underline pt-2"
                >
                  Reschedule consultation
                </button>
              </div>
            ) : (
              <form onSubmit={handleConfirm} className="space-y-6 text-xs sm:text-sm">
                {/* Date Picker */}
                <div>
                  <h3 className="font-headline font-bold text-sm text-on-surface mb-3 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Select a Date</span>
                  </h3>
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
                    {days.map((d) => {
                      const isSelected = selectedDay === `${d.day} ${d.num}`;
                      return (
                        <button
                          key={d.num}
                          type="button"
                          onClick={() => setSelectedDay(`${d.day} ${d.num}`)}
                          className={`flex-shrink-0 flex flex-col items-center justify-center w-16 h-20 rounded-2xl transition-all border ${
                            isSelected
                              ? 'bg-primary text-white border-primary shadow-md scale-105'
                              : 'bg-surface-container-low border-outline-variant/40 text-on-surface hover:bg-surface-container'
                          }`}
                        >
                          <span className="text-[11px] opacity-80">{d.day}</span>
                          <span className="font-headline font-bold text-lg">{d.num}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Picker */}
                <div>
                  <h3 className="font-headline font-bold text-sm text-on-surface mb-3 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Available Times</span>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {times.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                          selectedTime === t
                            ? 'bg-primary text-white border-primary shadow-sm'
                            : 'bg-[#fbf9f5] border-outline-variant/40 text-on-surface hover:border-primary'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form fields */}
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1">
                    Preferred Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="How should we address you?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/60 focus:outline-none focus:border-primary bg-[#fbf9f5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1">
                    What's on your mind? (Optional)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Take your time. This is a safe space to share as little or as much as you feel comfortable with."
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/60 focus:outline-none focus:border-primary bg-[#fbf9f5] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-primary text-white font-bold text-xs shadow hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confirm Free 15-Min Consultation</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right: Accessibility & Experience Settings */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-8 border border-surface-container-high shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-surface-container-high">
              <Accessibility className="w-6 h-6 text-primary" />
              <div>
                <h2 className="font-headline font-bold text-lg text-on-surface">
                  Accessibility & Comfort
                </h2>
                <p className="text-xs text-on-surface-variant">Customize your sanctuary experience</p>
              </div>
            </div>

            {/* Language */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <span className="font-bold text-on-surface">Language</span>
              </div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-3 py-1.5 rounded-xl border border-outline-variant/60 bg-[#fbf9f5] font-semibold text-xs"
              >
                <option value="English">English</option>
                <option value="Spanish">Español</option>
                <option value="French">Français</option>
                <option value="Hindi">हिन्दी</option>
              </select>
            </div>

            {/* Reduced Motion Toggle */}
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-on-surface block">Reduced Motion</span>
                <span className="text-[11px] text-on-surface-variant">Pause ambient blob animations</span>
              </div>
              <button
                type="button"
                onClick={() => setReducedMotion(!reducedMotion)}
                className={`w-12 h-6 rounded-full transition-colors p-0.5 ${
                  reducedMotion ? 'bg-primary' : 'bg-surface-container-highest'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    reducedMotion ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* High Contrast */}
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-on-surface block">High Contrast Elements</span>
                <span className="text-[11px] text-on-surface-variant">Enhance text borders & readability</span>
              </div>
              <button
                type="button"
                onClick={() => setHighContrast(!highContrast)}
                className={`w-12 h-6 rounded-full transition-colors p-0.5 ${
                  highContrast ? 'bg-primary' : 'bg-surface-container-highest'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    highContrast ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Chimes */}
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-on-surface block">Breathing Audio Chimes</span>
                <span className="text-[11px] text-on-surface-variant">Gentle bell sound upon cycle completion</span>
              </div>
              <button
                type="button"
                onClick={() => setChimeEnabled(!chimeEnabled)}
                className={`w-12 h-6 rounded-full transition-colors p-0.5 ${
                  chimeEnabled ? 'bg-primary' : 'bg-surface-container-highest'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    chimeEnabled ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
