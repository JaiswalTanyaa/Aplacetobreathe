import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const filterOptions = ['All Sessions', 'Student Workshops', 'Peer Support', 'Expert Webinars'];

const workshopCards = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiZNKPgRAXsqPnvhCc_WuQ9sTvj5J2YqO6cDTYMUf257YvzQlFzS6Z6yWs3M0STtOMho8e-AvClLOvd5g6LWJ-rKvd9j0eZLR0g3OnLvyITrluNQ4mCHoHeS4bl0E_WCm5wkBfwdyGIF-iF6hob9H8XtWnDR3srrqwnPMN9VmGJa1x535dsFLPA_FzPpVIFqYfUKF-kJlXKtAPvIm7mMcsWNmiK4HuanfMK9wBjbsmFB6NO6GOCwPiwQ',
    alt: 'A serene workspace with a soft sage green wall and laptop open showing a video conference',
    badgeBg: 'bg-tertiary-container text-on-tertiary-container',
    badge: 'Expert Webinar',
    date: 'Oct 24, 2024',
    priceBg: 'bg-primary-fixed text-on-primary-fixed',
    price: 'Paid',
    title: 'The Science of Mindful Breathing',
    desc: 'Join Dr. Aris Thorne as we explore the neurological benefits of structured breathing exercises for anxiety management.',
    avatarBg: 'bg-secondary-container',
    speaker: 'Dr. Aris Thorne',
    cta: 'Register',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBB31nxRLqBKrEs6CiukQnLEiv-U5b1OUUOdc5Qa0emc4QO1wLMvT1bDVPvR33YbLKLweUa9vZIGWA7PIvLcTzeJbTYHFqBBun4-0uzkYtyPmP7Omw3myAsW7-z8_-1xYTUxQJcnnwpcxWwtrfU5CymShiYtw29XZYIiaGLnuTkeycawIns1zoy5Dk3SfoMy1GQW1eskEhrFimgx04KOzMvVSizatcTTdEVl1fIduEfnF0b76XJrdKznA',
    alt: 'A diverse group of university students sitting in a circle on a sunny lawn',
    badgeBg: 'bg-secondary-container text-on-secondary-container',
    badge: 'Student Workshop',
    date: 'Nov 02, 2024',
    priceBg: 'bg-tertiary-fixed text-on-tertiary-fixed',
    price: 'Free',
    title: 'Finals Without the Freak-out',
    desc: 'A practical session on time management and stress reduction techniques specifically for university students.',
    avatarBg: 'bg-primary-fixed',
    speaker: 'Sarah Jenkins',
    cta: 'Save Seat',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVodtzklQFj8GdNoeMioMZsV1Z1sLdosRivpNs2vtxQKKr7wBTmHGIWMBNzMLqXi_M1gHeGfK3JZ5lUTmt77yd9yQpi2nm1O3VCo9sVSVAb9cEoYxrBuSYb6YqHs-U2L6dQQ_ykPCu2FjRJRA_p6mfx0VCitGm_bk80nauJ_V6CEuHF9wsJOQ71nv88jFbTmrqRuKF4zLfgs4jCNMiCpmZZ-pl5iHTJLl-ihtWJx14oIGdhhaPHrIYkw',
    alt: 'Close up of two pairs of hands holding warm ceramic mugs in a cozy library setting',
    badgeBg: 'bg-primary-container text-white',
    badge: 'Peer Support',
    date: 'Recurring Mon',
    priceBg: 'bg-tertiary-fixed text-on-tertiary-fixed',
    price: 'Free',
    title: 'Monday Morning Reset',
    desc: 'Start your week with intentionality. A community-led session focused on goal-setting and emotional grounding.',
    avatarBg: 'bg-outline-variant',
    speaker: 'Open Circle',
    cta: 'Join Live',
  },
];

