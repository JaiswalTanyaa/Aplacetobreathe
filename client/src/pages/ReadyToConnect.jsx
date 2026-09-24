import React from 'react';
import { Link } from 'react-router-dom';

export default function ReadyToConnect() {
  return (
    <div className="bg-background text-on-surface min-h-screen relative overflow-hidden">

      {/* Organic Morphing Blobs */}
      <div className="absolute -z-10 pointer-events-none"
        style={{
          top: '-20%', left: '-10%',
          width: '600px', height: '600px',
          background: 'rgba(139,168,142,0.2)',
          filter: 'blur(3rem)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          animation: 'morph 8s ease-in-out infinite',
        }} />
      <div className="absolute -z-10 pointer-events-none"
        style={{
          top: '40%', right: '-20%',
          width: '800px', height: '800px',
          background: 'rgba(236,220,253,0.3)',
          filter: 'blur(3rem)',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          animation: 'morph2 10s ease-in-out infinite reverse',
        }} />

      <style>{`
        @keyframes morph {
          0%   { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50%  { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        @keyframes morph2 {
          0%   { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50%  { border-radius: 50% 50% 30% 70% / 70% 40% 50% 30%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }
      `}</style>

      {/* Blurred background context — Book a Session page */}
      <main className="w-full h-screen overflow-hidden filter blur-md grayscale-[20%] opacity-60 flex flex-col pointer-events-none">
        <header className="w-full flex justify-between items-center px-6 py-4 max-w-container-max mx-auto opacity-50">
          <div className="font-headline-md text-headline-md font-bold text-primary">A Place to Breathe</div>
        </header>
        <div className="flex-grow flex flex-col max-w-container-max mx-auto w-full px-6 pt-20">
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-8">Book a Session</h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4 bg-surface-container rounded-xl p-8 flex flex-col items-center shadow-sm">
              <div className="w-32 h-32 rounded-full bg-surface-variant mb-6 relative overflow-hidden">
                <img className="w-full h-full object-cover" alt="Therapist"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDijoPDjKLTZmPwlxesOn2HD1G-eWLhOJrslpQC0ADWl9vsI1bnEkj9KM7WlZXUetEX5n5fdOUlBd9Z1lqSjmhJdJKbqjf1woVJKQER6XwltIaRu2fKO0mJkfZ7hcObPSEhtzt4u1OHDxWm7ZZvGoPRvHzY2JTT0X37FA3PwhhBHErLBH_gwIfkezfUiLPWaOTeE5A_7gtfxVHL9XTiOGw-zXepmghuhlaDb0YFovsK7ZkqQcCBaAbOZg"
                />
              </div>
              <div className="h-6 w-3/4 bg-surface-variant rounded mb-3" />
              <div className="h-4 w-1/2 bg-surface-variant rounded mb-8" />
              <div className="h-10 w-full bg-surface-variant rounded-full mt-auto" />
            </div>
            <div className="md:col-span-8 bg-surface-container-low border border-surface-variant rounded-xl p-8 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div className="h-8 w-1/3 bg-surface-variant rounded" />
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-surface-variant" />
                  <div className="h-8 w-8 rounded-full bg-surface-variant" />
                </div>
              </div>
              <div className="grid grid-cols-7 gap-4 mb-8">
                {[1,2,3,4,5,6,7].map((i) => <div key={i} className="h-20 bg-surface-variant rounded-lg opacity-50" />)}
              </div>
              <div className="space-y-4">
                <div className="h-16 bg-surface-variant rounded-xl w-full" />
                <div className="h-16 bg-surface-variant rounded-xl w-full" />
                <div className="h-16 bg-surface-variant rounded-xl w-full" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal Overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-surface/40 backdrop-blur-sm">
        <div className="bg-surface-container-lowest rounded-2xl w-full max-w-[520px] shadow-[0_24px_48px_-12px_rgba(74,101,78,0.1)] border border-surface-container-highest flex flex-col relative overflow-hidden">
          {/* Decorative blob in modal */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-tertiary-container/20 rounded-full blur-2xl" />

          <div className="px-8 pt-10 pb-8 flex flex-col items-center text-center relative z-10">
            {/* Icon */}
            <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mb-6 text-on-secondary-container shadow-[0_8px_16px_rgba(236,220,253,0.4)]">
              <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Ready to connect?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[400px] mb-8">
              To finalize your session, we need a small amount of information. Your account allows you to securely manage bookings, receive private meeting links, and message your therapist in a safe space.
            </p>

            <div className="w-full flex flex-col gap-4">
              <button
                className="w-full text-on-primary font-label-md text-label-md py-4 rounded-full transition-colors shadow-sm active:scale-[0.98]"
                style={{ background: '#F4A261' }}
              >
                Sign Up to Book
              </button>
              <Link to="/therapists">
                <button className="w-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-md text-label-md py-4 rounded-full transition-colors active:scale-[0.98]">
                  Continue Browsing
                </button>
              </Link>
            </div>

            <div className="mt-6 font-body-md text-body-md text-outline">
              Already have an account?{' '}
              <Link className="text-primary hover:underline font-semibold" to="/join">Log In</Link>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="w-full h-1 bg-gradient-to-r from-primary-container via-tertiary-container to-secondary-container opacity-30" />
        </div>
      </div>
    </div>
  );
}
