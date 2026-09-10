import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Award, Flame, Heart, Wind, BookOpen, Calendar, CheckCircle2, TrendingUp } from 'lucide-react';

export default function Progress() {
  const [mindfulMins, setMindfulMins] = useState(18);
  const [bookingsCount, setBookingsCount] = useState(1);
  const [journalCount, setJournalCount] = useState(2);

  useEffect(() => {
    // Read from localStorage if available
    const savedMins = localStorage.getItem('breathe_mindful_mins');
    if (savedMins) setMindfulMins(Number(savedMins) + 12);

    // Read real counts from API
    api.getBookings().then((b) => setBookingsCount(b.length)).catch(() => {});
    api.getJournalEntries().then((j) => setJournalCount(j.length)).catch(() => {});
  }, []);

  const milestones = [
    { title: 'First Deep Breath', desc: 'Completed your first 4-7-8 rhythm session', unlocked: true, icon: Wind },
    { title: 'Sanctuary Explorer', desc: 'Visited all calm grounding activities', unlocked: true, icon: Award },
    { title: 'Soul Expresser', desc: 'Authored 3 or more private reflections', unlocked: journalCount >= 3, icon: BookOpen },
    { title: 'Guided Healing', desc: 'Booked a 1-on-1 session with a therapist', unlocked: bookingsCount >= 1, icon: Heart },
  ];

  const weeklyDays = [
    { day: 'Mon', active: true, minutes: 10 },
    { day: 'Tue', active: true, minutes: 15 },
    { day: 'Wed', active: true, minutes: 20 },
    { day: 'Thu', active: true, minutes: 8 },
    { day: 'Fri', active: true, minutes: 12 },
    { day: 'Sat', active: false, minutes: 0 },
    { day: 'Sun', active: true, minutes: 14 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
          <TrendingUp className="w-4 h-4" />
          Mindful Analytics & Growth
        </div>
        <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-on-surface mb-3">
          My Wellness Journey
        </h1>
        <p className="text-on-surface-variant text-sm sm:text-base">
          Celebrate your daily commitment to peace. Healing is not a race; every mindful moment counts.
        </p>
      </div>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-surface-container-high flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-coral/15 text-coral flex items-center justify-center">
            <Flame className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-semibold text-on-surface-variant">Calm Streak</span>
            <p className="font-headline text-2xl font-extrabold text-on-surface">6 Days</p>
            <span className="text-[11px] text-coral font-bold">Personal Best 🔥</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-surface-container-high flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary-container/30 text-primary flex items-center justify-center">
            <Wind className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-semibold text-on-surface-variant">Mindful Minutes</span>
            <p className="font-headline text-2xl font-extrabold text-on-surface">{mindfulMins} Mins</p>
            <span className="text-[11px] text-primary font-bold">+18% this week</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-surface-container-high flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed/40 text-tertiary flex items-center justify-center">
            <BookOpen className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-semibold text-on-surface-variant">Journal Reflections</span>
            <p className="font-headline text-2xl font-extrabold text-on-surface">{journalCount}</p>
            <span className="text-[11px] text-tertiary font-bold">Encrypted in DB</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-surface-container-high flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-secondary-container/40 text-secondary flex items-center justify-center">
            <Calendar className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-semibold text-on-surface-variant">Therapy Sessions</span>
            <p className="font-headline text-2xl font-extrabold text-on-surface">{bookingsCount}</p>
            <span className="text-[11px] text-secondary font-bold">1 Upcoming</span>
          </div>
        </div>
      </div>

      {/* Charts & Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        {/* Weekly Activity Bar Chart */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-sm border border-surface-container-high">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-headline font-bold text-lg text-on-surface">
                Weekly Mindfulness Rhythm
              </h3>
              <p className="text-xs text-on-surface-variant">
                Minutes of intentional breathing and reflection
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1 bg-surface-container rounded-full text-primary">
              This Week
            </span>
          </div>

          <div className="flex items-end justify-between gap-4 h-48 pt-8 px-4 border-b border-surface-container-high">
            {weeklyDays.map((w, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <span className="text-[10px] text-on-surface-variant font-bold">
                  {w.minutes > 0 ? `${w.minutes}m` : ''}
                </span>
                <div
                  style={{ height: `${Math.max(w.minutes * 4, 8)}px` }}
                  className={`w-full max-w-[36px] rounded-t-xl transition-all ${
                    w.active ? 'bg-primary hover:bg-primary-container' : 'bg-surface-container'
                  }`}
                />
                <span className="text-xs font-bold text-on-surface mt-2">{w.day}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-on-surface-variant mt-4 text-center">
            Great rhythm! Maintaining consistency signals safety to your autonomic nervous system.
          </p>
        </div>

        {/* Mood Distribution */}
        <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-sm border border-surface-container-high flex flex-col justify-between">
          <div>
            <h3 className="font-headline font-bold text-lg text-on-surface mb-1">
              Mood Landscape
            </h3>
            <p className="text-xs text-on-surface-variant mb-6">
              Emotional states captured during check-ins
            </p>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span>Peaceful & Calm</span>
                  <span className="text-primary">55%</span>
                </div>
                <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full w-[55%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span>Grateful & Hopeful</span>
                  <span className="text-coral">25%</span>
                </div>
                <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden">
                  <div className="bg-coral h-full rounded-full w-[25%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span>Anxious / Racing thoughts</span>
                  <span className="text-secondary">20%</span>
                </div>
                <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full rounded-full w-[20%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 mt-6 text-xs text-on-surface-variant leading-relaxed">
            💡 Notice that even in high-stress weeks, gentle breath breaks allow calm to remain your prevailing baseline.
          </div>
        </div>
      </div>

      {/* Milestones Unlocked */}
      <div>
        <h3 className="font-headline font-bold text-2xl text-on-surface mb-6">
          Sanctuary Milestones
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl border transition-all ${
                  m.unlocked
                    ? 'bg-white border-primary-container shadow-sm'
                    : 'bg-surface-container-low border-dashed border-outline-variant opacity-60'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 ${
                    m.unlocked ? 'bg-primary text-white shadow-sm' : 'bg-surface-container text-on-surface-variant'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1.5 mb-1">
                  <h4 className="font-headline font-bold text-sm text-on-surface">
                    {m.title}
                  </h4>
                  {m.unlocked && <CheckCircle2 className="w-4 h-4 text-primary" />}
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {m.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
