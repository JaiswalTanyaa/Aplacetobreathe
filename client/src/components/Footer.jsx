import React from 'react';
import { Link } from 'react-router-dom';
import { Wind, Heart, Shield, Globe, Share2, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full mt-24 bg-surface-container border-t border-outline-variant/30 text-body">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Col 1: About */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white">
              <Wind className="w-4 h-4" />
            </div>
            <span className="font-headline font-bold text-xl text-primary">A Place to Breathe</span>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-md mb-6">
            A safe, digital sanctuary committed to supporting mental wellbeing. Ground yourself with intuitive breathwork, connect with licensed professionals, and embrace a caring community.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:scale-105 transition-transform"
              title="Global Community"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:scale-105 transition-transform"
              title="Share the Sanctuary"
            >
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div>
          <h4 className="font-headline font-bold text-on-surface mb-4">Sanctuary Spaces</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link to="/explore" className="text-on-surface-variant hover:text-primary transition-colors">
                Explore Activities
              </Link>
            </li>
            <li>
              <Link to="/therapists" className="text-on-surface-variant hover:text-primary transition-colors">
                Find a Therapist
              </Link>
            </li>
            <li>
              <Link to="/my-bookings" className="text-on-surface-variant hover:text-primary transition-colors">
                My Bookings
              </Link>
            </li>
            <li>
              <Link to="/workshops" className="text-on-surface-variant hover:text-primary transition-colors">
                Workshops & Webinars
              </Link>
            </li>
            <li>
              <Link to="/journal" className="text-on-surface-variant hover:text-primary transition-colors">
                Private Journal
              </Link>
            </li>
            <li>
              <Link to="/community" className="text-on-surface-variant hover:text-primary transition-colors">
                Stories of Hope
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-on-surface-variant hover:text-primary transition-colors">
                The Breathing Room Blog
              </Link>
            </li>
            <li>
              <Link to="/progress" className="text-on-surface-variant hover:text-primary transition-colors">
                Mindful Progress
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-on-surface-variant hover:text-primary transition-colors">
                About Our Mission
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Crisis Support */}
        <div>
          <h4 className="font-headline font-bold text-on-surface mb-4">Immediate Help</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
            If you or someone you know is struggling or in acute distress, help is accessible 24/7.
          </p>
          <div className="bg-white/90 p-4 rounded-2xl border border-outline-variant/40 space-y-2 shadow-sm">
            <div className="flex items-center gap-2 text-coral font-bold text-xs">
              <Shield className="w-4 h-4" />
              <span>988 Suicide & Crisis Lifeline</span>
            </div>
            <p className="text-[11px] text-on-surface-variant">Available 24/7 across the US & Canada (Call or Text 988)</p>
            <Link
              to="/crisis"
              className="inline-block text-xs font-bold text-primary hover:underline pt-1"
            >
              Emergency Support Directory &rarr;
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-outline-variant/20 py-6 px-6 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-on-surface-variant gap-4">
        <p>&copy; {new Date().getFullYear()} A Place to Breathe. Your safe space for healing.</p>
        <div className="flex items-center gap-6">
          <Link to="/privacy" className="hover:text-primary flex items-center gap-1">
            <Lock className="w-3 h-3" />
            <span>Privacy Covenant</span>
          </Link>
          <Link to="/about" className="hover:text-primary">Terms of Peace</Link>
          <Link to="/therapists" className="hover:text-primary">Clinical Verification</Link>
        </div>
      </div>
    </footer>
  );
}
