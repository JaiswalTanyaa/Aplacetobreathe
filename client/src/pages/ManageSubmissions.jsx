import React from 'react';
import { Link } from 'react-router-dom';

const submissions = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCphd9dVvi_7wX-p-_Xri8deeMKNDvydjFHTxS5LwCsu9m0ArUfXzS4-G9ptoGrLhvimGPcU0mOGNfsr3SABGry_WyQu_PZGfVOPsS7NdBATKO9pi9MJSPHIBCVMVEmO3eUT1fM9nxD8H8lMFOoq0gW50EVtzg4WJ3OkidOIJJ7mz1TVIupWbVCmdaTpf177l5owLVpaSMp3BkVl4Kg-O3VoSkxuOT1VMcRaL8W4nFtzNB35cVxlDMFJA',
    imgAlt: 'Forest trail',
    tag: 'Recommendation', tagStyle: 'bg-secondary-container text-on-secondary-container',
    meta: '2 hours ago • Submitted by Sarah L.',
    title: '"Breath of the Wild" Guided Walk',
    body: "I noticed we're missing sensory-focused walks for beginners. I've designed a 10-minute session focusing on olfactory and auditory grounding in local parks. It would be a great addition to the \"Nature Connection\" workshop module.",
    isItalic: false,
    actions: [
      { label: 'Approve Submission', icon: 'check_circle', style: 'bg-primary text-on-primary hover:opacity-90', iconClass: 'group-hover:translate-x-0.5' },
      { label: 'Reject', icon: 'cancel', style: 'border border-outline-variant text-on-surface-variant hover:bg-error-container hover:text-on-error-container hover:border-transparent' },
      { label: 'Request Feedback', icon: 'chat', style: 'text-primary hover:underline px-4', isText: true },
    ],
  },
  {
    icon: 'help_center', iconStyle: 'text-tertiary text-4xl',
    iconBg: 'bg-tertiary-container/20',
    tag: "Didn't find what I need", tagStyle: 'bg-tertiary-fixed text-on-tertiary-fixed',
    meta: '5 hours ago • Anonymous User',
    title: 'Lack of postpartum depression resources',
    body: '"I was looking for specific breathing exercises for high-anxiety moments specifically during night-time infant care. Most of the content feels too general. Is there a plan to add maternal mental health sections?"',
    isItalic: true,
    actions: [
      { label: 'Convert to Ticket', icon: 'assignment_add', style: 'bg-secondary text-on-secondary hover:opacity-90' },
      { label: 'Archive Feedback', icon: null, style: 'border border-outline-variant text-on-surface-variant hover:bg-surface-variant' },
      { label: 'Internal Note', icon: 'notes', style: 'text-primary hover:underline px-4', isText: true },
    ],
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-L3kT7ucmQjbZ-M924HXnVcbS61GkCAPfHyLi0Xzx2Iua3oXtmyQ10Khk-yo0MP1KmUndTVpBi_Wi5UwLc09J3zmRKA054xklYh4jZz_4VLw0lA395uEPoCNM7DgupCBuu9rIcsQ06XfOwMTICSt5KJ3_QCHGXAL3tZSoU6fKVUrCcAmykWiLmby6gnK4xR7I05wlidpYBn8_nd4TMlxxcbBOiIjXJnOmm0k95I0RENdva-qSl-nhQQ',
    imgAlt: 'Lavender tea',
    tag: 'Recommendation', tagStyle: 'bg-secondary-container text-on-secondary-container',
    meta: '1 day ago • Submitted by Dr. Aris',
    title: 'Lavender Micro-Meditation Series',
    body: 'A set of three 2-minute meditations designed for workplace burnout. Each session includes a visual cue of blooming lavender and a rhythmic breathing pattern. Scientifically backed to lower cortisol in short bursts.',
    isItalic: false,
    actions: [
      { label: 'Approve Submission', icon: 'check_circle', style: 'bg-primary text-on-primary hover:opacity-90' },
      { label: 'Reject', icon: null, style: 'border border-outline-variant text-on-surface-variant hover:bg-error-container hover:text-on-error-container hover:border-transparent' },
    ],
    trailing: <div className="ml-auto text-outline-variant font-label-md italic">Awaiting Priority Review</div>,
  },
];

