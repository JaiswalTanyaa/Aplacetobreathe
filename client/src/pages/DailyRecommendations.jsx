import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Play, ArrowRight, BookOpen, Trees, Heart, Send, CheckCircle2 } from 'lucide-react';

export default function DailyRecommendations() {
  const [selectedMood, setSelectedMood] = useState('Calm');
  const [tips, setTips] = useState([
    {
      author: 'Sarah J.',
      text: 'I listen to the sound of rain whenever I feel overwhelmed. It helps me focus on the present moment.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    {
      author: 'David M.',
      text: 'A five-minute slow shoulder stretch at noon changed my entire afternoon anxiety level.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
  ]);
  const [newTip, setNewTip] = useState({ author: '', text: '' });
  const [notice, setNotice] = useState(null);

  const moodButtons = [
    { name: 'Calm', icon: '🌿', color: 'border-primary text-primary bg-primary-container/20' },
    { name: 'Anxious', icon: '🌊', color: 'border-secondary text-secondary bg-secondary-container/30' },
    { name: 'Tired', icon: '🌙', color: 'border-outline-variant text-on-surface-variant bg-surface-container' },
    { name: 'Inspired', icon: '💡', color: 'border-tertiary text-tertiary bg-tertiary-fixed/30' },
    { name: 'Heavy', icon: '☁️', color: 'border-outline text-outline bg-surface-container-high' },
  ];

  const recommendationsByMood = {
    Calm: {
      featured: {
        tag: 'Guided Meditation',
        duration: '15 Min',
        title: 'Morning Breath & Grounding',
        desc: 'A gentle session designed to anchor your thoughts and prepare you for the day ahead with clarity.',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
        route: '/explore',
      },
      cards: [
        {
          title: 'Gratitude Reflection',
          desc: 'Write down three things you are thankful for today in your encrypted journal.',
          linkText: 'Write now',
          route: '/journal',
        },
        {
          title: 'Visual Forest Escape',
          desc: 'Immerse your senses in ambient forest rain soundscapes.',
          linkText: 'Listen',
          route: '/explore',
        },
      ],
    },
    Anxious: {
      featured: {
        tag: 'Acute De-escalation',
        duration: '5 Min',
        title: '4-7-8 Parasympathetic Reset',
        desc: 'Inhale for 4s, hold for 7s, exhale for 8s to signal immediate safety to your vagus nerve.',
        image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&auto=format&fit=crop&q=80',
        route: '/explore',
      },
      cards: [
        {
          title: '5-4-3-2-1 Sensory Grounding',
          desc: 'Acknowledge 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste.',
          linkText: 'Practice',
          route: '/explore',
        },
        {
          title: 'Talk with a Therapist',
          desc: 'Connect with a certified anxiety specialist for support.',
          linkText: 'Find Guide',
          route: '/therapists',
        },
      ],
    },
    Tired: {
      featured: {
        tag: 'Restorative Care',
        duration: '20 Min',
        title: 'Yoga Nidra Deep Rest',
        desc: 'Lying down passively to replenish neuro-chemical reserves without the pressure of sleep.',
        image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop&q=80',
        route: '/explore',
      },
      cards: [
        {
          title: 'The Architecture of Rest',
          desc: 'Read Dr. Vance’s essay on why doing nothing is clinically necessary.',
          linkText: 'Read essay',
          route: '/blog',
        },
        {
          title: 'Sleep Routine Pacing',
          desc: 'Dim your room, disconnect blue screens, and breathe deeply.',
          linkText: 'Learn more',
          route: '/workshops',
        },
      ],
    },
    Inspired: {
      featured: {
        tag: 'Creative Flow',
        duration: '10 Min',
        title: 'Intentional Living & Purpose',
        desc: 'Harness positive mental clarity to outline mindful intentions for your week.',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
        route: '/progress',
      },
      cards: [
        {
          title: 'Share with Community',
          desc: 'Inspire a fellow sanctuary traveler by sharing your victory story.',
          linkText: 'Post story',
          route: '/community',
        },
        {
          title: 'Weekly Mindfulness Review',
          desc: 'Check your calm streaks and review completed milestones.',
          linkText: 'View Progress',
          route: '/progress',
        },
      ],
    },
    Heavy: {
      featured: {
        tag: 'Somatic Compassion',
        duration: '12 Min',
        title: 'Holding Space for Sorrow',
        desc: 'Place a gentle hand on your heart and let emotions pass without resisting or judging them.',
        image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop&q=80',
        route: '/explore',
      },
      cards: [
        {
          title: 'Private Journaling',
          desc: 'Write freely into an encrypted safe haven with zero judgment.',
          linkText: 'Open journal',
          route: '/journal',
        },
        {
          title: 'Grief Support Circle',
          desc: 'Join our free upcoming webinar on gentle healing after sorrow.',
          linkText: 'Reserve seat',
          route: '/workshops',
        },
      ],
    },
  };

  const currentRec = recommendationsByMood[selectedMood];

  const handleAddTip = (e) => {
    e.preventDefault();
    if (!newTip.text.trim()) return;
    setTips([
      {
        author: newTip.author || 'Kind Soul',
        text: newTip.text,
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
      },
      ...tips,
    ]);
    setNewTip({ author: '', text: '' });
    setNotice('Thank you! Your soul food tip was shared with the community.');
    setTimeout(() => setNotice(null), 3500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero & Mood Tracker */}
      <section className="mb-16 text-center max-w-3xl mx-auto">
        <span className="inline-block text-primary font-bold text-xs uppercase tracking-widest bg-primary-container/20 px-4 py-1.5 rounded-full mb-3">
          Daily Personalization
        </span>
        <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-on-surface mb-4">
          How are you feeling right now?
        </h1>
        <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-8">
          Let’s find the perfect space for your current state of mind. Select your mood to see personalized activities curated just for you.
        </p>

        {/* Mood Widget Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-2xl mx-auto">
          {moodButtons.map((btn) => (
            <button
              key={btn.name}
              onClick={() => setSelectedMood(btn.name)}
              className={`flex flex-col items-center justify-center gap-2 p-5 rounded-3xl border-2 transition-all duration-300 ${
                selectedMood === btn.name
                  ? `${btn.color} shadow-md scale-105 font-bold`
                  : 'bg-white border-transparent hover:border-outline-variant/50 text-on-surface-variant'
              }`}
            >
              <span className="text-3xl">{btn.icon}</span>
              <span className="text-xs font-semibold">{btn.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Recommendations Bento */}
      <section className="mb-16">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="font-headline font-bold text-2xl text-on-surface">
              Suggested for you ({selectedMood})
            </h2>
            <p className="text-xs text-on-surface-variant">Activities tailored to your current rhythm</p>
          </div>
          <Link to="/explore" className="text-primary font-bold text-xs flex items-center gap-1 hover:underline">
            <span>Explore all</span> <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Featured Card */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden relative shadow-sm border border-surface-container-high group min-h-[380px] flex flex-col justify-end p-8 bg-surface-variant">
            <img
              src={currentRec.featured.image}
              alt={currentRec.featured.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            <div className="relative z-10 text-white space-y-3">
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary text-white text-[10px] rounded-full uppercase tracking-widest font-bold">
                  {currentRec.featured.tag}
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] rounded-full font-bold">
                  {currentRec.featured.duration}
                </span>
              </div>

              <h3 className="font-headline font-bold text-2xl sm:text-3xl">
                {currentRec.featured.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-200 max-w-lg leading-relaxed">
                {currentRec.featured.desc}
              </p>

              <Link
                to={currentRec.featured.route}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coral text-white font-bold text-xs shadow-lg hover:bg-coral-dark transition-all"
              >
                <span>Begin Session</span>
                <Play className="w-3.5 h-3.5 fill-current" />
              </Link>
            </div>
          </div>

          {/* Secondary Stack Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {currentRec.cards.map((card, idx) => (
              <div
                key={idx}
                className="flex-1 bg-white p-6 rounded-3xl border border-surface-container-high shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-headline font-bold text-base text-on-surface mb-2">
                    {card.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>
                <Link
                  to={card.route}
                  className="text-primary font-bold text-xs inline-flex items-center gap-1 hover:underline"
                >
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Soul Food Section */}
      <section className="bg-secondary-container/20 rounded-[36px] p-8 md:p-12 border border-secondary-container/40 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-secondary font-bold text-xs uppercase tracking-widest mb-2">
            Shared Wisdom
          </span>
          <h2 className="font-headline font-bold text-2xl md:text-3xl text-on-surface mb-4">
            Community Soul Food
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6">
            Our healing space grows through shared human wisdom. Have an activity or a gentle ritual that helped you find your breath? Share it with the sanctuary.
          </p>

          <div className="space-y-4">
            {tips.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-sm border border-surface-container-high">
                <img src={tip.avatar} alt={tip.author} className="w-10 h-10 rounded-full object-cover shrink-0" />
                <div>
                  <p className="text-xs text-on-surface italic">"{tip.text}"</p>
                  <span className="text-[11px] font-bold text-primary block mt-1">— {tip.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Tip Form */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-surface-container-high">
          <h3 className="font-headline font-bold text-base text-on-surface mb-2">
            Share a Gentle Tip
          </h3>
          <p className="text-xs text-on-surface-variant mb-4">
            Offer a small grain of comfort to someone experiencing the same emotional weather today.
          </p>

          {notice && (
            <div className="mb-3 p-3 rounded-xl bg-green-100 text-green-800 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span>{notice}</span>
            </div>
          )}

          <form onSubmit={handleAddTip} className="space-y-3 text-xs">
            <div>
              <label className="block font-bold text-on-surface-variant mb-1">Your Name or Alias</label>
              <input
                type="text"
                placeholder="e.g. Maya S."
                value={newTip.author}
                onChange={(e) => setNewTip({ ...newTip, author: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-outline-variant/60 bg-[#fbf9f5]"
              />
            </div>
            <div>
              <label className="block font-bold text-on-surface-variant mb-1">Your Wisdom or Grounding Ritual</label>
              <textarea
                rows="3"
                required
                placeholder="e.g. Taking 3 deep exhales while placing both feet flat on the wooden floor..."
                value={newTip.text}
                onChange={(e) => setNewTip({ ...newTip, text: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-outline-variant/60 bg-[#fbf9f5] resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-primary text-white font-bold shadow hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Share Soul Food</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
