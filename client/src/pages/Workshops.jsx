import React, { useState } from 'react';
import { Search, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Workshops() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [registeredList, setRegisteredList] = useState([]);
  const [notice, setNotice] = useState(null);

  const workshops = [
    {
      id: 'w-1',
      title: 'The Science of Mindful Breathing',
      category: 'Expert Webinar',
      date: 'Oct 24, 2024',
      speaker: 'Dr. Aris Thorne',
      price: 'Paid',
      desc: 'Join Dr. Aris Thorne as we explore the neurological benefits of structured breathing exercises for anxiety management.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiZNKPgRAXsqPnvhCc_WuQ9sTvj5J2YqO6cDTYMUf257YvzQlFzS6Z6yWs3M0STtOMho8e-AvClLOvd5g6LWJ-rKvd9j0eZLR0g3OnLvyITrluNQ4mCHoHeS4bl0E_WCm5wkBfwdyGIF-iF6hob9H8XtWnDR3srrqwnPMN9VmGJa1x535dsFLPA_FzPpVIFqYfUKF-kJlXKtAPvIm7mMcsWNmiK4HuanfMK9wBjbsmFB6NO6GOCwPiwQ',
      badgeColor: 'bg-tertiary-container text-on-tertiary-container',
      priceBadge: 'bg-primary-fixed text-on-primary-fixed',
    },
    {
      id: 'w-2',
      title: 'Finals Without the Freak-out',
      category: 'Student Workshop',
      date: 'Nov 02, 2024',
      speaker: 'Sarah Jenkins',
      price: 'Free',
      desc: 'A practical session on time management and stress reduction techniques specifically for university students.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBB31nxRLqBKrEs6CiukQnLEiv-U5b1OUUOdc5Qa0emc4QO1wLMvT1bDVPvR33YbLKLweUa9vZIGWA7PIvLcTzeJbTYHFqBBun4-0uzkYtyPmP7Omw3myAsW7-z8_-1xYTUxQJcnnwpcxWwtrfU5CymShiYtw29XZYIiaGLnuTkeycawIns1zoy5Dk3SfoMy1GQW1eskEhrFimgx04KOzMvVSizatcTTdEVl1fIduEfnF0b76XJrdKznA',
      badgeColor: 'bg-secondary-container text-on-secondary-container',
      priceBadge: 'bg-tertiary-fixed text-on-tertiary-fixed',
    },
    {
      id: 'w-3',
      title: 'Grief & Gentle Peer Connection',
      category: 'Peer Support',
      date: 'Nov 10, 2024',
      speaker: 'Amara Singh, LCSW',
      price: 'Free',
      desc: 'Close up conversations holding space for loss, life transitions, and breathing together in restorative peer community.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVodtzklQFj8GdNoeMioMZsV1Z1sLdosRivpNs2vtxQKKr7wBTmHGIWMBNzMLqXi_M1gHeGfK3JZ5lUTmt77yd9yQpi2nm1O3VCo9sVSVAb9cEoYxrBuSYb6YqHs-U2L6dQQ_ykPCu2FjRJRA_p6mfx0VCitGm_bk80nauJ_V6CEuHF9wsJOQ71nv88jFbTmrqRuKF4zLfgs4jCNMiCpmZZ-pl5iHTJLl-ihtWJx14oIGdhhaPHrIYkw',
      badgeColor: 'bg-primary-container text-white',
      priceBadge: 'bg-tertiary-fixed text-on-tertiary-fixed',
    },
  ];

  const handleRegister = (w) => {
    if (registeredList.includes(w.id)) return;
    setRegisteredList([...registeredList, w.id]);
    setNotice(`Seat reserved for "${w.title}". We look forward to breathing with you!`);
    setTimeout(() => setNotice(null), 4000);
  };

  const filteredWorkshops = workshops.filter((w) => {
    const matchesFilter = selectedFilter === 'All' || w.category === selectedFilter;
    const matchesSearch =
      w.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="relative pt-8 md:pt-16 pb-20 font-body-md text-body-md">
      {/* Organic Background Elements */}
      <div className="organic-blob bg-primary-container w-[500px] h-[500px] rounded-full -top-20 -left-20 pointer-events-none"></div>
      <div className="organic-blob bg-tertiary-container w-[400px] h-[400px] rounded-full top-1/2 -right-20 pointer-events-none"></div>

      <section className="max-w-container-max mx-auto px-gutter mb-16 text-center">
        <h1 className="font-headline-xl text-headline-xl mb-4 text-primary">Nurturing Growth Together</h1>
        <p className="text-body-lg max-w-2xl mx-auto text-on-surface-variant">
          Find your space in our workshops and webinars. Whether you're a student, peer, or seeking expert advice, there's a breath of fresh air waiting for you.
        </p>
      </section>

      {/* Search & Filter Bar */}
      <section className="max-w-container-max mx-auto px-gutter mb-12">
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input
              className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-none rounded-full focus:ring-2 focus:ring-primary focus:outline-none transition-all text-sm"
              placeholder="Search workshops, speakers, or topics..."
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {['All', 'Student Workshop', 'Peer Support', 'Expert Webinar'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-6 py-2 rounded-full font-label-md text-label-md transition-all ${
                  selectedFilter === cat
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-surface-container-high text-on-surface-variant hover:bg-primary-container/20'
                }`}
              >
                {cat === 'All' ? 'All Sessions' : `${cat}s`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {notice && (
        <div className="max-w-container-max mx-auto px-gutter mb-8">
          <div className="p-4 rounded-2xl bg-primary-container/25 text-on-primary-container text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
            <span>{notice}</span>
          </div>
        </div>
      )}

      {/* Workshop Grid */}
      <section className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWorkshops.map((w) => {
          const isRegistered = registeredList.includes(w.id);
          return (
            <div
              key={w.id}
              className="flex flex-col bg-surface border border-outline-variant/30 rounded-2xl overflow-hidden hover:shadow-[0_20px_20px_0_rgba(139,168,142,0.08)] transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={w.image}
                  alt={w.title}
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${w.badgeColor}`}>
                  {w.category}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold text-outline tracking-widest uppercase">{w.date}</span>
                  <span className={`px-2 py-0.5 text-[10px] rounded font-bold uppercase ${w.priceBadge}`}>{w.price}</span>
                </div>

                <h3 className="font-headline-md text-headline-md mb-2 text-on-surface group-hover:text-primary transition-colors">
                  {w.title}
                </h3>

                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2 leading-relaxed">
                  {w.desc}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-surface-container-high">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-secondary font-bold text-xs">
                      {w.speaker[0]}
                    </div>
                    <span className="text-xs font-medium">{w.speaker}</span>
                  </div>

                  <button
                    onClick={() => handleRegister(w)}
                    disabled={isRegistered}
                    className="text-primary font-bold flex items-center gap-1 group-hover:gap-2 transition-all text-sm disabled:opacity-50"
                  >
                    <span>{isRegistered ? 'Seat Saved' : 'Register'}</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