export default function ManageSubmissions() {
  return (
    <div className="bg-background text-on-surface antialiased" style={{ fontFamily: "'Work Sans', sans-serif" }}>
      <style>{`
        .glass-card { background: rgba(255,255,255,0.7); backdrop-filter: blur(10px); border: 1px solid rgba(139,168,142,0.1); }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #c2c8c0; border-radius: 10px; }
        .submission-card:hover { transform: translateY(-4px); transition: transform 0.2s ease, box-shadow 0.2s ease; box-shadow: 0 25px 30px rgba(139,168,142,0.12); }
      `}</style>

      {/* Sidebar */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low flex flex-col py-8 gap-2 shadow-[4px_0_24px_rgba(139,168,142,0.05)] z-40">
        <div className="px-6 mb-8">
          <h1 className="font-headline-md text-headline-md font-bold text-on-surface">Admin Panel</h1>
          <p className="text-on-surface-variant/70 text-sm font-body-md">Management Console</p>
        </div>
        <nav className="flex flex-col gap-1 px-2">
          {[
            { icon: 'dashboard', label: 'Dashboard', to: '/admin' },
            { icon: 'group', label: 'Users', to: '/admin/therapists' },
            { icon: 'edit_note', label: 'Content', to: '/admin/submissions', active: true, filled: true },
            { icon: 'analytics', label: 'Reports', to: '#' },
            { icon: 'settings', label: 'Settings', to: '#' },
          ].map((item) => (
            <Link key={item.label} to={item.to}
              className={`mx-2 px-4 py-3 rounded-xl flex items-center gap-3 transition-colors duration-200 ${item.active ? 'bg-primary-container text-on-primary-container scale-95 active:scale-100' : 'text-on-surface-variant hover:bg-surface-variant/50'}`}>
              <span className="material-symbols-outlined" style={item.filled ? { fontVariationSettings: "'FILL' 1" } : {}}>{item.icon}</span>
              <span className="font-body-md">{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto px-4">
          <Link to="/">
            <button className="w-full bg-primary text-on-primary py-3 rounded-full font-label-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              View Site
            </button>
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-64 h-screen overflow-y-auto custom-scrollbar relative">

        {/* Floating Crisis — top right */}
        <a className="fixed top-6 right-8 z-50 bg-white/40 backdrop-blur-md px-6 py-2.5 rounded-full border border-[#F4A261]/30 shadow-sm hover:shadow-md transition-all" href="#">
          <span className="font-crisis-link flex items-center gap-2" style={{ color: '#F4A261' }}>
            <span className="w-2 h-2 bg-[#F4A261] rounded-full animate-pulse" />
            Crisis Support
          </span>
        </a>

        {/* Header */}
        <section className="px-6 pt-12 pb-8 max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="font-headline-xl text-headline-xl text-primary mb-4">Content Submissions</h2>
              <p className="font-body-lg text-on-surface-variant">
                Review and manage user-submitted recommendations and feedback from the "Didn't find what you need" inquiries.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-surface-container-high px-4 py-2 rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">pending</span>
                <span className="font-label-md text-on-surface">12 Pending</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bento */}
        <section className="px-6 pb-12 max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-8 rounded-[2rem] flex flex-col justify-between min-h-[160px]">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-outline">Submission Rate</span>
              <span className="material-symbols-outlined text-primary">trending_up</span>
            </div>
            <div>
              <div className="font-headline-lg text-headline-lg text-on-surface">+14%</div>
              <div className="text-sm text-outline-variant">Since last week</div>
            </div>
          </div>
          <div className="glass-card p-8 rounded-[2rem] bg-secondary-container/30 border-secondary/10 flex flex-col justify-between min-h-[160px]">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-on-secondary-container">Average Response</span>
              <span className="material-symbols-outlined text-secondary">schedule</span>
            </div>
            <div>
              <div className="font-headline-lg text-headline-lg text-on-surface">4.2 hrs</div>
              <div className="text-sm text-on-surface-variant">Target: &lt; 6.0 hrs</div>
            </div>
          </div>
          <div className="glass-card p-8 rounded-[2rem] bg-tertiary-container/10 border-tertiary/10 flex flex-col justify-between min-h-[160px]">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-on-tertiary-container">Approval Ratio</span>
              <span className="material-symbols-outlined text-tertiary">thumb_up</span>
            </div>
            <div>
              <div className="font-headline-lg text-headline-lg text-on-surface">68%</div>
              <div className="text-sm text-on-tertiary-fixed-variant">89 approved this month</div>
            </div>
          </div>
        </section>

        {/* Submission List */}
        <section className="px-6 pb-20 max-w-container-max mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline-md text-headline-md text-on-surface">Pending Submissions</h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-full border border-outline-variant text-sm font-label-md hover:bg-surface-variant transition-colors">Latest First</button>
              <button className="px-4 py-2 rounded-full border border-outline-variant text-sm font-label-md hover:bg-surface-variant transition-colors">Recommendations</button>
            </div>
          </div>

          <div className="space-y-6">
            {submissions.map((sub, idx) => (
              <article key={idx} className="glass-card p-8 rounded-[2rem] submission-card">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Image or icon */}
                  <div className={`lg:w-32 h-32 flex-shrink-0 rounded-2xl overflow-hidden ${sub.iconBg || 'bg-surface-container-high'} ${sub.icon ? 'flex items-center justify-center' : ''}`}>
                    {sub.img
                      ? <img className="w-full h-full object-cover" src={sub.img} alt={sub.imgAlt} />
                      : <span className={`material-symbols-outlined ${sub.iconStyle}`}>{sub.icon}</span>
                    }
                  </div>
                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-label-md ${sub.tagStyle}`}>{sub.tag}</span>
                      <span className="text-outline-variant text-sm font-body-md">{sub.meta}</span>
                    </div>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-2">{sub.title}</h4>
                    <p className={`font-body-md text-on-surface-variant mb-6 leading-relaxed ${sub.isItalic ? 'italic' : ''}`}>{sub.body}</p>
                    <div className="flex flex-wrap items-center gap-4">
                      {sub.actions.map((action, ai) => (
                        <button key={ai}
                          className={`group ${action.isText ? '' : 'px-8 py-3 rounded-full'} font-label-md flex items-center gap-2 transition-all ${action.style}`}>
                          {action.label}
                          {action.icon && (
                            <span className={`material-symbols-outlined text-sm ${action.iconClass || ''}`}>{action.icon}</span>
                          )}
                        </button>
                      ))}
                      {sub.trailing}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <span className="font-label-md text-on-surface">Page 1 of 4</span>
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-surface-container mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-20 max-w-container-max mx-auto">
            <div className="space-y-4">
              <h5 className="font-headline-lg text-headline-lg font-bold text-primary">A Place to Breathe</h5>
              <p className="font-body-md text-on-surface-variant max-w-xs">A safe space for healing, reflection, and quiet management of the soul.</p>
            </div>
            <div className="space-y-4">
              <h6 className="font-label-md text-on-surface uppercase tracking-widest">Internal Portal</h6>
              <div className="flex flex-col gap-2">
                <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Staff Guidelines</a>
                <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Compliance Hub</a>
                <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Emergency Protocols</a>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end justify-end">
              <p className="font-body-md text-outline-variant text-sm">© 2024 A Place to Breathe. Your safe space for healing.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
