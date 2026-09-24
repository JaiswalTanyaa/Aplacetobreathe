import React from 'react';
import { Link } from 'react-router-dom';

const therapists = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-3VK76YE8SJsmevbyTs726VsE2DU2FkpT8ZoS9zJ-fzJUXd65ismsSQzcsMW-MZ0vfE_hAI-CdZ-Js5Pzj1mt_fe5sUynjDe0nCQkjwJieQO3O5hzuSnvGTJ29i3A8VjyUjEf8k9LEsfVOhhXjiyHvjUsMGyljdHZszvi3a7nm4yZ3vsi25PtGurwoRQ3cwfsfzIXeoy4NRTX3WFvsFqWiphWxcY2fydwWO33nU-RbYLQvzc7Ivs3jQ',
    statusColor: 'bg-primary',
    name: 'Dr. Julian Rivers', role: 'Clinical Psychologist',
    tags: ['Anxiety', 'Mindfulness'],
    days: 'Mon, Wed, Fri', price: '$120',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAukkla2LgUrPA-l4YGhiTwHog0P28p22eEWqUaWTEPPdjEfpgosQsGWlm3U6r0JmEvq8rRYRTr8QxH--PR8Teel3JEGMdMutyY-GxdJnezjVDTu8kuV7gHkPgwjGe4XjbMfkH6wA6Xxl3yVrU1u6meMxt9Dt9wL10xtOZZ9fLRLFFp9yEzs7RJ8RokkX7rbdxnBy9CwB3MAO5EYlczm2mHg0at1qF_TNItMdSDD5WmEObDIIAGPfHyFQ',
    statusColor: 'bg-tertiary-container',
    name: 'Maya Sterling', role: 'Trauma Specialist',
    tags: ['CBT', 'Grief Recovery'],
    days: 'Tue, Thu, Sat', price: '$145',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbpUv7SBDoB0e_VUNGxBKbVpiLXI5deEajTg91224aPSTaOEd8hZOH5kqMvwMI9x5F5OP4c8mAPDF7pzXP2S1V2e1Vie7qIAiGKj89gT3r5TmATyxWLHDQK7q6-sfAxnuo3gDZvdSHHMqpYPkpG3nwQkTPMjYAV5952kths-QO6qPruyQEcevV9YpS1cC658Uwj5TEvJqY7f-p2BP-C9grDTkHK7KwHmaQwxZCumRnELRRC2Sy_Azrw',
    statusColor: 'bg-primary',
    name: 'Arthur Vance', role: 'LCSW Counselor',
    tags: ['Relationships', 'Self-Esteem'],
    days: 'Daily (PM)', price: '$110',
  },
];

