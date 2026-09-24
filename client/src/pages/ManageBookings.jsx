import React from 'react';
import { Link } from 'react-router-dom';

const calendarDays = [
  { day: 29, prev: true }, { day: 30, prev: true },
  { day: 1, events: [{ label: 'Yoga Flow', color: 'bg-secondary-container/50 text-on-secondary-container' }] },
  { day: 2 },
  { day: 3, active: true, events: [
    { label: 'Breathwork', color: 'bg-primary-container text-white' },
    { label: 'Meditation', color: 'bg-secondary-container/50 text-on-secondary-container' },
  ]},
  { day: 4 }, { day: 5 },
  { day: 6 }, { day: 7 }, { day: 8 }, { day: 9 }, { day: 10 }, { day: 11 }, { day: 12 },
];

const AdminSidebar = ({ active }) => (
  <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low shadow-[4px_0_24px_rgba(139,168,142,0.05)] z-50 flex flex-col py-8 gap-2">
    <div className="px-6 mb-8">
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface">Admin Panel</h1>
      <p className="text-xs text-on-surface-variant/70 uppercase tracking-widest font-semibold mt-1">Management Console</p>
    </div>
    <nav className="flex-1 space-y-1">
      {[
        { icon: 'dashboard', label: 'Dashboard', to: '/admin' },
        { icon: 'event_available', label: 'Bookings', to: '/admin/bookings' },
        { icon: 'group', label: 'Users', to: '/admin/therapists' },
        { icon: 'analytics', label: 'Reports', to: '#' },
        { icon: 'settings', label: 'Settings', to: '#' },
      ].map((item) => (
        <Link
          key={item.label}
          to={item.to}
          className={`mx-2 px-4 py-3 rounded-xl flex items-center gap-3 transition-colors scale-95 active:scale-100 ${active === item.label ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant hover:bg-surface-variant/50'}`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span className="font-body-md">{item.label}</span>
        </Link>
      ))}
    </nav>
    <div className="mt-auto px-4">
      <div className="p-4 bg-surface-container rounded-2xl flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden">
          <img className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1NVogAPoXb8DBqjZ7xhzONIKVi31AxfaSkcx4Do93uJvEXFhs52hml074jYhisWv2BN1nTkMWc_EnQX_SwFuZv1BdlMYqRhig8_e12lNijbmj2OiyEX_yi8Zi5Y0YXUqDV2zt_I2GUhzjQiwe4k22vyyQ7RRMuvzK1lTwXbkzqMRMIntfD4cl9m8AePkySwkYCenv5vDqOY2OI5tiZfjLzV-Mf_4ziE80Ds-eKCL_Z8LiO50eNam_uQ"
            alt="Admin" />
        </div>
        <div>
          <p className="text-sm font-bold">Admin Profile</p>
          <p className="text-xs text-on-surface-variant">View Site</p>
        </div>
      </div>
    </div>
  </aside>
);

export default function ManageBookings() {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-secondary-container">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #c2c8c0; border-radius: 10px; }
        .calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); }
        .cal-day:hover { transform: translateY(-2px); transition: transform 0.2s ease; }
      `}</style>

      <AdminSidebar active="Bookings" />

      <main className="ml-64 min-h-screen relative overflow-hidden">
        {/* Organic blobs */}
        <div className="absolute bg-primary-container w-[500px] h-[500px] -top-48 -right-24 rounded-full pointer-events-none"
          style={{ filter: 'blur(80px)', opacity: 0.15, zIndex: -1 }} />
        <div className="absolute bg-secondary-container w-[400px] h-[400px] top-1/2 -left-32 rounded-full pointer-events-none"
          style={{ filter: 'blur(80px)', opacity: 0.15, zIndex: -1 }} />

        {/* Header */}
        <header className="px-6 pt-12 pb-8 flex justify-between items-end">
          <div>
            <h2 className="font-headline-xl text-headline-xl text-on-background">Manage Bookings</h2>
            <p className="text-on-surface-variant text-body-lg max-w-xl mt-2">
              Oversee upcoming sessions, coordinate schedules, and nurture the community through seamless booking management.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-surface-container-high text-on-surface-variant px-6 py-3 rounded-full font-label-md flex items-center gap-2 hover:bg-surface-container transition-colors shadow-sm">
              <span className="material-symbols-outlined text-[20px]">filter_list</span>
              Filter
            </button>
            <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md flex items-center gap-2 hover:opacity-90 transition-opacity shadow-md">
              <span className="material-symbols-outlined text-[20px]">add</span>
              New Session
            </button>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="px-6 pb-20 grid grid-cols-12 gap-6">

          {/* Calendar (8 cols) */}
          <section className="col-span-12 lg:col-span-8 rounded-[32px] p-8 border border-outline-variant/30 shadow-sm"
            style={{ background: 'rgba(251,249,245,0.6)', backdropFilter: 'blur(12px)' }}>
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-headline-md text-headline-md">Session Calendar</h3>
              <div className="flex items-center gap-4 bg-surface-container-low p-1 rounded-full border border-outline-variant/20">
                <button className="p-2 hover:bg-white rounded-full transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <span className="font-label-md px-2">October 2024</span>
                <button className="p-2 hover:bg-white rounded-full transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>

            {/* Day Headers */}
            <div className="calendar-grid gap-2 text-center mb-2">
              {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d) => (
                <div key={d} className="text-xs font-bold text-on-surface-variant/50 uppercase tracking-tighter">{d}</div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="calendar-grid gap-2">
              {calendarDays.map((d, i) => (
                <div key={i}
                  className={`h-28 rounded-2xl border p-2 shadow-[0_4px_12px_rgba(0,0,0,0.02)] cal-day cursor-pointer
                    ${d.prev ? 'bg-surface-container-lowest/40 border-outline-variant/10 opacity-30' : ''}
                    ${!d.prev && !d.active ? 'bg-white border-outline-variant/30' : ''}
                    ${d.active ? 'bg-white border-primary/40 ring-1 ring-primary/20' : ''}
                  `}>
                  <span className={`text-sm font-semibold ${d.active ? 'text-primary font-bold' : ''}`}>{d.day}</span>
                  {d.events && (
                    <div className="mt-1 flex flex-col gap-1">
                      {d.events.map((ev) => (
                        <div key={ev.label} className={`${ev.color} text-[10px] p-1 rounded leading-none truncate`}>{ev.label}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Pending Approvals (4 cols) */}
          <section className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <div className="bg-secondary-container/20 backdrop-blur-md rounded-[32px] p-8 border border-outline-variant/30 flex-1">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline-md text-headline-md text-on-secondary-container">Pending Approvals</h3>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold">4</span>
              </div>
              <div className="space-y-4">
                {/* Request 1 */}
                <div className="bg-white/80 p-5 rounded-2xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfzZ424K7_Gcvo77Bw5-g3pOWGfQ1y3Q4OveTPjkXlUl73sTrzPLHMw-ynk-Y9zfbjtUswQY4-HGg5NdOoncEq8qFo_xyZ1MKQAxaHih7SvPQ455y5zMUDMJ2-EboYg93XN44goJULXqzX00dYHzINhQYKTHayDVsXrWRdEJZAccKl79LUzraZexvZXBI8ZU_m8ImUyvTJgmAfmXIKOBFwvXw-ZZ_dH5CF2zwJ6dIObG91yR1RgVKfIg"
                        alt="Elena" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">Elena Richardson</p>
                      <p className="text-xs text-on-surface-variant">Private Healing Session</p>
                      <div className="flex items-center gap-2 mt-2 text-[10px] text-primary font-semibold">
                        <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                        Oct 12, 10:00 AM
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-primary text-on-primary py-2 rounded-xl text-xs font-bold hover:opacity-90 transition-opacity">Approve</button>
                    <button className="flex-1 bg-surface-container py-2 rounded-xl text-xs font-bold hover:bg-surface-variant transition-colors">Decline</button>
                  </div>
                </div>

                {/* Request 2 */}
                <div className="bg-white/80 p-5 rounded-2xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1X1DCnqsnEOqgmU5Di4gRA9LEIVGLvD9gOGKnR9aLh5uRL4vUdGCSaBpgnEQfwXvg3XZYabJ2WzaiekNBJGnsn-M27GVTIMbEHQyUAChzR46tyZwsNrMXuvJJtHW49ExcX-FTfhxaqYhLA9x1r30j41pE5980yfducduLFe_9yBsjb_j8guQwekEDAYu4HMa4ilLuoy_JvDojJZ7DTV5TLidYCss72VCIYs588pYHklsRBITwl79dRw"
                        alt="Marcus" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">Marcus Chen</p>
                      <p className="text-xs text-on-surface-variant">Group Workshop: Foundations</p>
                      <div className="flex items-center gap-2 mt-2 text-[10px] text-primary font-semibold">
                        <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                        Oct 15, 04:30 PM
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-primary text-on-primary py-2 rounded-xl text-xs font-bold hover:opacity-90 transition-opacity">Approve</button>
                    <button className="flex-1 bg-surface-container py-2 rounded-xl text-xs font-bold hover:bg-surface-variant transition-colors">Decline</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Upcoming Sessions Table (12 cols) */}
          <section className="col-span-12 bg-surface-container-low rounded-[32px] p-8 border border-outline-variant/20">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-headline-md text-headline-md">Upcoming Sessions List</h3>
              <div className="flex gap-2">
                <button className="bg-white text-on-surface px-4 py-2 rounded-full text-sm font-semibold border border-outline-variant/30 hover:shadow-sm transition-shadow">All</button>
                <button className="bg-white/50 text-on-surface-variant px-4 py-2 rounded-full text-sm font-semibold border border-outline-variant/10">Workshops</button>
                <button className="bg-white/50 text-on-surface-variant px-4 py-2 rounded-full text-sm font-semibold border border-outline-variant/10">1-on-1</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest border-b border-outline-variant/20">
                    <th className="pb-4 font-semibold">Client / Participant</th>
                    <th className="pb-4 font-semibold">Session Type</th>
                    <th className="pb-4 font-semibold">Date &amp; Time</th>
                    <th className="pb-4 font-semibold">Status</th>
                    <th className="pb-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {[
                    { initials: 'SJ', bg: 'bg-secondary-container/30', color: 'text-secondary', name: 'Sarah Jenkins', email: 'sarah.j@email.com', type: 'Morning Meditation', dateLabel: 'Tomorrow', time: '08:00 AM - 09:00 AM' },
                    { initials: 'DA', bg: 'bg-tertiary-fixed/30', color: 'text-tertiary', name: 'David Ames', email: 'd.ames@company.co', type: 'Integrative Breathwork', dateLabel: 'Oct 5, 2024', time: '02:30 PM - 03:30 PM' },
                  ].map((row) => (
                    <tr key={row.name} className="group hover:bg-white/40 transition-colors cursor-pointer">
                      <td className="py-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full ${row.bg} flex items-center justify-center font-bold ${row.color}`}>{row.initials}</div>
                          <div>
                            <p className="font-bold text-sm">{row.name}</p>
                            <p className="text-xs text-on-surface-variant">{row.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 text-sm text-on-surface-variant">{row.type}</td>
                      <td className="py-6">
                        <p className="text-sm font-bold">{row.dateLabel}</p>
                        <p className="text-xs text-on-surface-variant">{row.time}</p>
                      </td>
                      <td className="py-6">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Confirmed</span>
                      </td>
                      <td className="py-6 text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 hover:bg-white rounded-lg transition-colors text-on-surface-variant" title="Reschedule">
                            <span className="material-symbols-outlined text-[20px]">schedule</span>
                          </button>
                          <button className="p-2 hover:bg-white rounded-lg transition-colors text-on-surface-variant" title="Message">
                            <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                          </button>
                          <button className="p-2 hover:bg-white rounded-lg transition-colors text-error" title="Cancel">
                            <span className="material-symbols-outlined text-[20px]">cancel</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Floating Crisis */}
        <div className="fixed bottom-8 right-8 z-[100]">
          <Link to="/crisis"
            className="bg-error-container text-on-error-container px-6 py-4 rounded-full font-crisis-link text-crisis-link shadow-xl border border-error/20 flex items-center gap-3 animate-pulse hover:animate-none transition-all hover:scale-105 active:scale-95">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
            Crisis Support
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="ml-64 bg-surface-container border-t border-outline-variant/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-20 max-w-container-max mx-auto">
          <div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-primary">A Place to Breathe</h2>
            <p className="mt-4 text-on-surface-variant text-body-md leading-relaxed">Nurturing emotional refuge through digital tranquility and mindful connection.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-on-surface uppercase tracking-widest text-xs">Resources</h4>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-body-md hover:underline" href="#">Mission</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-body-md hover:underline" href="#">Community Guidelines</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-body-md hover:underline" href="#">Workshop Archive</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-on-surface uppercase tracking-widest text-xs">Legal</h4>
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-body-md hover:underline" to="/privacy">Privacy Policy</Link>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-body-md hover:underline" href="#">Terms of Service</a>
            <Link className="text-primary font-bold text-body-md hover:underline" to="/crisis">Crisis Support</Link>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-6 pb-12 border-t border-outline-variant/10 pt-8 flex justify-between items-center text-xs text-on-surface-variant/60">
          <p>© 2024 A Place to Breathe. Your safe space for healing.</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[18px]">public</span>
            <span className="material-symbols-outlined text-[18px]">favorite</span>
            <span className="material-symbols-outlined text-[18px]">eco</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
