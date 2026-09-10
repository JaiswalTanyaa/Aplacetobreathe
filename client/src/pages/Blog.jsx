import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, Sparkles, Heart } from 'lucide-react';

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const featured = {
    title: 'The Architecture of Rest: Why Doing Nothing is Clinically Necessary',
    author: 'Dr. Elara Vance, Clinical Director',
    date: 'Oct 14, 2026',
    readTime: '8 min read',
    category: 'Neuroscience & Calm',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
    summary: 'Our culture treats rest as a reward rather than a biological necessity. Learn how the parasympathetic nervous system requires intentional pauses to prevent neural burn-in.',
    content: `Rest is not the absence of productivity; it is the biological precondition for healing and neural elasticity. When we deny ourselves unhurried pauses, our sympathetic nervous system remains trapped in a subtle, chronic vigilance. 

In clinical studies, intentional stillness—such as gazing out a window, gentle breathwork, or unguided daydreams—activates the Default Mode Network (DMN). This network consolidates memory, processes emotional residue, and allows the prefrontal cortex to replenish its neurotransmitter reserves.

Next time you feel the urge to fill an empty 10 minutes with screen time or chores, grant yourself the grace of conscious idleness. Inhale peace, exhale the urge to perform.`,
  };

  const articles = [
    {
      id: 1,
      title: 'Befriending the Amygdala: A Somatic Guide to Panicked Thoughts',
      author: 'Dr. Julian Reed',
      date: 'Oct 10, 2026',
      readTime: '5 min read',
      category: 'Somatic Healing',
      image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&auto=format&fit=crop&q=80',
      summary: 'When panic strikes, logic fails because blood flow shifts away from the reasoning brain. Discover somatic techniques to signal physical safety directly to your amygdala.',
      content: `Your amygdala does not speak English; it speaks sensation. Telling yourself 'don't panic' rarely stops a panic attack because the auditory reasoning pathways are suppressed. Instead, we must speak the language of somatic reassurance: cool water on the face, prolonged exhalations, and grounding pressure on the feet.`,
    },
    {
      id: 2,
      title: 'How to Listen to Someone in Pain Without Trying to Fix Them',
      author: 'Amara Singh, LCSW',
      date: 'Oct 04, 2026',
      readTime: '6 min read',
      category: 'Compassionate Care',
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&auto=format&fit=crop&q=80',
      summary: 'The instinct to solve another persons suffering often stems from our own discomfort with vulnerability. Learn the transformative power of silent presence.',
      content: `When someone shares deep sorrow, jumping to advice often communicates 'your pain makes me uncomfortable; please resolve it.' Holding space means sitting in the sacred quiet and affirming: 'I hear you. You do not have to carry this completely alone.'`,
    },
    {
      id: 3,
      title: 'The Sacred Art of Saying "Not Today"',
      author: 'Kai Sterling',
      date: 'Sep 28, 2026',
      readTime: '4 min read',
      category: 'Boundaries & Growth',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80',
      summary: 'Boundaries are not walls; they are the gates through which we protect our peace. A reflection on reclaiming personal emotional agency without guilt.',
      content: `A boundary is the distance at which I can love both you and me simultaneously. Saying no to an obligation is frequently saying yes to your nervous system. Remember: you are allowed to disappoint others to avoid betraying yourself.`,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <section className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block text-primary font-bold text-xs uppercase tracking-widest bg-primary-container/20 px-4 py-1.5 rounded-full mb-3">
          The Breathing Room
        </span>
        <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-on-surface mb-3">
          Quiet Thoughts & Clinical Insights
        </h1>
        <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
          Essays and practical wisdom on neuro-wellbeing, emotional grounding, and the gentle pace of sustainable healing.
        </p>
      </section>

      {/* Featured Article Card */}
      <section className="mb-14">
        <div
          onClick={() => setSelectedArticle(featured)}
          className="cursor-pointer bg-white rounded-3xl border border-surface-container-high overflow-hidden shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 group"
        >
          <div className="lg:col-span-6 h-64 lg:h-auto overflow-hidden relative">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
              Featured Reading
            </span>
          </div>

          <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs text-on-surface-variant font-semibold mb-3">
                <span className="text-primary font-bold">{featured.category}</span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
              </div>

              <h2 className="font-headline font-bold text-2xl lg:text-3xl text-on-surface mb-4 group-hover:text-primary transition-colors">
                {featured.title}
              </h2>

              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6">
                {featured.summary}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-surface-container-high text-xs">
              <span className="font-bold text-on-surface">{featured.author}</span>
              <span className="text-primary font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Essay &rarr;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {articles.map((art) => (
          <div
            key={art.id}
            onClick={() => setSelectedArticle(art)}
            className="cursor-pointer bg-white rounded-3xl border border-surface-container-high overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="h-48 overflow-hidden">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-on-surface-variant mb-2">
                  <span className="text-primary font-bold">{art.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="font-headline font-bold text-lg text-on-surface mb-2 group-hover:text-primary transition-colors">
                  {art.title}
                </h3>

                <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3 mb-4">
                  {art.summary}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-surface-container-high flex items-center justify-between text-xs mt-auto">
              <span className="text-on-surface font-semibold">{art.author}</span>
              <span className="text-primary font-bold flex items-center gap-1">
                Read &rarr;
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 md:p-10 shadow-2xl border border-surface-container-high relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">
              {selectedArticle.category} &bull; {selectedArticle.readTime}
            </span>

            <h2 className="font-headline font-extrabold text-2xl md:text-3xl text-on-surface mb-2">
              {selectedArticle.title}
            </h2>

            <p className="text-xs text-on-surface-variant mb-6 pb-4 border-b border-surface-container-high">
              By <strong>{selectedArticle.author}</strong> &bull; {selectedArticle.date}
            </p>

            <div className="prose prose-stone text-sm text-on-surface leading-relaxed space-y-4">
              {selectedArticle.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-surface-container-high flex justify-between items-center text-xs">
              <span className="text-on-surface-variant">May this reflection bring peace to your day.</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2 rounded-full bg-primary text-white font-bold"
              >
                Close Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
