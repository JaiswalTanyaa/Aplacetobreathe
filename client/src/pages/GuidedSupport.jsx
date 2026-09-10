import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Wind, Heart, User, ShieldAlert, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

export default function GuidedSupport() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello, peaceful traveler. I'm your digital sanctuary companion. How is your heart and mind feeling in this quiet moment?",
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    "I'm feeling anxious right now",
    'I just need a safe space to vent',
    'Help me relax my shoulders',
    'Having trouble falling asleep',
  ];

  const botResponses = {
    anxious:
      "I hear you, and it is completely okay to feel anxious. Remember: anxiety is simply an overprotective survival reflex. Let's take one unhurried breath together. Inhale for 4 seconds through your nose... and let it out gently for 8 seconds. Would you like to try our visual 4-7-8 breathing pacer in Explore?",
    vent:
      "Please write as much as you need. There is no expectation to have it all figured out, and no one is grading your feelings here. Let the words pour out without editing yourself.",
    relax:
      "Notice your jaw right now—soften it and let your teeth part slightly. Drop your shoulders away from your ears. Feel the weight of your body supported by whatever you are sitting on. You don't have to carry the whole world right now.",
    sleep:
      "Nighttime has a way of magnifying our worries because the world goes quiet. Try placing a soft hand on your stomach. Feel it gently rise and fall. Remind yourself: 'Tomorrow will take care of itself. Right now, my only job is to rest.'",
    default:
      "Thank you for sharing that with me. Your feelings are completely valid. Sometimes simply putting words to what feels heavy can create a tiny pocket of breathing room. What is one small, gentle kindness you can offer yourself today?",
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = botResponses.default;
      const lower = text.toLowerCase();
      if (lower.includes('anxious') || lower.includes('panic') || lower.includes('fear')) {
        reply = botResponses.anxious;
      } else if (lower.includes('vent') || lower.includes('frustrated') || lower.includes('angry')) {
        reply = botResponses.vent;
      } else if (lower.includes('relax') || lower.includes('shoulder') || lower.includes('tense')) {
        reply = botResponses.relax;
      } else if (lower.includes('sleep') || lower.includes('tired') || lower.includes('insomnia')) {
        reply = botResponses.sleep;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Context & Human Connection */}
        <div className="lg:col-span-4 space-y-6">
          <div>
            <span className="inline-block text-primary font-bold text-xs uppercase tracking-widest bg-primary-container/20 px-3.5 py-1 rounded-full mb-3">
              Guided Companion
            </span>
            <h1 className="font-headline text-3xl font-extrabold text-on-surface mb-3">
              You are not alone.
            </h1>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Share what is on your mind. Whether you need an empathetic sounding board, a somatic exercise, or a path toward calm, we are right here with you.
            </p>
          </div>

          <div className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/30 space-y-3">
            <h3 className="font-headline font-bold text-base text-on-surface">
              Need Licensed Professional Care?
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Sometimes you need a real voice. Connect 1-on-1 with our vetted therapists for confidential clinical sessions.
            </p>
            <Link
              to="/therapists"
              className="w-full py-3 rounded-xl bg-primary text-white font-bold text-xs shadow flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all"
            >
              <User className="w-4 h-4" />
              <span>Browse Therapist Directory</span>
            </Link>
          </div>

          <div className="p-5 bg-coral/15 rounded-2xl border-l-4 border-coral text-xs text-on-surface-variant space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-coral-dark text-[11px] uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <span>Crisis Notice</span>
            </div>
            <p className="leading-relaxed">
              This interactive companion is for gentle emotional wellness and mindfulness. If you are experiencing acute distress or self-harm thoughts, please call or text <strong>988</strong> immediately.
            </p>
          </div>
        </div>

        {/* Right Side: Interactive Chat Interface */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-[36px] shadow-sm border border-surface-container-high overflow-hidden flex flex-col h-[650px]">
            {/* Chat Top Bar */}
            <div className="px-6 py-4 border-b border-surface-container-high flex items-center justify-between bg-surface-container-low/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white">
                  <Wind className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h2 className="font-headline font-bold text-sm text-on-surface">
                    Sanctuary Digital Guide
                  </h2>
                  <span className="text-[11px] text-primary font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary inline-block" /> Active & Confidential
                  </span>
                </div>
              </div>
              <Link
                to="/explore"
                className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
              >
                <span>Breathing Pacer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Messages Scroll View */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 max-w-[85%] ${m.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                      m.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-primary-container/30 text-primary'
                    }`}
                  >
                    {m.sender === 'user' ? 'You' : <Wind className="w-4 h-4" />}
                  </div>

                  <div
                    className={`p-4 rounded-2xl text-xs leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-primary text-white rounded-tr-none'
                        : 'bg-surface-container-low text-on-surface rounded-tl-none border border-outline-variant/30'
                    }`}
                  >
                    <p className="whitespace-pre-line">{m.text}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2 text-xs text-on-surface-variant items-center animate-pulse pl-11">
                  <Sparkles className="w-3.5 h-3.5 text-coral" />
                  <span>Sanctuary guide is reflecting...</span>
                </div>
              )}
            </div>

            {/* Quick Prompt Buttons */}
            <div className="px-6 py-2 border-t border-surface-container-high flex gap-2 overflow-x-auto pb-2 scrollbar-thin bg-[#fbf9f5]">
              {quickPrompts.map((p, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(p)}
                  className="px-3 py-1.5 rounded-full bg-white border border-outline-variant/40 hover:border-primary text-on-surface-variant hover:text-primary text-[11px] font-semibold whitespace-nowrap transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-4 bg-white border-t border-surface-container-high flex gap-2"
            >
              <input
                type="text"
                placeholder="Type your reflection or question freely..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-grow px-4 py-3 rounded-full border border-outline-variant/60 focus:outline-none focus:border-primary text-xs bg-[#fbf9f5]"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-full bg-primary hover:bg-opacity-90 text-white font-bold text-xs flex items-center justify-center shadow transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