export default function Workshops() {
  const [activeFilter, setActiveFilter] = useState('All Sessions');
  const [searchValue, setSearchValue] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <div className="relative overflow-x-hidden">
      {/* Organic Background Blobs */}
      <div
        className="pointer-events-none"
        style={{
          position: 'absolute', top: '-80px', left: '-80px',
          width: '500px', height: '500px',
          background: '#8ba88e', borderRadius: '50%',
          zIndex: 0, filter: 'blur(60px)', opacity: 0.4,
        }}
      />
      <div
        className="pointer-events-none"
        style={{
          position: 'absolute', top: '50%', right: '-80px',
          width: '400px', height: '400px',
          background: '#dd8f50', borderRadius: '50%',
          zIndex: 0, filter: 'blur(60px)', opacity: 0.4,
        }}
      />

      <main className="relative pt-8 pb-20">

        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-6 mb-16 text-center">
          <h1 className="font-headline-xl text-headline-xl mb-4 text-primary">Nurturing Growth Together</h1>
          <p className="text-body-lg max-w-2xl mx-auto text-on-surface-variant">
            Find your space in our workshops and webinars. Whether you're a student, peer, or seeking expert advice, there's a breath of fresh air waiting for you.
          </p>
        </section>

        {/* Search & Filter Bar */}
        <section className="max-w-container-max mx-auto px-6 mb-12">
          <div
            className="p-6 rounded-xl shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between"
            style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)' }}
          >
            <div
              className="relative w-full md:w-96 transition-transform"
              style={{ transform: searchFocused ? 'scale(1.02)' : 'scale(1)' }}
            >
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input
                type="text"
                placeholder="Search workshops, speakers, or topics..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-none rounded-full focus:ring-2 focus:ring-primary focus:outline-none transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {filterOptions.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-6 py-2 rounded-full font-label-md text-label-md transition-colors ${
                    activeFilter === f
                      ? 'bg-primary text-white hover:opacity-90'
                      : activeFilter === 'Student Workshops' && f === 'Student Workshops'
                      ? 'bg-secondary-container text-on-secondary-container hover:bg-secondary/10'
                      : 'bg-surface-container-high text-on-surface-variant hover:bg-primary-container/20'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Grid */}
        <section className="max-w-container-max mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshopCards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col bg-surface border border-outline-variant/30 rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-[0_20px_20px_0_rgba(139,168,142,0.05)]"
            >
              {/* Card Image */}
              <div className="h-48 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${card.img}')` }}
                />
                <div className={`absolute top-4 left-4 ${card.badgeBg} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider`}>
                  {card.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold text-outline tracking-widest uppercase">{card.date}</span>
                  <span className={`px-2 py-0.5 ${card.priceBg} text-[10px] rounded font-bold uppercase`}>{card.price}</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-2 text-on-surface group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">{card.desc}</p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full ${card.avatarBg}`} />
                    <span className="text-xs font-medium">{card.speaker}</span>
                  </div>
                  <button className="text-primary font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    {card.cta} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Peer Sessions Featured Section */}
        <section className="mt-32 bg-surface-container-low py-20 relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-6 text-on-surface">Community-Led Peer Sessions</h2>
              <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Sometimes the best healing comes from those who have walked the same path. Our Peer Sessions are informal, safe spaces moderated by trained community volunteers.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'No hierarchy, just humans helping humans.',
                  'Focus on lived experience and shared empathy.',
                  'Always free and open to everyone in the community.',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">eco</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/community"
                className="inline-block px-8 py-4 bg-primary text-white rounded-full font-bold shadow-md hover:-translate-y-0.5 transition-all"
              >
                Explore Peer Groups
              </Link>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-primary-container/20 rounded-[2rem] blur-2xl group-hover:blur-3xl transition-all duration-700" />
              <div className="relative h-96 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                <img
                  className="w-full h-full object-cover"
                  alt="An overhead shot of an inclusive group of diverse people sitting together on a large plush outdoor rug in a peaceful garden at sunset"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqVcHXPFTMhcz6t6cSCeHfo_uTJGzUq9T0WSAdns4aP9dmiKJP95GD5VS0qubPJ1aXMyClJoK4KrXwVpNeHD9x7_1axmWdlMkn3ximwwbTah4aetVTIhIEoMnZLaiqTnY7J3xRdXiHRFZHpVoXE0k5q1MpqA06j03RkxlxGcJ2lILRbkk-A8bPWsnmVDy-nZFgAqer7j6i2vLf9XZa8d08AiDZhW5JodUgUd5rGliZ-pN9mGVt5j4byg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Highlights */}
        <section className="max-w-container-max mx-auto px-6 py-32">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-xl">
              <span className="text-tertiary font-bold tracking-widest uppercase text-sm">Don't Miss Out</span>
              <h2 className="font-headline-lg text-headline-lg mt-2">Next Week's Highlights</h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:underline">
              View Full Calendar <span className="material-symbols-outlined">calendar_month</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Featured Highlight Card */}
            <div
              className="md:col-span-8 p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-center border border-primary/10"
              style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  className="w-full h-full object-cover"
                  alt="Abstract watercolor painting in shades of deep forest green, soft sage, and vibrant golden yellow"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDImYeZDL3PHEuKD1HlFrFgAJuDF0mskZrLAKTLlEjeaLsEqC5cELS86spvJ_OlicvyyuuPFrJV7DwjbxjoQtnsjL_43VSmYMPD7JWw7rpPzTMxPrIbClDgflJhZWIa38GXzlXI28N7mxCOy4fUeQ7gOz0XeytIlovpud8tabJNADEPqc6YkD66CJeL7Dr8ZyCZoBif5s-tiRqiSGSpRWnN9vxDBEv5puabiD2B69dCqo_I4MbGAsJTeA"
                />
              </div>
              <div className="flex-1">
                <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-xs font-bold mb-4 inline-block">MOST POPULAR</span>
                <h3 className="font-headline-md text-headline-md mb-3">Artistic Expression for Trauma Healing</h3>
                <p className="text-on-surface-variant mb-6">A transformative workshop led by therapist and artist Elena Rossi, using color and form to speak where words fail.</p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline">schedule</span>
                    <span className="text-sm">90 mins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline">group</span>
                    <span className="text-sm">Limited Seats</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Micro-Meditations Card */}
            <div className="md:col-span-4 bg-primary p-10 rounded-3xl text-white flex flex-col justify-between shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-headline-md text-headline-md mb-4 leading-tight">Daily Micro-Meditations</h3>
                <p className="opacity-80 text-sm mb-8">Quick 10-minute sessions at noon to help you refocus and regain your center.</p>
              </div>
              <div className="relative z-10">
                <button className="w-full py-4 bg-white text-primary rounded-full font-bold hover:bg-opacity-90 transition-all">
                  Set Reminder
                </button>
              </div>
              <span className="material-symbols-outlined absolute -bottom-10 -right-10 opacity-10 rotate-12" style={{ fontSize: '200px' }}>self_improvement</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-container-max mx-auto px-6 mb-20">
          <div className="bg-surface-container-highest rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full" style={{ filter: 'blur(80px)' }} />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary rounded-full" style={{ filter: 'blur(80px)' }} />
            </div>
            <h2 className="font-headline-xl text-headline-xl mb-6 relative z-10">Host a Session</h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 relative z-10">
              Are you an expert or a passionate community member? We're always looking for new voices to contribute to our collective breath.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
              <button className="px-10 py-4 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-primary/90 transition-all">
                Apply as Speaker
              </button>
              <button className="px-10 py-4 bg-white border border-primary text-primary rounded-full font-bold hover:bg-primary-container/10 transition-all">
                Suggest a Topic
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
