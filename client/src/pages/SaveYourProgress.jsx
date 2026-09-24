import React from 'react';
import { Link } from 'react-router-dom';

export default function SaveYourProgress() {
  return (
    <div className="bg-background text-on-background font-body-md relative min-h-screen overflow-hidden">

      {/* Radial gradient blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(139,168,142,0.15) 0%, transparent 60%)',
      }} />
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 80% 70%, rgba(167,153,183,0.1) 0%, transparent 50%)',
      }} />

      {/* Blurred progress page background */}
      <div className="max-w-container-max mx-auto px-6 pt-32 pb-20 filter blur-md opacity-60 h-full relative z-0">
        <header className="mb-12">
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-4">My Progress</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Reflect on your recent mood patterns and review your saved notes.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low rounded-xl p-8 border border-surface-variant shadow-[0_20px_20px_0_rgba(139,168,142,0.05)] md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-container/20 p-3 rounded-full">
                <span className="material-symbols-outlined text-primary">timeline</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Weekly Mood Trend</h2>
            </div>
            <div className="h-48 bg-surface-variant/30 rounded-lg w-full" />
          </div>
          <div className="bg-surface-container-low rounded-xl p-8 border border-surface-variant shadow-[0_20px_20px_0_rgba(139,168,142,0.05)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-secondary-container/30 p-3 rounded-full">
                <span className="material-symbols-outlined text-secondary">edit_note</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Recent Notes</h2>
            </div>
            <div className="space-y-4">
              <div className="h-12 bg-surface-variant/30 rounded-lg w-full" />
              <div className="h-12 bg-surface-variant/30 rounded-lg w-full" />
              <div className="h-12 bg-surface-variant/30 rounded-lg w-3/4" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/20 backdrop-blur-sm p-4">
        <div className="bg-surface rounded-[32px] p-8 md:p-12 max-w-lg w-full shadow-[0_32px_64px_-16px_rgba(74,101,78,0.15)] border border-surface-variant relative overflow-hidden">
          {/* Soft inner blob */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Pulsing icon */}
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-primary-container/30 rounded-full blur-xl animate-pulse" />
              <div className="bg-primary-container text-on-primary-container h-20 w-20 rounded-full flex items-center justify-center relative z-10 shadow-sm border border-primary-fixed">
                <span className="material-symbols-outlined text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </div>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Save your healing journey</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-sm">
              Create a free account to securely track your mood trends, save your therapist notes, and access personalized reflections over time. This is your private, safe space.
            </p>

            <div className="w-full space-y-4">
              <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-4 px-6 rounded-full hover:bg-primary/90 transition-all active:scale-[0.98]"
                style={{ boxShadow: '0 8px 16px rgba(139,168,142,0.2)' }}>
                Create Free Account
              </button>
              <button className="w-full bg-transparent text-secondary border border-outline-variant font-label-md text-label-md py-4 px-6 rounded-full hover:bg-surface-variant/30 hover:border-outline transition-all active:scale-[0.98]">
                Maybe Later
              </button>
            </div>

            <p className="font-body-md text-outline mt-6" style={{ fontSize: '12px' }}>
              By continuing, you agree to our{' '}
              <a className="underline hover:text-primary transition-colors" href="#">Terms</a> and{' '}
              <Link className="underline hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