export default function ManageTherapists() {
  return (
    <div className="font-body-md text-body-md bg-background" style={{ overflowX: 'hidden' }}>
      <style>{`
        .organic-blob { position: fixed; z-index: -1; filter: blur(80px); opacity: 0.4; border-radius: 50%; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #c2c8c0; border-radius: 10px; }
        .therapist-row:hover { transform: translateY(-2px); transition: transform 0.2s ease; }
      `}</style>

      {/* Background blobs */}
      <div className="organic-blob bg-primary-fixed" style={{ width: '500px', height: '500px', top: '-16rem', right: '-8rem' }} />
      <div className="organic-blob bg-secondary-fixed" style={{ width: '400px', height: '400px', bottom: 0, left: '-8rem' }} />

      {/* Sidebar */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low flex flex-col py-8 gap-2 shadow-[4px_0_24px_rgba(139,168,142,0.05)] z-40 transition-all duration-300 ease-in-out">
        <div className="px-6 mb-10">
          <h1 className="font-headline-md text-headline-md font-bold text-on-surface">Admin Panel</h1>
          <p className="text-on-surface-variant text-sm opacity-70">Management Console</p>
        </div>
        <nav className="flex-grow">
          {[
            { icon: 'dashboard', label: 'Dashboard', to: '/admin' },
            { icon: 'group', label: 'Users', to: '/admin/therapists', active: true, filled: true },
            { icon: 'edit_note', label: 'Content', to: '/admin/content' },
            { icon: 'analytics', label: 'Reports', to: '#' },
            { icon: 'settings', label: 'Settings', to: '#' },
          ].map((item) => (
            <Link key={item.label} to={item.to}
              className={`flex items-center gap-3 mx-2 px-4 py-3 rounded-xl transition-colors scale-95 active:scale-100 ${item.active ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant hover:bg-surface-variant/50'}`}>
              <span className="material-symbols-outlined" style={item.filled ? { fontVariationSettings: "'FILL' 1" } : {}}>{item.icon}</span>
              <span className={item.active ? 'font-semibold' : ''}>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="px-4 mt-auto">
          <Link to="/">
            <button className="w-full bg-primary text-on-primary py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
              View Site
            </button>
          </Link>
          <div className="flex items-center gap-3 mt-6 p-2 bg-surface-container rounded-xl">
            <img className="w-10 h-10 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfWjvhtYkt2ioAXpKFXuATg45tQ3DNvaVpnxtD_HkxqXjk-EuzXY5bBXNLAQhY3fRfbKdQ6jcCnxwMf-0ljfz0ARIWs2kqKoZC3MrZBSQjOtiZmzYhcEaMcsCudYGh-gmDeXZQcKIabftntY1bXTw-L1iR7xPBCK4lzEOLg_AJ8e7M8iraQnAY2tAupDJ6T8mEOlNO0TSDshzqD9kmbHvh4Ti4HVsaU4X7-Apt6slUu9kC2y046etUSA"
              alt="Admin" />
            <div className="overflow-hidden">
              <p className="text-xs font-bold truncate text-on-surface">Admin Profile</p>
              <p className="text-[10px] text-on-surface-variant truncate">Management</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-64 min-h-screen p-6 max-w-container-max">

        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 mb-10">
          <div>
            <h2 className="font-headline-xl text-headline-xl text-primary mb-2">Manage Therapists</h2>
            <p className="text-on-surface-variant max-w-2xl">Review and update the profiles of our healing partners. Maintain the quality and warmth of our community of experts.</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 group">
            <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">add</span>
            <span className="font-semibold">Add New Therapist</span>
          </button>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: 'psychology', iconBg: 'bg-primary/10 text-primary', label: 'Active Therapists', value: '42' },
            { icon: 'event_available', iconBg: 'bg-secondary/10 text-secondary', label: 'Avg. Availability', value: '88%' },
            { icon: 'star', iconBg: 'bg-tertiary-container/20 text-tertiary', label: 'Community Rating', value: '4.9/5' },
          ].map((stat) => (
            <div key={stat.label} className="bg-surface-container-low p-6 rounded-[2rem] border border-outline-variant/30 shadow-sm flex items-center gap-4">
              <div className={`w-14 h-14 rounded-full ${stat.iconBg} flex items-center justify-center`}>
                <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
              </div>
              <div>
                <p className="text-on-surface-variant text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-on-surface">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="bg-surface/50 backdrop-blur-md sticky top-0 py-4 mb-6 z-10 flex items-center gap-4">
          <div className="relative flex-grow">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input
              className="w-full bg-surface-container-lowest border-none rounded-full pl-12 pr-6 py-3 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline-variant transition-all outline-none"
              placeholder="Search by name, specialty, or mood focus..."
              type="text"
            />
          </div>
          <button className="flex items-center gap-2 px-5 py-3 rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-xl">tune</span>
            <span className="text-sm font-semibold">Filter</span>
          </button>
        </div>

        {/* Therapist Table */}
        <div className="bg-surface-container-lowest rounded-[2rem] shadow-sm overflow-hidden border border-outline-variant/20">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50 border-b border-outline-variant/10 text-left">
                  {['Therapist', 'Focus Areas', 'Availability', 'Pricing', 'Actions'].map((h, i) => (
                    <th key={h} className={`px-8 py-5 font-semibold text-on-surface-variant text-sm uppercase tracking-wider ${i === 4 ? 'text-right' : ''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {therapists.map((t) => (
                  <tr key={t.name} className="group hover:bg-surface-container-low/30 transition-colors therapist-row cursor-pointer">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img className="w-12 h-12 rounded-full object-cover" src={t.img} alt={t.name} />
                          <div className={`absolute bottom-0 right-0 w-3 h-3 ${t.statusColor} border-2 border-white rounded-full`} />
                        </div>
                        <div>
                          <p className="font-bold text-on-surface">{t.name}</p>
                          <p className="text-xs text-on-surface-variant">{t.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-wrap gap-2">
                        {t.tags.map((tag) => (
                          <span key={tag} className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-sm">calendar_today</span>
                        <span className="text-sm">{t.days}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <p className="font-semibold text-on-surface">{t.price}<span className="text-xs text-outline-variant font-normal"> / session</span></p>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-outline hover:text-primary hover:bg-primary/10 rounded-lg transition-all" title="Edit Profile">
                          <span className="material-symbols-outlined">edit</span>
                        </button>
                        <button className="p-2 text-outline hover:text-error hover:bg-error/10 rounded-lg transition-all" title="Remove">
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Pagination Footer */}
          <div className="px-8 py-6 bg-surface-container-low/30 border-t border-outline-variant/10 flex justify-between items-center">
            <p className="text-sm text-on-surface-variant">Showing 3 of 42 therapists</p>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-outline hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-primary text-primary bg-primary-container/20 font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-outline hover:bg-surface-container-high transition-colors">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-outline hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Crisis */}
        <div className="fixed bottom-8 right-8 z-50">
          <Link to="/crisis"
            className="bg-error-container text-on-error-container px-6 py-3 rounded-full font-crisis-link text-crisis-link shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border-2 border-error/20 animate-pulse">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>emergency_home</span>
            Crisis Support
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="ml-64 mt-20 bg-surface-container py-20" style={{ width: 'calc(100% - 16rem)' }}>
        <div className="max-w-container-max mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="font-headline-lg text-headline-lg font-bold text-primary">A Place to Breathe</h3>
            <p className="text-on-surface-variant font-body-md">Your safe space for healing and management. Providing tools to create a more mindful world, one session at a time.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-on-surface mb-2">Management Links</h4>
            <a className="text-on-surface-variant hover:text-primary transition-all hover:underline" href="#">Mission</a>
            <Link className="text-on-surface-variant hover:text-primary transition-all hover:underline" to="/privacy">Privacy Policy</Link>
            <a className="text-on-surface-variant hover:text-primary transition-all hover:underline" href="#">Terms of Service</a>
            <Link className="text-primary font-bold hover:underline" to="/crisis">Crisis Support</Link>
          </div>
          <div className="flex flex-col justify-between items-start md:items-end">
            <div className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">share</span>
              </span>
              <span className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">mail</span>
              </span>
            </div>
            <p className="text-sm text-outline-variant mt-8 text-right">© 2024 A Place to Breathe. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
