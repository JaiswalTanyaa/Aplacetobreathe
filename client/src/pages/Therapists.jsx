import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const therapists = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFc_ZTcw1H-WYNaxwkJv3bjMRl_LUMarM0i4vJTZA6K2MkotZWmmURMQxWi8B6vqtrrhkJiChRE_oGwlRm3yOKncjgbHZ5qqKk2yzT3Lg8yWP4pneJIXQXnfOm_nVXxGopRSspOyL_RY729_DkujJBCAbSHEhhVX1pIpyfFSKLkxEWq2xPnHwBnKx7bRj_Y-oDEj0JHP1R90zOazq8Pp08OLFmsas2dH1Nn136uYbep-EFOaSzTVBF-Q',
    rating: '4.9',
    name: 'Dr. Elena Thorne',
    role: 'CLINICAL PSYCHOLOGIST',
    price: '$120/hr',
    tags: ['Trauma', 'EMDR'],
    bio: 'Helping individuals find their path through transformative EMDR therapy and compassionate cognitive behavioral strategies.',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDzQT5-YfWN2pRjlmAqYSjlgeCHGmO7lQLxN7FbuTnaO8DqW_aNjUA4aLCnXhhAOe_LZE3puczicG3aLqy1n854w-ViqaxrnmzZcjs5ShV0EPFojS9Zc8QaUMM2GZ1L5uzrCg3NENXqdZxgUY9STSx3oxYFFdE_mmO_8wQwGzyP4O54ruqjfTaAj-FoOsbdLZuO7gg5zsLOncHEoYTy0bt7DmFozErkxh0RBEpzriq0S7g_6wlQ5X9jA',
    rating: '4.8',
    name: 'Marcus Chen',
    role: 'LCSW • MINDFULNESS',
    price: '$95/hr',
    tags: ['Anxiety', 'Meditation'],
    bio: 'Blending modern science with mindfulness practices to help manage life\'s daily stresses and find inner quiet.',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxcaLEiTgcFqPGYeA0NdGI-5ZeISMpNFhUqGbPm67-Xv8Pwn3bHadCNhc3tgo5qAYO6eTq0BLAsE2DGXSUjWFO27WD93zuX8r0prsW6EuAyDSmup6-Mt1g8O-_OVIBIN1Ac2u7Gy585czf_IK1vZVq16jqt0wPdHgQkEhXamGUe84L4u5i6QPrFwEcQLBeQu-AtAwVQKfT-TxPndvqNSqLBkTHuRxxX3847vr258yX1vCyt_C2mwC-4A',
    rating: '5.0',
    name: 'Dr. Sarah Varma',
    role: 'MD • PSYCHIATRIST',
    price: '$150/hr',
    tags: ['Depression', 'Medication'],
    bio: 'Specialized in integrative psychiatry, helping you navigate complex mental health challenges with holistic care.',
  },
];

