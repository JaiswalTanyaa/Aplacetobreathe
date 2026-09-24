import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GuidedSupportGuest() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col font-body-md bg-background text-on-background">

      {/* Organic Background Blobs */}
      <div style={{
        position: 'absolute', background: '#8ba88e',
        width: '400px', height: '400px',
        borderRadius: '50% 40% 60% 40%',
        top: '-100px', left: '-100px',
        filter: 'blur(80px)', opacity: 0.4, zIndex: 0, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', background: '#ecdcfd',
        width: '500px', height: '500px',
        borderRadius: '40% 60% 40% 50%',
        bottom: '-150px', right: '-100px',
        filter: 'blur(80px)', opacity: 0.4, zIndex: 0, pointerEvents: 'none',
      }} />


      {/* Main Chat Canvas */}
      <main className="flex-1 mt-0 relative z-10 flex flex-col max-w-3xl w-full mx-auto pt-4 pb-4 px-4 sm:px-6 lg:px-8"
        style={{ height: 'calc(100vh - 80px)' }}>

        {/* Chat Header */}
        <div className="text-center mb-8">
          <h1 className="font-headline-lg text-headline-lg text-primary mb-2">Guided Support</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Your safe space to reflect and find calm.</p>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto flex flex-col gap-6 p-4 rounded-xl border border-surface-variant mb-4"
          style={{ background: 'rgba(251,249,245,0.5)', backdropFilter: 'blur(4px)', boxShadow: '0 20px 20px 0 rgba(139,168,142,0.05)' }}>

          {/* Bot Message 1 */}
          <div className="flex gap-4 max-w-[85%]">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary-container">spa</span>
            </div>
            <div className="bg-white rounded-2xl rounded-tl-sm p-4 border border-surface-container shadow-[0_4px_12px_rgba(139,168,142,0.03)] text-on-surface">
              <p className="font-body-md text-body-md">Hello. I'm here to listen. How are you feeling right now? Take your time, there's no rush.</p>
            </div>
          </div>

          {/* User Message */}
          <div className="flex gap-4 max-w-[85%] self-end flex-row-reverse">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-secondary-container">person</span>
            </div>
            <div className="bg-surface-container rounded-2xl rounded-tr-sm p-4 text-on-surface">
              <p className="font-body-md text-body-md">I'm feeling a bit overwhelmed today. Things just feel like too much.</p>
            </div>
          </div>

          {/* Bot Message 2 with suggestion chips */}
          <div className="flex gap-4 max-w-[85%]">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary-container">spa</span>
            </div>
            <div className="bg-white rounded-2xl rounded-tl-sm p-4 border border-surface-container shadow-[0_4px_12px_rgba(139,168,142,0.03)] text-on-surface">
              <p className="font-body-md text-body-md">It's completely understandable to feel overwhelmed sometimes. Acknowledging it is a brave first step.</p>
              <p className="font-body-md text-body-md mt-3">Would you like to try a brief, guided breathing exercise together, or would you prefer to just talk about what's on your mind?</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <button className="bg-secondary/10 hover:bg-secondary/20 text-on-surface-variant px-4 py-2 rounded-full font-label-md text-label-md transition-colors border border-secondary/20">
                  Try breathing exercise
                </button>
                <button className="bg-secondary/10 hover:bg-secondary/20 text-on-surface-variant px-4 py-2 rounded-full font-label-md text-label-md transition-colors border border-secondary/20">
                  I just want to talk
                </button>
              </div>
            </div>
          </div>

          {/* Typing Indicator */}
          <div className="flex gap-4 max-w-[85%] opacity-70">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary-container">more_horiz</span>
            </div>
          </div>
        </div>

        {/* Sticky Bottom Input */}
        <div className="w-full relative shrink-0">
          {/* Guest Signup Banner */}
          {bannerVisible && (
            <div className="absolute bottom-full mb-4 left-0 right-0 bg-primary-container/20 backdrop-blur-md border border-primary-container/30 rounded-xl p-4 flex items-center justify-between gap-4 transform transition-all duration-300"
              style={{ boxShadow: '0 20px 20px 0 rgba(139,168,142,0.05)' }}>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">bookmark</span>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                  Sign up to save this conversation and revisit these suggestions later.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Link to="/join" className="bg-primary text-on-primary px-4 py-1.5 rounded-full font-label-md text-label-md hover:opacity-90 transition-opacity">
                  Sign Up
                </Link>
                <button
                  onClick={() => setBannerVisible(false)}
                  className="text-outline hover:text-on-surface transition-colors p-1 rounded-full hover:bg-surface-variant/50 flex items-center justify-center"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>close</span>
                </button>
              </div>
            </div>
          )}

          {/* Input Field */}
          <div className="relative flex items-center bg-white rounded-2xl p-2 border border-surface-variant focus-within:ring-2 focus-within:ring-primary/30 transition-all"
            style={{ boxShadow: '0 20px 20px 0 rgba(139,168,142,0.05)' }}>
            <button className="p-3 text-outline hover:text-primary transition-colors rounded-full hover:bg-surface-container-low">
              <span className="material-symbols-outlined">add_circle</span>
            </button>
            <input
              className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface font-body-md text-body-md placeholder:text-outline-variant px-2 py-3 outline-none"
              placeholder="Take your time..."
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="p-3 bg-primary text-on-primary rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center ml-2">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
          <p className="text-center text-xs text-outline mt-3 font-body-md">This is a safe space. Your privacy is respected.</p>
        </div>
      </main>
    </div>
  );
}
