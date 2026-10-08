import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const filterOptions = ['All Sessions', 'Student Workshops', 'Peer Support', 'Expert Webinars'];

export default function Workshops() {
  const [activeFilter, setActiveFilter]   = useState('All Sessions');
  const [searchValue, setSearchValue]     = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

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
                      : 'bg-surface-container-high text-on-surface-variant hover:bg-primary-container/20'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Grid — empty state */}
        <section className="max-w-container-max mx-auto px-6">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-5xl">school</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">Sessions Coming Soon</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mb-8">
              Workshops, webinars, and peer sessions will appear here as they're scheduled. Check back soon.
            </p>
            {!user && (
              <Link
                to="/login"
                className="bg-primary text-on-primary font-label-md text-label-md px-10 py-4 rounded-full hover:bg-primary/90 transition-all shadow-sm flex items-center gap-2"
              >
                <span className="material-symbols-outlined">login</span>
                Sign in to get notified
              </Link>
            )}
          </div>
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
                Explore Community
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

        {/* CTA Section */}
        <section className="max-w-container-max mx-auto px-6 py-20 mb-20">
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
