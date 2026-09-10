import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wind, ShieldAlert, Heart, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryNavLinks = [
    { name: 'Explore', path: '/explore' },
    { name: 'Therapists', path: '/therapists' },
    { name: 'My Bookings', path: '/my-bookings' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Community', path: '/community' },
    { name: 'Journal', path: '/journal' },
    { name: 'Blog', path: '/blog' },
    { name: 'Progress', path: '/progress' },
    { name: 'About', path: '/about' },
    { name: 'Admin', path: '/admin' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fbf9f5]/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-[#fbf9f5]/85 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
            <Wind className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <span className="font-headline font-bold text-lg md:text-xl text-primary tracking-tight block leading-tight">
              A Place to Breathe
            </span>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium block">
              Digital Sanctuary
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center gap-5">
          {primaryNavLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-semibold transition-colors relative py-1 ${
                  isActive
                    ? 'text-primary font-bold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-in fade-in" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Tablet / Compact Nav for medium screens */}
        <div className="hidden md:flex xl:hidden items-center gap-3">
          <Link
            to="/explore"
            className={`text-xs font-semibold ${location.pathname === '/explore' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
          >
            Explore
          </Link>
          <Link
            to="/therapists"
            className={`text-xs font-semibold ${location.pathname === '/therapists' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
          >
            Therapists
          </Link>
          <Link
            to="/journal"
            className={`text-xs font-semibold ${location.pathname === '/journal' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
          >
            Journal
          </Link>
          <Link
            to="/community"
            className={`text-xs font-semibold ${location.pathname === '/community' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
          >
            Community
          </Link>
        </div>

        {/* Crisis Hotline Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/crisis"
            className="flex items-center gap-1.5 text-coral border-2 border-coral px-4 py-1.5 rounded-full font-bold text-xs hover:bg-coral hover:text-white transition-all shadow-sm duration-300"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Crisis Support</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 text-primary hover:bg-surface-container rounded-xl transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile / Tablet Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-[#fbf9f5] border-b border-surface-container-high px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {primaryNavLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                    isActive
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="pt-3 border-t border-surface-container-high">
            <Link
              to="/crisis"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-coral text-white font-bold text-xs shadow"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Crisis Support Center (988)</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
