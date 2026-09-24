import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const contentCards = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAg-0inrfgjDKpneXDio1RrfmhE5W8wovnNS7VnaNvhvGYnw6BxYmY8RDf2n6QZvXcjZVldF-iTamrCDR3PiniqYefYKbpzbRBTEtPn_SRcOd0_B-vHi87nMh-rbe7w-aRm4czvl0F0PcoN7ttxe5tLepFiDETnDChNyrAuSpnz3olNihRIkCcNSyUhSO3xrxNne-EJI-7Jv1gzbC9sV2W7jTzeD9sVKATY2yVdErmp0aVqXtwRm7-Ljw",
    badge: 'Paid', badgeStyle: 'bg-white/90 text-primary',
    tag: 'Workshop', tagDate: 'Oct 24, 2024', tagIcon: 'event',
    title: 'Deep Breathing for Anxiety',
    desc: 'A guided session focusing on somatic techniques to regulate the nervous system during stressful moments.',
    footerLeft: <div className="flex -space-x-2"><div className="w-8 h-8 rounded-full border-2 border-white bg-primary-fixed flex items-center justify-center text-[10px] font-bold">128+</div></div>,
    actions: [
      { icon: 'edit', hover: 'text-primary' },
      { icon: 'delete', hover: 'text-error' },
      { icon: 'more_vert', hover: 'text-primary' },
    ],
    status: null,
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB73dRQuHJ1QbOmE0Vpqe4gBBCNTR0J_655BBZytW5tIeYqs1sLBjcTH5DS-a_gV9bKWw1pLXh39wQZf-uXetvFdo1EsZLXr0mUvKDcdoGX_1MI_K6NsvYt9iu7Oj-eGCxFLybZC48NplD80lgQ2_xlBvaBeNNhRHXFWuQyffpDhBjvohSEioS1K5B_p57cNY8FPENozw51fMXPwqRzBmMHeJ3IshRJYCaItk45LsT4GB4lg0bpIOvzJA",
    badge: 'Free', badgeStyle: 'bg-primary/90 text-white',
    tag: 'Article', tagDate: '8 min read', tagIcon: 'schedule',
    title: 'The Art of Letting Go',
    desc: 'Exploring the psychological benefits of mindfulness and how it aids in emotional recovery and personal growth.',
    footerLeft: <div className="text-sm font-medium text-primary">Published</div>,
    actions: [
      { icon: 'visibility', hover: 'text-primary' },
      { icon: 'edit', hover: 'text-primary' },
      { icon: 'more_vert', hover: 'text-primary' },
    ],
    status: null,
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDejS5foUHSv80-fRqIs-L8JqWsC2ER-OgYCVpjpGWm0OLecFmpwupOPYLZ3xTJELYJys1qU0jsDESQmDSEQAgd1oLyCNL0A1SH3xmzWHgbCDYyhBsTiS4-RSLWoFoRwgnxyqfK5-_bPbYHNVNn13HTYKeaWJDwRsw9pmchkHb2FIEhP-j33Vtqu7Or99TcI9u0KqkpIE7rcwykN4WwYTfDtSDX3MF5pntmHXSZFEyGvwFrAZ6mDIdew",
    badge: 'Paid', badgeStyle: 'bg-white/90 text-primary',
    tag: 'Activity', tagDate: '45 spots left', tagIcon: 'group',
    title: 'Morning Flow & Reflection',
    desc: 'Start your day with gentle movement and intention-setting journaling to find your inner balance.',
    footerLeft: <div className="text-sm font-medium text-tertiary">Upcoming</div>,
    actions: [
      { icon: 'analytics', hover: 'text-primary' },
      { icon: 'edit', hover: 'text-primary' },
      { icon: 'more_vert', hover: 'text-primary' },
    ],
    status: null,
  },
];

