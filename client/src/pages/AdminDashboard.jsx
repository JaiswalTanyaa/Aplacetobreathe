import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="font-body-md text-body-md bg-background min-h-screen relative overflow-x-hidden">

      {/* Organic Blobs */}
      <div className="organic-blob w-[500px] h-[500px] bg-secondary-container rounded-full absolute"
        style={{ top: '-12rem', left: '-12rem', filter: 'blur(80px)', opacity: 0.4, zIndex: -1, animation: 'pulse 15s infinite alternate ease-in-out' }} />
      <div className="organic-blob w-[400px] h-[400px] bg-primary-fixed rounded-full absolute"
        style={{ top: '50%', right: '-6rem', filter: 'blur(80px)', opacity: 0.4, zIndex: -1, animation: 'pulse 15s infinite alternate ease-in-out' }} />

      <style>{`
        @keyframes pulse {
          0%   { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.2) translate(5%, 5%); }
        }
        .glass-card {
          background: rgba(255,255,255,0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .glass-card:hover { transform: translateY(-4px); }
      `}</style>

      {/* Side Nav */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low shadow-[4px_0_24px_rgba(139,168,142,0.05)] flex flex-col py-8 gap-2 z-50">
        <div className="px-6 mb-10">
          <h1 className="font-headline-md text-headline-md font-bold text-on-surface">Admin Panel</h1>
          <p className="text-on-surface-variant/70 text-sm">Management Console</p>
        </div>
        <nav className="flex-1 space-y-1">
          <a href="#" className="bg-primary-container text-on-primary-container rounded-xl mx-2 px-4 py-3 flex items-center gap-3">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-body-md">Dashboard</span>
          </a>
          <a href="#" className="text-on-surface-variant mx-2 px-4 py-3 hover:bg-surface-variant/50 rounded-xl flex items-center gap-3">
            <span className="material-symbols-outlined">group</span>
            <span className="font-body-md">Users</span>
          </a>
          <a href="#" className="text-on-surface-variant mx-2 px-4 py-3 hover:bg-surface-variant/50 rounded-xl flex items-center gap-3">
            <span className="material-symbols-outlined">edit_note</span>
            <span className="font-body-md">Content</span>
          </a>
          <a href="#" className="text-on-surface-variant mx-2 px-4 py-3 hover:bg-surface-variant/50 rounded-xl flex items-center gap-3">
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-body-md">Reports</span>
          </a>
          <a href="#" className="text-on-surface-variant mx-2 px-4 py-3 hover:bg-surface-variant/50 rounded-xl flex items-center gap-3">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-body-md">Settings</span>
          </a>
        </nav>
        <div className="px-4 mt-auto">
          <Link to="/">
            <button className="w-full py-3 bg-secondary-container text-on-secondary-container rounded-full font-label-md flex items-center justify-center gap-2 hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined text-sm">visibility</span>
              View Site
            </button>
          </Link>
          <div className="mt-6 flex items-center gap-3 px-2">
            <img
              className="w-10 h-10 rounded-full object-cover border-2 border-primary-container"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9YgvfViRbcCO00cKgCHf9dRgLi2HhloyFtu9ATegKJ-ti1myk-gUtLXIMSIgRjjt6vIaIFnsiCYw6mS7VjQx4zzBlUPkRDBB8-lj4NROPygUWnTGTixEm4ZZd00u12O5t2xYwJ3Y3do9aUBDQskKdsmVEcqggfScdYmCpIg_agMT7lExRwByHmrNy9NgEbauZ7rzHlJVEZee6Sa0Lcnc7jq1bEENLDT8gmMwcUg41qbj0n1Y7llNs7g"
              alt="Admin Profile"
            />
            <div>
              <p className="text-sm font-semibold text-on-surface">Admin Profile</p>
              <p className="text-xs text-on-surface-variant">System Manager</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-6 max-w-container-max mx-auto min-h-screen">

        {/* Header */}
        <header className="flex justify-between items-end mb-12 pt-8">
          <div>
            <h2 className="font-headline-xl text-headline-xl text-primary mb-2">Welcome back, Admin.</h2>
            <p className="text-body-lg text-on-surface-variant">Here is a snapshot of the sanctuary today.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full border border-outline-variant text-primary font-label-md hover:bg-surface-container transition-colors">
              Download Report
            </button>
            <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-label-md hover:shadow-lg transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">add</span>
              New Event
            </button>
          </div>
        </header>

        {/* Metrics Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {/* Active Users */}
          <div className="glass-card p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary-container/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">group</span>
              </div>
              <span className="text-primary font-bold text-sm">+12%</span>
            </div>
            <p className="text-on-surface-variant font-label-md uppercase tracking-wider mb-1">Active Users</p>
            <h3 className="text-headline-lg font-headline-lg text-on-surface">1,284</h3>
            <div className="mt-4 w-full bg-outline-variant/30 h-1 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-3/4 rounded-full" />
            </div>
          </div>

          {/* Bookings */}
          <div className="glass-card p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">calendar_month</span>
              </div>
              <span className="text-secondary font-bold text-sm">+5%</span>
            </div>
            <p className="text-on-surface-variant font-label-md uppercase tracking-wider mb-1">Bookings</p>
            <h3 className="text-headline-lg font-headline-lg text-on-surface">85</h3>
            <div className="mt-4 flex gap-1">
              <div className="h-8 w-full bg-secondary-container/50 rounded-sm" />
              <div className="h-10 w-full bg-secondary-container/50 rounded-sm" />
              <div className="h-6 w-full bg-secondary-container/50 rounded-sm" />
              <div className="h-12 w-full bg-secondary rounded-sm" />
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="glass-card p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">event</span>
              </div>
              <span className="text-tertiary font-bold text-sm">3 Today</span>
            </div>
            <p className="text-on-surface-variant font-label-md uppercase tracking-wider mb-1">Upcoming Events</p>
            <h3 className="text-headline-lg font-headline-lg text-on-surface">24</h3>
            <p className="text-xs text-on-surface-variant mt-4 italic">Next: Breathwork Workshop @ 2PM</p>
          </div>

          {/* Pending Requests */}
          <div className="glass-card p-8 rounded-[32px] border-2 border-tertiary/20 shadow-sm hover:shadow-md transition-all duration-300 bg-tertiary-fixed/10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-error-container flex items-center justify-center text-error">
                <span className="material-symbols-outlined">pending_actions</span>
              </div>
              <div className="px-2 py-1 bg-error/10 text-error rounded text-[10px] font-bold">URGENT</div>
            </div>
            <p className="text-on-surface-variant font-label-md uppercase tracking-wider mb-1">Pending Requests</p>
            <h3 className="text-headline-lg font-headline-lg text-on-surface">12</h3>
            <button className="mt-4 text-primary font-bold text-sm flex items-center gap-1 hover:underline">
              Review all <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </button>
          </div>
        </section>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Community Activity Table */}
          <section className="lg:col-span-2 glass-card rounded-[32px] overflow-hidden p-8">
            <div className="flex justify-between items-center mb-8">
              <h4 className="font-headline-md text-headline-md text-on-surface">Community Pulse</h4>
              <select className="bg-surface-container-low border-none rounded-full text-sm font-label-md text-on-surface-variant px-4 py-2 ring-1 ring-outline-variant/30">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="space-y-6">
              {/* Row 1 */}
              <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-surface-container-low transition-colors">
                <img className="w-12 h-12 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAyFLBrDDaXZABL3b2qIFGfJVJAaDjv2-_YCnff41gfb8XHZ0RORO-rooS7qakRM1T-kAzPd43MrQqKCHXsFZV09S-qOaIp7TpEWqUQlXOpoWOF0-nu4xiTzIu_cBiGEH_tIoLL_LXaxnnpgx3NkHh6StgS4tMQrxgq3pIv5l5OBoz5y-pyYyNggUwyHXjKXO4skzAF_o0tzr_xHTYxu4dR4iGrBwrgcDkrOlBMA-tZsZoq7O99mIe2w"
                  alt="Sarah Jenkins" />
                <div className="flex-1">
                  <h5 className="font-semibold text-on-surface">Sarah Jenkins</h5>
                  <p className="text-sm text-on-surface-variant">Completed "Ocean Breath" Workshop</p>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-label-md text-outline">12 mins ago</span>
                  <span className="text-[10px] px-2 py-0.5 bg-primary-container/20 text-primary rounded-full">Success</span>
                </div>
              </div>
              {/* Row 2 */}
              <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-surface-container-low transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary font-bold">MK</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-on-surface">Marcus Kane</h5>
                  <p className="text-sm text-on-surface-variant">Requested 1-on-1 Crisis Support</p>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-label-md text-outline">45 mins ago</span>
                  <span className="text-[10px] px-2 py-0.5 bg-error-container text-error rounded-full">High Priority</span>
                </div>
              </div>
              {/* Row 3 */}
              <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-surface-container-low transition-colors">
                <img className="w-12 h-12 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl8zkUCs2l4wxm5ponArXATlc0vG3MSihprPPsJxdXmLw9iWUGseDS3Dac2EDdUzOhh6LHW8f7IWV0ZSuaQfHgfaelFb0-O9gTiGMgUmrRs0GLmWLm2VTW_uPomokqjSt6Rw3WZ5LjNQpvveZ88jYlxRuCgKP0Ua-UmhqRGyNGPVzoHOrCyAHIBO9GWQyX-NbjVjbcKKcKES2Qn1KeXp6lo2ZNL8kZnl9laKlHvLfHWjju2ByT34JfKw"
                  alt="Leo Davids" />
                <div className="flex-1">
                  <h5 className="font-semibold text-on-surface">Leo Davids</h5>
                  <p className="text-sm text-on-surface-variant">Posted in "New Beginnings" Circle</p>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-label-md text-outline">2 hours ago</span>
                  <span className="text-[10px] px-2 py-0.5 bg-outline-variant/40 text-on-surface-variant rounded-full">Engagement</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-8 py-3 text-primary font-semibold hover:bg-primary/5 rounded-2xl transition-all">
              View All Activity
            </button>
          </section>

          {/* Right Aside */}
          <aside className="space-y-6">
            {/* System Status */}
            <div className="bg-primary-container p-8 rounded-[32px] text-on-primary-container relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-headline-md text-headline-md mb-2">System Health</h4>
                <p className="text-sm opacity-90 mb-6">Everything is breathing smoothly today.</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-on-primary-container animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest">Servers Operational</span>
                </div>
                <button className="w-full py-3 bg-on-primary-container text-primary-container rounded-full font-bold text-sm">
                  Manage Infrastructure
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-10">
                <span className="material-symbols-outlined" style={{ fontSize: '150px' }}>cloud_done</span>
              </div>
            </div>

            {/* Workshop Live Now */}
            <div className="glass-card p-8 rounded-[32px]">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-semibold text-on-surface">Live Now</h4>
                <span className="w-2 h-2 rounded-full bg-error animate-ping" />
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-surface-container rounded-2xl">
                  <p className="text-xs font-bold text-secondary uppercase mb-1">Workshop</p>
                  <h5 className="font-semibold text-on-surface mb-2">Morning Mindfulness</h5>
                  <div className="flex justify-between text-xs text-on-surface-variant">
                    <span>34 Participants</span>
                    <span>12:30 - 13:30</span>
                  </div>
                </div>
                <div className="p-4 border border-outline-variant rounded-2xl border-dashed flex flex-col items-center justify-center py-8">
                  <span className="material-symbols-outlined text-outline mb-2">add_circle</span>
                  <p className="text-sm text-outline font-medium">Add Quick Session</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="w-full mt-20 border-t border-outline-variant/10 pt-10 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-headline-lg text-headline-lg font-bold text-primary mb-4">A Place to Breathe</h3>
              <p className="text-on-surface-variant text-sm max-w-xs">Admin Console for management of the digital sanctuary and emotional refuge platform.</p>
            </div>
            <div className="flex gap-12">
              <div className="space-y-4">
                <p className="font-bold text-on-surface">Platform</p>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li><a className="hover:text-primary transition-colors" href="#">Mission</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-on-surface">Support</p>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li><a className="hover:text-primary transition-colors text-primary font-bold" href="#">Crisis Support</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Documentation</a></li>
                </ul>
              </div>
            </div>
            <div className="md:text-right">
              <p className="text-on-surface-variant text-sm">© 2024 A Place to Breathe.<br />Your safe space for healing.</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating Emergency Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center group hover:scale-110 transition-transform active:scale-95 z-[60]"
        style={{ background: '#F4A261', color: '#fff' }}>
        <span className="material-symbols-outlined text-3xl group-hover:animate-pulse">emergency_share</span>
        <span className="absolute -top-12 right-0 text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: '#F4A261' }}>QUICK ALERT</span>
      </button>
    </div>
  );
}