export default function Therapists() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTherapist, setSelectedTherapist] = useState('');
  const [step, setStep] = useState(1);

  const openModal = (name) => {
    setSelectedTherapist(name);
    setStep(1);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        .glass-card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(139,168,142,0.1);
        }
        .blob-bg { filter: blur(80px); z-index: -1; opacity: 0.4; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #8BA88E; border-radius: 10px; }
      `}</style>


      {/* Hero */}
      <main className="pt-32 pb-16 relative overflow-hidden">
        {/* Blobs */}
        <div className="blob-bg absolute rounded-full bg-secondary-container"
          style={{ top: '-10%', right: '-5%', width: '24rem', height: '24rem', position: 'absolute' }} />
        <div className="blob-bg absolute rounded-full"
          style={{ bottom: '20%', left: '-10%', width: '20rem', height: '20rem', position: 'absolute', background: 'rgba(139,168,142,0.3)' }} />

        <div className="max-w-container-max mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-headline-xl text-headline-xl text-on-background mb-6">
                Find the light within you, with a guide.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
                Our verified therapists specialize in anxiety, trauma, and personal growth. Find someone who speaks your language—literally and emotionally.
              </p>
              {/* Quiz Entry */}
              <div className="glass-card p-6 rounded-xl flex items-center gap-6 shadow-sm">
                <div className="bg-secondary-container p-4 rounded-full">
                  <span className="material-symbols-outlined text-secondary text-3xl">psychology_alt</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-1">Unsure where to start?</h3>
                  <p className="text-on-surface-variant text-sm">Take our 2-minute "Do I need a session?" wellness quiz.</p>
                </div>
                <button className="bg-primary text-on-primary px-6 py-3 rounded-full font-label-md hover:opacity-90 transition-all shadow-md active:scale-95">
                  Take Quiz
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img
                  className="w-full h-full object-cover"
                  alt="Serene therapist office"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrK6aVqck5HFc66gTgERwIL50wJw1oUiouh6U6_Rq2EoMMyY3oOwkDyIEwzPgeWecfFJjTbm1kCNlVw5VFREluoqMUiBtI_ZDUXGX9zAKSaDvoPqFauspQU_i9QY9GMfdXRAfWgp0_D_OHCD5gJMQopGIHPF8BxlSFuIxXUCUThAyVoBSK4LdnYgLT4Syr9xbhtd8dMS5IPMKhuTwEeWDOvyUXmjjDE7I2U_Lk6yInFjfvDNNxTY3scg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-fixed rounded-2xl -z-0 opacity-50" />
            </div>
          </div>
        </div>
      </main>

      {/* Filter Bar */}
      <section className="sticky top-[72px] z-40 bg-surface-bright py-6 border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[200px] relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input
                className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary-container text-body-md transition-all outline-none"
                placeholder="Search by name or specialty..."
                type="text"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <select className="bg-surface-container-low border-none rounded-xl py-3 px-6 text-on-surface-variant font-label-md focus:ring-2 focus:ring-primary-container cursor-pointer outline-none">
                <option>Specialization</option>
                <option>Anxiety</option>
                <option>Trauma</option>
                <option>Grief</option>
                <option>Relationship</option>
              </select>
              <div className="flex items-center bg-surface-container-low rounded-xl p-1">
                <button className="px-4 py-2 rounded-lg bg-white shadow-sm text-primary font-label-md">All</button>
                <button className="px-4 py-2 rounded-lg text-on-surface-variant font-label-md hover:bg-white/50">Online</button>
                <button className="px-4 py-2 rounded-lg text-on-surface-variant font-label-md hover:bg-white/50">Offline</button>
              </div>
              <select className="bg-surface-container-low border-none rounded-xl py-3 px-6 text-on-surface-variant font-label-md focus:ring-2 focus:ring-primary-container cursor-pointer outline-none">
                <option>Language</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
              <button className="flex items-center gap-2 bg-surface-container-low py-3 px-6 rounded-xl hover:bg-surface-container transition-all text-on-surface-variant">
                <span className="material-symbols-outlined text-xl">tune</span>
                <span className="font-label-md">Filters</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-container-max mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapists.map((t) => (
              <div key={t.name} className="group bg-surface-container-lowest rounded-3xl p-6 shadow-sm border border-outline-variant/20 hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={t.name}
                    src={t.img}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-sm font-bold text-on-surface">{t.rating}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-headline-md text-headline-md text-on-background">{t.name}</h3>
                      <p className="text-primary font-label-md tracking-wider">{t.role}</p>
                    </div>
                    <span className="text-on-surface-variant font-label-md">{t.price}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 my-4">
                    {t.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-semibold uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                  <p className="text-on-surface-variant text-sm line-clamp-2 mb-6">{t.bio}</p>
                </div>
                <button
                  onClick={() => openModal(t.name)}
                  className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md hover:bg-on-primary-fixed-variant transition-colors shadow-md active:scale-95"
                >
                  Book Session
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-20 bg-surface-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-20 max-w-container-max mx-auto">
          <div>
            <div className="font-headline-lg text-headline-lg font-bold text-primary mb-4">A Place to Breathe</div>
            <p className="text-on-surface-variant font-body-md pr-8">Dedicated to providing accessible, high-quality emotional support in a space designed for your peace of mind.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-on-background mb-2">Platform</h4>
            <a className="text-on-surface-variant hover:text-primary transition-all font-body-md" href="#">Mission</a>
            <a className="text-on-surface-variant hover:text-primary transition-all font-body-md" href="#">Workshops</a>
            <a className="text-on-surface-variant hover:text-primary transition-all font-body-md" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant hover:text-primary transition-all font-body-md" href="#">Terms of Service</a>
          </div>
          <div>
            <h4 className="font-bold text-on-background mb-4">Need Help Now?</h4>
            <Link className="inline-block bg-white border-2 font-bold px-6 py-3 rounded-full transition-all hover:text-white"
              to="/crisis"
              style={{ borderColor: '#F4A261', color: '#F4A261' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#F4A261'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#F4A261'; }}>
              Crisis Support Center
            </Link>
            <div className="mt-8 flex gap-4">
              <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">language</span>
              <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">chat_bubble</span>
            </div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-6 py-6 border-t border-outline-variant/20 text-on-surface-variant text-sm text-center">
          © 2024 A Place to Breathe. Your safe space for healing.
        </div>
      </footer>

      {/* Booking Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={closeModal}>
          <div className="absolute inset-0 bg-on-background/40 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-2xl bg-surface-bright rounded-3xl shadow-2xl overflow-hidden animate-fade-in"
            onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="font-headline-lg text-headline-lg text-on-background">Book a Session</h2>
                  <p className="text-on-surface-variant">With {selectedTherapist}</p>
                </div>
                <button className="p-2 hover:bg-surface-container rounded-full transition-colors" onClick={closeModal}>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h4 className="font-label-md text-on-surface">SELECT SESSION TYPE</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="relative cursor-pointer">
                      <div className="p-6 rounded-2xl border-2 border-primary bg-primary-container/10 transition-all">
                        <span className="material-symbols-outlined text-3xl mb-3 text-primary block">videocam</span>
                        <h5 className="font-bold text-on-surface">Online Call</h5>
                        <p className="text-sm text-on-surface-variant">Via Secure Video Link</p>
                      </div>
                    </label>
                    <label className="relative cursor-pointer">
                      <div className="p-6 rounded-2xl border-2 border-outline-variant transition-all">
                        <span className="material-symbols-outlined text-3xl mb-3 text-primary block">location_on</span>
                        <h5 className="font-bold text-on-surface">In-Person</h5>
                        <p className="text-sm text-on-surface-variant">Clinic at Downtown</p>
                      </div>
                    </label>
                  </div>
                  <button onClick={() => setStep(2)} className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md hover:opacity-90 transition-all shadow-md mt-4">
                    Continue to Calendar
                  </button>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h4 className="font-label-md text-on-surface">SELECT DATE &amp; TIME</h4>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="bg-surface-container-low rounded-2xl p-4">
                      <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-outline mb-4">
                        {['M','T','W','T','F','S','S'].map((d,i) => <span key={i}>{d}</span>)}
                      </div>
                      <div className="grid grid-cols-7 gap-2">
                        {[12,13,14,15,16,17,18].map((n) => (
                          <div key={n} className={`h-8 flex items-center justify-center rounded-lg cursor-pointer ${n === 14 ? 'bg-primary text-on-primary' : 'hover:bg-primary-container/20'}`}>{n}</div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3 custom-scrollbar overflow-y-auto max-h-[180px] pr-2">
                      {['09:00 AM','11:30 AM','02:00 PM','04:30 PM'].map((t,i) => (
                        <button key={t} className={`w-full py-3 px-4 rounded-xl text-sm font-medium transition-colors ${i === 2 ? 'bg-primary-container text-on-primary-container border-primary-container' : 'border border-outline-variant hover:border-primary hover:text-primary'}`}>{t}</button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="flex-1 py-4 text-on-surface-variant font-label-md hover:bg-surface-container rounded-xl transition-all">Back</button>
                    <button onClick={() => setStep(3)} className="flex-[2] bg-primary text-on-primary py-4 rounded-xl font-label-md hover:opacity-90 transition-all shadow-md">Confirm Selection</button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="text-center space-y-6 py-8 animate-fade-in">
                  <div className="w-20 h-20 bg-primary-container/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-primary text-5xl">task_alt</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-background">Booking Confirmed!</h3>
                  <p className="text-on-surface-variant max-w-sm mx-auto">
                    Your session is scheduled for Oct 14th at 2:00 PM. We've sent a calendar invite to your email.
                  </p>
                  <button onClick={closeModal} className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md hover:opacity-90 transition-all shadow-md">
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