export default function ManageContentEvents() {
  const [activeTab, setActiveTab] = useState('Workshops');

  return (
    <div className="font-body-md text-body-md antialiased bg-background overflow-x-hidden">
      <style>{`
        .organic-blob { position: absolute; z-index: -1; filter: blur(60px); opacity: 0.15; border-radius: 50%; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #c2c8c0; border-radius: 10px; }
      `}</style>

      {/* Background accents */}
      <div className="organic-blob bg-primary" style={{ width: '500px', height: '500px', top: '-16rem', left: '-8rem' }} />
      <div className="organic-blob bg-secondary-container" style={{ width: '400px', height: '400px', bottom: 0, right: 0 }} />

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface-container-low shadow-[4px_0_24px_rgba(139,168,142,0.05)] py-8 gap-2 z-40">
          <div className="px-6 mb-8">
            <h1 className="font-headline-md text-headline-md font-bold text-on-surface">Admin Panel</h1>
            <p className="text-on-surface-variant text-sm opacity-70">Management Console</p>
          </div>
          <nav className="flex-1 space-y-1">
            {[
              { icon: 'dashboard', label: 'Dashboard', to: '/admin' },
              { icon: 'group', label: 'Users', to: '/admin/therapists' },
              { icon: 'edit_note', label: 'Content', to: '/admin/content', active: true },
              { icon: 'analytics', label: 'Reports', to: '#' },
              { icon: 'settings', label: 'Settings', to: '#' },
            ].map((item) => (
              <Link key={item.label} to={item.to}
                className={`flex items-center mx-2 px-4 py-3 rounded-xl transition-colors scale-95 active:scale-100 ${item.active ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant hover:bg-surface-variant/50'}`}>
                <span className="material-symbols-outlined mr-3">{item.icon}</span>
                <span className="font-body-md">{item.label}</span>
              </Link>
            ))}
          </nav>
          <div className="mt-auto px-4">
            <Link to="/">
              <button className="w-full bg-primary text-on-primary py-3 rounded-full font-label-md flex items-center justify-center hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined mr-2">open_in_new</span>
                View Site
              </button>
            </Link>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 md:ml-64 p-6 md:p-6">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <nav className="flex text-sm text-outline mb-2">
                <span>Management</span>
                <span className="mx-2">/</span>
                <span className="text-primary font-semibold">Content &amp; Events</span>
              </nav>
              <h2 className="font-headline-xl text-headline-xl text-on-surface">Manage Library</h2>
            </div>
            <button className="text-white px-8 py-4 rounded-full font-label-md flex items-center justify-center shadow-lg hover:scale-[1.02] transition-transform active:scale-100 group"
              style={{ background: '#F4A261' }}>
              <span className="material-symbols-outlined mr-2 text-xl group-hover:rotate-90 transition-transform">add</span>
              CREATE NEW
            </button>
          </header>

          {/* Stats */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Active Events', value: '12', sub: '+3 this week', valueStyle: 'text-primary', subStyle: 'text-primary/60' },
              { label: 'Total Articles', value: '48', sub: 'Drafts: 5', valueStyle: 'text-on-surface', subStyle: 'text-outline-variant' },
              { label: 'Total Registrations', value: '312', sub: 'Live engagement', valueStyle: 'text-secondary', subStyle: 'text-secondary/60' },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30">
                <p className="text-outline text-sm uppercase tracking-wider mb-2">{stat.label}</p>
                <div className="flex items-end gap-3">
                  <span className={`text-4xl font-headline-xl ${stat.valueStyle}`}>{stat.value}</span>
                  <span className={`mb-1 text-sm font-semibold ${stat.subStyle}`}>{stat.sub}</span>
                </div>
              </div>
            ))}
          </section>

          {/* Tabs & Filters */}
          <section className="mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between border-b border-outline-variant/30 pb-4 gap-6">
              <div className="flex gap-8">
                {['Workshops', 'Articles', 'Activities'].map((tab) => (
                  <button key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative font-headline-md pb-4 transition-colors ${activeTab === tab ? 'text-primary' : 'text-outline hover:text-on-surface'}`}>
                    {tab}
                    {activeTab === tab && <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full" />}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                  <input
                    className="w-full pl-12 pr-4 py-3 bg-surface-container border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-body-md placeholder:text-outline-variant outline-none"
                    placeholder="Search workshops..."
                    type="text"
                  />
                </div>
                <button className="p-3 bg-surface-container rounded-2xl text-outline hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
                <div className="flex bg-surface-container p-1 rounded-2xl">
                  <button className="p-2 bg-white shadow-sm rounded-xl text-primary">
                    <span className="material-symbols-outlined">grid_view</span>
                  </button>
                  <button className="p-2 text-outline">
                    <span className="material-symbols-outlined">list</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Content Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentCards.map((card) => (
              <div key={card.title}
                className="bg-white rounded-[32px] overflow-hidden border border-outline-variant/20 shadow-[0_20px_40px_rgba(139,168,142,0.08)] group hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${card.img}')` }} />
                  <div className={`absolute top-4 right-4 ${card.badgeStyle} backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider`}>
                    {card.badge}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-medium">{card.tag}</span>
                    <span className="text-outline text-xs flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">{card.tagIcon}</span>
                      {card.tagDate}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-on-surface mb-2">{card.title}</h3>
                  <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">{card.desc}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                    {card.footerLeft}
                    <div className="flex gap-2">
                      {card.actions.map((action, i) => (
                        <button key={i} className={`p-2 text-outline ${action.hover} transition-colors`}>
                          <span className="material-symbols-outlined">{action.icon}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="w-full mt-20 border-t border-outline-variant/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20">
              <div className="space-y-4">
                <h3 className="font-headline-lg text-headline-lg font-bold text-primary">A Place to Breathe</h3>
                <p className="text-on-surface-variant opacity-80 leading-relaxed">Dedicated to providing safe, accessible, and supportive spaces for your emotional and mental well-being.</p>
              </div>
              <div>
                <h4 className="font-bold text-on-surface mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  <li><a className="text-on-surface-variant hover:text-primary transition-all hover:underline" href="#">Mission</a></li>
                  <li><Link className="text-on-surface-variant hover:text-primary transition-all hover:underline" to="/privacy">Privacy Policy</Link></li>
                  <li><a className="text-on-surface-variant hover:text-primary transition-all hover:underline" href="#">Terms of Service</a></li>
                  <li><Link className="text-primary font-bold hover:underline italic" to="/crisis">Crisis Support</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-on-surface mb-6">Connect</h4>
                <div className="flex gap-4 mb-6">
                  <a className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container hover:opacity-80 transition-opacity" href="#">
                    <span className="material-symbols-outlined text-xl">favorite</span>
                  </a>
                  <a className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container hover:opacity-80 transition-opacity" href="#">
                    <span className="material-symbols-outlined text-xl">chat</span>
                  </a>
                </div>
                <p className="text-sm text-outline">© 2024 A Place to Breathe. Your safe space for healing.</p>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Floating Crisis */}
      <Link to="/crisis"
        className="fixed bottom-8 right-8 z-50 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 font-crisis-link text-crisis-link hover:scale-105 transition-transform animate-pulse border-2 border-white/20"
        style={{ background: '#F4A261' }}>
        <span className="material-symbols-outlined">emergency_home</span>
        CRISIS SUPPORT
      </Link>
    </div>
  );
}
