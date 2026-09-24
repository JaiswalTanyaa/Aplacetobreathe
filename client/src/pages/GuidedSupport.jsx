import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function GuidedSupport() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello. I'm here to listen. How are you feeling in this moment?",
      showQuickReplies: true,
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);
  const textareaRef = useRef(null);

  const quickPrompts = ["I'm feeling anxious", "I just need to vent", "Help me relax"];

  const botResponses = {
    anxious:
      "I'm sorry you're carrying that weight. Tightness in the chest can be so unsettling. Would you like to try a 3-minute Box Breathing exercise together, or should we look at some tips for workplace stress?",
    vent:
      "Please write as much as you need. There is no expectation to have it all figured out, and no one is grading your feelings here.",
    relax:
      "Notice your jaw right now — soften it and let your teeth part slightly. Drop your shoulders away from your ears. Feel the weight of your body supported by whatever you are sitting on.",
    sleep:
      "Nighttime has a way of magnifying our worries. Try placing a soft hand on your stomach. Feel it gently rise and fall.",
    default:
      "Thank you for sharing that with me. Your feelings are completely valid. Sometimes simply putting words to what feels heavy can create a tiny pocket of breathing room. What is one small, gentle kindness you can offer yourself today?",
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
    setIsTyping(true);

    setTimeout(() => {
      let reply = botResponses.default;
      const lower = text.toLowerCase();
      if (lower.includes('anxious') || lower.includes('panic') || lower.includes('fear') || lower.includes('chest')) {
        reply = botResponses.anxious;
      } else if (lower.includes('vent') || lower.includes('frustrated') || lower.includes('angry')) {
        reply = botResponses.vent;
      } else if (lower.includes('relax') || lower.includes('shoulder') || lower.includes('tense')) {
        reply = botResponses.relax;
      } else if (lower.includes('sleep') || lower.includes('tired') || lower.includes('insomnia')) {
        reply = botResponses.sleep;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: reply, showCards: lower.includes('anxious') || lower.includes('chest') }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleTextareaInput = (e) => {
    setInputText(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  return (
    <div className="py-8 px-6 max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Context & Guidance */}
        <div className="lg:col-span-4 space-y-8 lg:sticky top-32">
          <div>
            <h1
              className="font-headline-xl text-primary mb-4"
              style={{ fontSize: '48px', lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: 700 }}
            >
              You're not alone.
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
              Share what's on your mind. Whether you need a listening ear, a quiet exercise, or a path toward healing, we are here with you.
            </p>
          </div>

          {/* Direct Connection Card */}
          <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 shadow-sm">
            <h3 className="font-headline-md text-headline-md text-secondary mb-4">Direct Connection</h3>
            <p className="text-body-md text-on-surface-variant mb-6">
              Sometimes you need a real voice. Our human supporters are available 24/7 for a private chat.
            </p>
            <Link
              to="/therapists"
              className="w-full bg-primary text-on-primary font-bold py-4 rounded-full transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">person</span>
              Talk to a human
            </Link>
          </div>

          {/* Disclaimer */}
          <div
            className="p-6 rounded-2xl"
            style={{
              background: 'rgba(221,143,80,0.1)',
              borderLeft: '4px solid #8e4e14',
            }}
          >
            <p className="font-label-md text-label-md text-on-tertiary-container flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>info</span>
              NOT A REPLACEMENT FOR PROFESSIONAL HELP
            </p>
            <p className="text-sm text-on-surface-variant mt-2 leading-relaxed italic">
              This digital guide is for emotional support and wellness activities. If you are in immediate danger or a medical emergency, please use our crisis links or call emergency services.
            </p>
          </div>
        </div>

        {/* Right Side: The Chat Interface */}
        <div className="lg:col-span-8">
          <div
            className="rounded-[40px] overflow-hidden flex flex-col"
            style={{
              background: '#ffffff',
              boxShadow: '0 32px 64px -16px rgba(139,168,142,0.12)',
              border: '1px solid rgba(194,200,192,0.2)',
              height: '700px',
            }}
          >
            {/* Chat Header */}
            <div
              className="px-8 py-6 border-b border-outline-variant/10 flex justify-between items-center"
              style={{ background: 'rgba(255,255,255,0.5)' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <div>
                  <h2 className="font-headline-md text-headline-md">Guided Support</h2>
                  <span className="text-sm text-primary flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                    Active Now
                  </span>
                </div>
              </div>
              <Link to="/explore" className="text-outline hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined">more_horiz</span>
              </Link>
            </div>

            {/* Chat Messages */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-8 flex flex-col gap-6"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#c2c8c0 transparent',
              }}
            >
              {messages.map((m, idx) => (
                <div key={idx}>
                  <div className={`flex gap-4 max-w-[85%] ${m.sender === 'user' ? 'self-end ml-auto flex-row-reverse' : ''}`}>
                    <div
                      className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                        m.sender === 'user'
                          ? 'bg-primary text-on-primary'
                          : 'bg-secondary-container text-secondary'
                      }`}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                        {m.sender === 'user' ? 'person' : 'nature'}
                      </span>
                    </div>
                    <div
                      className={`p-5 rounded-2xl ${
                        m.sender === 'user'
                          ? 'bg-primary-container text-on-primary-container rounded-tr-none'
                          : 'bg-surface-container-low rounded-tl-none'
                      }`}
                    >
                      <p className="text-body-md">{m.text}</p>

                      {/* Quick Reply Buttons */}
                      {m.showQuickReplies && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {quickPrompts.map((p, i) => (
                            <button
                              key={i}
                              onClick={() => handleSendMessage(p)}
                              className="px-4 py-2 bg-white border border-outline-variant/50 rounded-full text-sm hover:bg-primary-container/10 transition-colors"
                            >
                              {p}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Activity Cards */}
                      {m.showCards && (
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <Link
                            to="/explore"
                            className="bg-white p-4 rounded-xl shadow-sm border border-outline-variant/10 cursor-pointer hover:shadow-md transition-all group block"
                          >
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#00695C] group-hover:text-white transition-colors"
                              style={{ background: '#E0F2F1', color: '#00695C' }}
                            >
                              <span className="material-symbols-outlined">air</span>
                            </div>
                            <h4 className="font-bold text-sm">Box Breathing</h4>
                            <p className="text-xs text-on-surface-variant">3 min session</p>
                          </Link>
                          <div className="bg-white p-4 rounded-xl shadow-sm border border-outline-variant/10 cursor-pointer hover:shadow-md transition-all group">
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#E65100] group-hover:text-white transition-colors"
                              style={{ background: '#FFF3E0', color: '#E65100' }}
                            >
                              <span className="material-symbols-outlined">article</span>
                            </div>
                            <h4 className="font-bold text-sm">Workplace Boundaries</h4>
                            <p className="text-xs text-on-surface-variant">Read Article</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2 text-sm text-on-surface-variant items-center animate-pulse">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>
                    nature
                  </span>
                  <span>Sanctuary guide is reflecting...</span>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-8 border-t border-outline-variant/10 bg-white">
              <div className="relative">
                <textarea
                  ref={textareaRef}
                  rows={1}
                  placeholder="Type your thoughts here... Take your time, this is a safe space."
                  value={inputText}
                  onChange={handleTextareaInput}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  className="w-full bg-surface-container-low border-none rounded-[24px] py-5 px-8 pr-32 focus:ring-2 focus:ring-primary/20 text-body-md resize-none transition-all outline-none"
                  style={{ overflow: 'hidden' }}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-variant transition-colors">
                    <span className="material-symbols-outlined">mic</span>
                  </button>
                  <button
                    onClick={() => handleSendMessage()}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-on-primary hover:opacity-90 transition-opacity shadow-lg"
                  >
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <p className="text-outline flex items-center gap-1" style={{ fontSize: '12px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>lock</span>
                  Encrypted and Private
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
